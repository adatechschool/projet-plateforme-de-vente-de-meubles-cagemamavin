import React from "react";
import "../index.css";
import { Card } from "flowbite-react";

const MainPicture = () => {
  return (
    <Card
      href="#"
      className="mx-auto flex justify-center items-start mt-8 h-full w-full max-w-screen-lg  bg-opacity-80 backdrop-blur-sm bg-white/30 bg-[#ffedd8] rounded-md"
    >
      <img
        src="https://d.media.kavehome.com/image/upload/w_1152,c_fill,ar_1.5,f_auto/v1716811966/entities/collection-images/nora_main.jpg"
        alt="Example"
        className="w-full h-full object-cover"
      />
    </Card>
  );
};

export default MainPicture;
