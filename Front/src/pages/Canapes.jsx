import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
// import Header from '../components/Header';
import '../index.css';

const Canapes = () => {
    const [canapes, setCanapes] = useState([]);
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
                setCanapes(data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching canapés", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Canapés</h1>
            <div className="grid grid-cols-4 gap-5">
                {canapes.map(canape => (
                    <div key={canape.id} className="grid grid-cols-1 gap-5 mb-4">
                        <div className="bg-white shadow-md rounded p-4">
                            <Link to={`/canapes/${canape.id}`}>
                                <img src={canape.image} style={{ cursor: 'pointer' }} alt={canape.name} className="w-full h-48 object-cover" />
                            </Link>
                            <h2>{canape.name}</h2>
                            <p>Prix : {canape.price}€</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Canapes;