import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TableDetails = () => {
    const { id } = useParams();
    const [table, setTable] = useState(null);

    useEffect(() => {
        const fetchTable = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/tables/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTable(data.data.furniture);
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
            <div key={table.id} className="flex items-center" >
                <img src={table.image} alt={table.name} className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl" />
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">{table.name}</h1>
                    <p className="text-lg text-gray-700">{table.price} €</p>
                    <p className="text-lg mt-4">{table.description}</p>
                    <p className="text-lg mt-4">Longueur: {table.length}</p>
                    <p className="text-lg mt-4">Profondeur: {table.width}</p>
                    <p className="text-lg mt-4">Hauteur: {table.height}</p>
                </div>
            </div>
        </div>
    );
};

export default TableDetails;