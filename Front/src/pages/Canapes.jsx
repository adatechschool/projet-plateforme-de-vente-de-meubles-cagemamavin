import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../index.css';

const Canapes = () => {
    const [canapes, setCanapes] = useState([]);
    console.log("entree composant")
    useEffect(() => {
        const fetchData = async () => {
            try {
                // requête HTTP GET à l'endpoint '/api....' pour récupérer les données des canapés
                const response = await fetch("https://run.mocky.io/v3/437f5cb2-3be3-453f-b4ef-23a8c625a2c9");
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
            <ul className='canapes_list'>
                {canapes.map(canape => (
                    <li key={canape.id}>
                        <h2>{canape.name}</h2>
                        <p>Prix : {canape.price}€</p>
                        <img src={canape.image} alt={canape.name} /> {/* renvoie le nom du canapé si pas d'image */}
                        {/* <p>Description : {canape.description}</p>
                        <p>Dimensions : {canape.dimensions}</p> */}

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Canapes;