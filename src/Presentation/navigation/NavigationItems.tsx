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
  {
    name: "clientes",
    text: "Clientes",
    component: Anuncios,
    image: require("../assets/Logo_TGo_80x80.png"),
    //disabled: true,
    type: 1
  },
  {
    name: "auditoria",
    text: "Auditoria",
    component: Anuncios ,
    image: require("../assets/Logo_TGo_80x80.png"),
    //disabled: true,
    type: 1
  },
  {
    name: "mensajes",
    text: "Mensajes",
    component: Anuncios ,
    image: require("../assets/Logo_TGo_80x80.png"),
    //disabled: true,
    type: 1
  },
  {
    name: "ayuda",
    text: "Ayuda",
    component: Anuncios ,
    image: require("../assets/Logo_TGo_80x80.png"),
    //disabled: true,
    type: 1
  },
];

export default navigationItems;
