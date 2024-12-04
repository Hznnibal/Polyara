// components/finances/transactions-table.tsx

import React from 'react';

type Transaction = {
    id: number;
    date: string;
    description: string;
    amount: number;
    status: string;
};

type TransactionsTableProps = {
    data: Transaction[];
};

export const DataTable: React.FC<TransactionsTableProps> = ({ data }) => {
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// Fichier de données fictives
export const transactionData = [
    {
        id: 1,
        date: '2024-12-01',
        description: 'Payment for service X',
        amount: 100,
        status: 'Completed',
    },
    {
        id: 2,
        date: '2024-12-02',
        description: 'Payment for product Y',
        amount: 250,
        status: 'Pending',
    },
    {
        id: 3,
        date: '2024-12-03',
        description: 'Refund for service Z',
        amount: -50,
        status: 'Completed',
    },
];
