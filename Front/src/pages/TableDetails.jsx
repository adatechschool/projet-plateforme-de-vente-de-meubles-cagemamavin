import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TableDetails = () => {
    const { id } = useParams();
    const [table, setTable] = useState(null);

    useEffect(() => {
        const fetchTable = async () => {
            try {
                // const response = await fetch(`https://run.mocky.io/v3/ee164a5e-a3ab-4d7d-8388-23ca566aa010/${id}`);
                const response = await fetch("https://run.mocky.io/v3/eb26b0e5-c35a-4b5c-a1d8-417c0e683843");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTable(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTable();
    }, [id]);

    if (!table) {
        return <div>Loading...</div>;
    }

    return (
        <div className="table-details p-4">
            {table.map(table => (
                <div key={table.id} >
                    <img src={table.image} alt={table.name} />
                    <h1 className="text-2xl font-bold">{table.name}</h1>
                    <p className="text-lg text-gray-700">{table.price} €</p>
                    <p className="text-lg mt-4">{table.description}</p>
                    <p className="text-lg mt-4">Dimensions: {table.dimensions}</p>
                </div>

            ))}
        </div>
    );
};

export default TableDetails;