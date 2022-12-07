import React from "react";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <nav>
                <li>
                    Home
                </li>
            </nav>
            {children}
        </div>
    )
}

export default Layout;
