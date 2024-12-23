import React from "react";
import Anuncios from "../screen/private/Menu/Anuncios/Anuncios";

const NoComponent = () => <></>;

const navigationItems = [
  {
    name: "anuncios",
    text: "Indicadores",
    component: Anuncios,
    image: require("../assets/Logo_TGo_80x80.png"),
    //disabled: true,
    type: 1
  },
];

export default navigationItems;
