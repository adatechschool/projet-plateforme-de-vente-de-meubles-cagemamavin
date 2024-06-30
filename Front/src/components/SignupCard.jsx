import { Card } from 'flowbite-react';
import React from 'react';

const SignupCard = () => {
    return (
        <div className="max-w-sm w-full  shadow-lg rounded-lg overflow-hidden mx-auto">
            <Card>
                <div className="bg-[#F0EFEB] px-6 py-4">
                    <div className="font-bold text-xl mb-2">Créer un nouveau compte</div>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Nom d'utilisateur
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Nom d'utilisateur"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Mot de passe
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-stone-400 hover:bg-stone-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Créer un compte
                            </button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default SignupCard;
