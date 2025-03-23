import  { useState } from 'react';

const TableData = ({ headers, data }) => {
    const [isAscending, setIsAscending] = useState(true);
    
    return (
        <div className="mt-2">
            <table className="min-w-full border-collapse border border-gray-300">
                {/* Table Header */}
                <thead className="hidden lg:table w-full">
                    <tr className="bg-table-gray text-sm">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="border border-gray-300 px-4 py-2 cursor-pointer"
                                onClick={() => 
                                    (header === "তারিখ" || header === "Transaction Date") &&
                                    setIsAscending(!isAscending)
                                }
                            >
                                {header}
                                {(header === "তারিখ" || header === "Transaction Date") && (
                                    isAscending ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="gray"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="inline ml-2"
                                        >
                                            <path d="M12 5l-7 7h14l-7-7z"></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="gray"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="inline ml-2"
                                        >
                                            <path d="M12 19l7-7H5l7 7z"></path>
                                        </svg>
                                    )
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border border-gray-300">
                                {headers.map((header, colIndex) => (
                                    <td key={colIndex} className="border border-gray-300 px-4 py-2">
                                        {row[header] || "N/A"}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={headers.length} className="text-center text-gray-500 py-4">
                                কোনো তথ্য নেই
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TableData;
