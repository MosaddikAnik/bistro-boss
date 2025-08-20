import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Sheard/Cover";
import img from "../../../assets/menu/banner3.jpg"
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../Sheard/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>OUR MENU</title>
      </Helmet>
      <Cover img={img} title="OUR MENU" details="Would you like to try a dish?"></Cover>
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      <MenuCategory></MenuCategory>
      
    </div>
  );
};

export default Menu;
