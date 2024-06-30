import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import '../index.css';

const Chaises = () => {
    const [chaises, setChaises] = useState([]);
    console.log("entree composant")
    useEffect(() => {
        const fetchData = async () => {
            try {
                // requête HTTP GET à l'endpoint '/api....' pour récupérer les données des canapés
                const response = await fetch("https://run.mocky.io/v3/586a4558-8bff-4c63-a368-8596516d4b2c");
                if (!response.ok) {
                    throw new Error("Response was not ok");
                }
                const data = await response.json();
                setChaises(data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching chaises", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Chaises</h1>
            <div className="grid grid-cols-4 gap-5">
                {chaises.map(chaise => (
                    <div key={chaise.id} className="grid grid-cols-1 gap-5 mb-4">
                        <div className="bg-white shadow-md rounded p-4">
                            <Link to={`/chaises/${chaise.id}`}>
                                <img src={chaise.image} style={{ cursor: 'pointer' }} alt={chaise.name} className="w-full h-48 object-cover" />
                            </Link>
                            <h2>{chaise.name}</h2>
                            <p>Prix : {chaise.price}€</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};


export default Chaises;