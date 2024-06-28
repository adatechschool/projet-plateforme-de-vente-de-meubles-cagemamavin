import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ChaiseDetails = () => {
    const { id } = useParams();
    const [chaise, setChaise] = useState(null);

    useEffect(() => {
        const fetchChaise = async () => {
            try {
                const response = await fetch("https://run.mocky.io/v3/c2cf6a2b-8ff7-4509-9c97-11c21c3a55a2");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setChaise(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchChaise();
    }, [id]);

    if (!chaise) {
        return <div>Loading...</div>;
    }

    return (
        <div className="chaise-details p-4">
            {chaise.map(chaise => (
                <div key={chaise.id} >
                    <img src={chaise.image} alt={chaise.name} />
                    <h1 className="text-2xl font-bold">{chaise.name}</h1>
                    <p className="text-lg text-gray-700">{chaise.price} €</p>
                    <p className="text-lg mt-4">{chaise.description}</p>
                    <p className="text-lg mt-4">Dimensions: {chaise.dimensions}</p>
                </div>

            ))}
        </div>
    );
};

export default ChaiseDetails;
