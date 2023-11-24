import React from 'react';
import './transactions.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className='head'>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className='body'>
        {items.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? 'one' : 'two'}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
