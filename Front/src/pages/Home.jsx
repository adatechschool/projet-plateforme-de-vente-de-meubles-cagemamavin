import React from "react";
import { Card } from "flowbite-react";
import MainPicture from "../components/MainPicture";
import LandPageMiniPic from "../components/LandPageMiniPic";

const Home = (props) => {
  const images = [
    {
      src: "https://cdn.sklum.com/fr/wk/2660449/chaise-de-salle-a-manger-en-tissu-et-bois-de-cloda.jpg?cf-resize=gallery",
      alt: "un meuble vitaif",
    },
    {
      src: "https://rededition.com/wp-content/uploads/2018/06/Collection-REDEDITION-Cre%CC%81dit-Photo-%C2%A9-Frederic-Lucano-En-vente-www.rededition.comFL-13566-1-e1612795231761-scaled.jpg",
      alt: "un autre meuble vitaif",
    },
    {
      src: "https://rededition.com/wp-content/uploads/2018/06/Collection-REDEDITION-Cre%CC%81dit-Photo-%C2%A9-Frederic-Lucano-En-vente-www.rededition.comFL-13566-1-e1612795231761-scaled.jpg",
      alt: "un troisième meuble vitaif",
    },
    // ajoutez autant d'images que vous le souhaitez
  ];
  images.map((image, index) => {
    console.log(image.src);
  });
  return (
    <div className="grid grid-rows-2">
      <div className="h-full">
        <MainPicture />
      </div>
      <div className="grid grid-cols-3 gap-2 h-full">
        {images.map((image, index) => (
          <LandPageMiniPic key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};
export default Home;
