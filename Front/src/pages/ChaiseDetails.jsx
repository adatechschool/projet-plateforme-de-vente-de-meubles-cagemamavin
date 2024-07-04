import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ChaiseDetails = () => {
    const { id } = useParams();
    const [chaise, setChaise] = useState(null);

    useEffect(() => {
        const fetchChaise = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/chaises/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("Received data:", data)
                setChaise(data.data.furniture);
            } catch (error) {
                console.error('Error fetching data:', error);
                setChaise(null);
            }
        };

        fetchChaise();
    }, [id]);

    if (!chaise) {
        return <div>Loading...</div>;
    }

    return (
        <div className="chaise-details p-4">
            <div key={chaise.id} className="flex items-center" >
                <img src={chaise.image} alt={chaise.name} className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl" />
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">{chaise.name}</h1>
                    <p className="text-lg text-gray-700">{chaise.price} €</p>
                    <p className="text-lg mt-4">{chaise.description}</p>
                    <p className="text-lg mt-4">Longueur: {chaise.length}</p>
                    <p className="text-lg mt-4">Profondeur: {chaise.width}</p>
                    <p className="text-lg mt-4">Hauteur: {chaise.height}</p>
                </div>
            </div>
        </div>
    );
};

export default ChaiseDetails;
