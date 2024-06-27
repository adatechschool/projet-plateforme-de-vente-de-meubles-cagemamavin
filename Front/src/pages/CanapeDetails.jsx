// src/pages/CanapeDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CanapeDetails = () => {
    const { id } = useParams();
    const [canape, setCanape] = useState(null);

    useEffect(() => {
        const fetchCanape = async () => {
            try {
                // const response = await fetch(`https://run.mocky.io/v3/ee164a5e-a3ab-4d7d-8388-23ca566aa010/${id}`);
                const response = await fetch("https://run.mocky.io/v3/eb26b0e5-c35a-4b5c-a1d8-417c0e683843");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCanape(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCanape();
    }, [id]);

    if (!canape) {
        return <div>Loading...</div>;
    }

    return (
        <div className="canape-details p-4">
            {canape.map(canape => (
                <div key={canape.id} >
                    <img src={canape.image} alt={canape.name} />
                    <h1 className="text-2xl font-bold">{canape.name}</h1>
                    <p className="text-lg text-gray-700">{canape.price} €</p>
                    <p className="text-lg mt-4">{canape.description}</p>
                    <p className="text-lg mt-4">Dimensions: {canape.dimensions}</p>
                </div>

            ))}
        </div>
    );
};

export default CanapeDetails;
