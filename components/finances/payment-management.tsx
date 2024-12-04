'use client'

import React, { useState } from 'react';

type Payment = {
    id: number;
    client: string;
    amount: number;
    status: 'Pending' | 'Completed';
};

const initialPayments: Payment[] = [
    { id: 1, client: 'Client A', amount: 200, status: 'Pending' },
    { id: 2, client: 'Client B', amount: 150, status: 'Completed' },
    { id: 3, client: 'Client C', amount: 300, status: 'Pending' },
];

export const PaymentManagement: React.FC = () => {
    const [payments, setPayments] = useState(initialPayments);

    const handlePaymentStatusChange = (id: number) => {
        setPayments((prev) =>
            prev.map((payment) =>
                payment.id === id ? { ...payment, status: payment.status === 'Pending' ? 'Completed' : 'Pending' } : payment
            )
        );
    };

    return (
        <div className="p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Payment Management</h2>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="border-b py-2 px-4">Client</th>
                        <th className="border-b py-2 px-4">Amount</th>
                        <th className="border-b py-2 px-4">Status</th>
                        <th className="border-b py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id}>
                            <td className="border-b py-2 px-4">{payment.client}</td>
                            <td className="border-b py-2 px-4">${payment.amount}</td>
                            <td className="border-b py-2 px-4">{payment.status}</td>
                            <td className="border-b py-2 px-4">
                                <button
                                    onClick={() => handlePaymentStatusChange(payment.id)}
                                    className={`px-4 py-2 rounded ${payment.status === 'Pending' ? 'bg-blue-500' : 'bg-green-500'} text-white`}
                                >
                                    {payment.status === 'Pending' ? 'Mark as Completed' : 'Mark as Pending'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
