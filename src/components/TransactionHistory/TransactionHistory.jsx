
import './TransactionHistory.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className="transaction-table">
            <thead className='transaction-head-wrapper'>
                <tr className='transaction-head'>
                    <th className='transaction-head-item'>Type</th>
                    <th className='transaction-head-item'>Amount</th>
                    <th className='transaction-head-item'>Currency</th>
                </tr>
            </thead>

            <tbody className='transaction-body-wrapper'>
                {items.map(item => {
                    return <tr className='transaction-body' key={item.id}>
                        <td className='transaction-body-item'>{item.type}</td>
                        <td className='transaction-body-item'>{item.amount}</td>
                        <td className='transaction-body-item'>{item.currency}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}

export default TransactionHistory;