import SectionTitle from "../../Sheard/SectionTitle/SectionTitle";
import img from "../../../assets/home/slide1.jpg"

const Food = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <section className="flex px-14 mb-24">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="  h-[300px]" >
            <img
              src={img}
            />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-end">
              <button className="btn border-b-amber-500 uppercase hover:bg-[#1F2937] text-[#BB8506]">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className=" w-[420px] h-[300px]" >
            <img
              src={img}
            />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-end">
              <button className="btn border-b-amber-500 uppercase hover:bg-[#1F2937] text-[#BB8506]">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className=" w-[420px] h-[300px]" >
            <img
              src={img}
            />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-end">
              <button className="btn border-b-amber-500 uppercase hover:bg-[#1F2937] text-[#BB8506]">add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;
