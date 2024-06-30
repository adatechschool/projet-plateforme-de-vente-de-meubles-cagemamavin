import React from 'react';
import { Link } from 'react-router-dom';
import personIcon from '../assets/person.png';

const Compte = () => {
    return (
        <div className="relative">
            {/* Icône person */}
            <Link to="/connexion">
                <img
                    src={personIcon}
                    alt="Mon compte"
                    className="h-6 w-6 cursor-pointer"
                />
            </Link>

        </div>
    );
};

export default Compte;