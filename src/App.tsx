import React from 'react';
import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {DashBoard} from "./components/Dashboard";


export function App() {
    return (
        <>
            <Header/>
            <DashBoard/>
            <GlobalStyle/>
        </>
    );
}

// export default App;
