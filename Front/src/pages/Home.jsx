import React from 'react';
import { Card } from 'flowbite-react';

const Home = (props) => {
    return (
        <div className="container mx-auto flex justify-center items-start mt-8">
            <Card
                href="#"
                className="w-full max-w-screen-lg min-h-[50vh] bg-opacity-80 backdrop-blur-sm bg-white/30 bg-[#ffedd8] rounded-md"
            >
                <img
                    src="https://d.media.kavehome.com/image/upload/w_1152,c_fill,ar_1.5,f_auto/v1716811966/entities/collection-images/nora_main.jpg"
                    alt="Example"
                    className="w-full h-full object-cover"
                />
            </Card>
        </div>
    );
};

export default Home;
