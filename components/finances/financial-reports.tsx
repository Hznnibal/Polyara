import React from 'react';

type Report = {
    title: string;
    value: number;
    trend: 'increase' | 'decrease';
};

const reports: Report[] = [
    { title: 'Revenue', value: 5000, trend: 'increase' },
    { title: 'Expenses', value: 2000, trend: 'decrease' },
    { title: 'Net Profit', value: 3000, trend: 'increase' },
];

export const FinancialReports: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {reports.map((report) => (
                <div
                    key={report.title}
                    className={`p-6 rounded-lg shadow-lg ${report.trend === 'increase' ? 'bg-green-100' : 'bg-red-100'}`}
                >
                    <h3 className="text-xl font-semibold">{report.title}</h3>
                    <p className="text-2xl font-bold mt-2">${report.value}</p>
                    <p className={`mt-2 text-sm ${report.trend === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                        {report.trend === 'increase' ? 'Trending Up' : 'Trending Down'}
                    </p>
                </div>
            ))}
        </div>
    );
};
