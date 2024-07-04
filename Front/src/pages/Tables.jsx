import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import '../index.css';

const Tables = () => {
    const [tables, setTables] = useState([]);
    console.log("entree composant")
    useEffect(() => {
        const fetchData = async () => {
            try {
                // requête HTTP GET à l'endpoint '/api....' pour récupérer les données des canapés
                const response = await fetch("http://localhost:8000/api/v1/tables");
                if (!response.ok) {
                    throw new Error("Response was not ok");
                }
                const data = await response.json();

                const filteredTables = data.data.furnitures.filter(table => table.category_id === 3);


                setTables(filteredTables);
                console.log("data ", data)
            } catch (error) {
                console.error("Error fetching tables", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Tables</h1>
            <div className="grid grid-cols-4 gap-5">
                {tables.map(table => (
                    <div key={table.id} className="grid grid-cols-1 gap-5 mb-4">
                        <div className="bg-white shadow-md rounded p-4">
                            <Link to={`/tables/${table.id}`}>
                                <img src={table.image} style={{ cursor: 'pointer' }} alt={table.name} className="w-full h-48 object-cover" />
                            </Link>
                            <h2>{table.name}</h2>
                            <p>Prix : {table.price}€</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tables;