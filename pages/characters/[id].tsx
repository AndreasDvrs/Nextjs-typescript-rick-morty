import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import imageLoader from "../../imageLoader";
import { Character, GetCharacterResults } from "../../types";
import styles from '../../styles/Character.module.css';

const CharacterPage = ({char}: {char: Character}) => {
    const router = useRouter();
    console.log(router.query.id);

    return (
        <div className={styles.container}>
            <h1>{char.name}</h1>
            <Image loader={imageLoader} unoptimized src={char.image} alt={CharacterPage.name} width={200} height={200}></Image>
        </div>
    )
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
    //@ts-ignore
    return <Layout>{page}</Layout>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`);
    const char = await res.json();
    return {
        props: {char}
    }
}

export default CharacterPage;