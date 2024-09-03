import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Empêche la soumission par défaut du formulaire
            performSearch();
        }
    };

    const performSearch = async () => {
        // Mapping des termes de recherche aux types correspondants
        const searchMapping = {
            'canapé': 'canapes',
            'canape': 'canapes',
            'canapés': 'canapes',
            'canapes': 'canapes',
            'table': 'tables',
            'tables': 'tables',
            'chaise': 'chaises',
            'chaises': 'chaises'
        };

        // Convertir la requête de l'utilisateur en type de catégorie correspondant
        const mappedQuery = searchMapping[query.toLowerCase()] || query;
        console.log("l'utilisateur veut chercher : ", mappedQuery)

        try {
            const response = await fetch(`http://localhost:8000/api/v1/catalogue/${mappedQuery}`);

            const data = await response.json();
            console.log("data ", data)

            if (response.ok) {
                // Si la réponse est correcte, mettre à jour les résultats
                const results = data.data.furnitures;
                // Naviguer vers la page de résultats avec les données
                navigate('/search', { state: { results } });
            } else {
                // Si la réponse indique une erreur, afficher un message à l'utilisateur
                console.error(`Error fetching search results: ${data.message}`);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <form className="max-w-sm px-4">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute z-10 top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>
    );
};

export default SearchBar;