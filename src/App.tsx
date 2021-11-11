import React from 'react';
import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {DashBoard} from "./components/Dashboard";
import {createServer} from "miragejs";

//configura o miragejs
createServer({
   routes() {
      this.namespace = 'api';
      this.get('/transactions', (schema: any) => {
         return [
             {
                 id:1,
                 title: 'Transaction 1',
                 amout:400,
                 type:'deposit',
                 category:'Food',
                 createdAt: new Date()
             }
         ]
      });
   }
});

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
