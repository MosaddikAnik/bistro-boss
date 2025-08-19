import SectionTitle from "../../Sheard/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import "./Featured.css"

const Featured = () => {
  return (
    <div  className="featured mb-20 bg-fixed">
     <div className="py-11">
       <SectionTitle 
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
     </div>
      <div className="md:flex items-center justify-center px-36 py-20">
        <div className="">
          <img src={img} alt="" className="" />
        </div>
        <div className="md:ml-10 text-white">
          <p>March 20, 2025</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn border-b-black mt-4 uppercase  text-black">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
