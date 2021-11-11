import { Container } from "./style";
import {useEffect} from  "react"
import {api} from "../../services/api";

export function TransactionsTable(){


    useEffect(()=>{
        api('transactions')
            .then(response => console.log(response.data))
    },[]);


    return (

        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvovimento de website</td>
                        <td className="deposit">R$ 12000,00</td>
                        <td>desenvolvimento</td>
                        <td>20/10/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ -11000,00</td>
                        <td>casa</td>
                        <td>20/10/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
}