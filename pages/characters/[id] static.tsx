import Image from "next/image";
import imageLoader from "../../imageLoader";
import { Character, GetCharacterResults } from "../../types";

const CharacterPage = ({char}: {char: Character}) => {
    return (
        <div>
            <h1>{char.name}</h1>
            <Image loader={imageLoader} unoptimized src={char.image} alt={CharacterPage.name} width={200} height={200}></Image>
        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const { results }: GetCharacterResults = await res.json();

    return {
        paths: results.map((char) => {
            return {params: {id: String(char.id)}}
        }),
        fallback: false
    }
}

export const getStaticProps = async ({params}: {params: {id: string}}) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const char = await res.json();
    return {
        props: {char}
    }
}

export default CharacterPage;