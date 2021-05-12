import { Container } from '../Dashboard/style';
import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionsTable';

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}