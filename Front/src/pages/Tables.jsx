import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
// import Header from '../components/Header';
import '../index.css';

const Tables = () => {
    const [tables, setTables] = useState([]);
    console.log("entree composant")
    useEffect(() => {
        const fetchData = async () => {
            try {
                // requête HTTP GET à l'endpoint '/api....' pour récupérer les données des canapés
                const response = await fetch("https://run.mocky.io/v3/ee164a5e-a3ab-4d7d-8388-23ca566aa010");
                if (!response.ok) {
                    throw new Error("Response was not ok");
                }
                const data = await response.json();
                setTables(data);
                console.log(data)
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