import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Search = () => {
    const { state } = useLocation();
    const results = state && state.results ? state.results : [];
    console.log("data dans search ", results)
    console.log("results.length ", results.length)

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Résultats de la recherche</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((result, index) => (
                    <div key={index} className="grid grid-cols-1 gap-5 mb-4">
                        <div className="bg-white shadow-md rounded p-4">
                            <Link to={`/furniture/${result.id}`}> {/* Utilisez Link pour envelopper l'image */}
                                <img src={result.image} alt={result.furniture_name} className="w-full h-48 object-cover mb-4 cursor-pointer" />
                            </Link>
                            <h2 className="font-semibold">{result.furniture_name}</h2>
                            <p>{result.name}</p>
                            <p>Prix : {result.price}€</p>
                            {/* Ajoutez d'autres champs si nécessaire */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
