import useHooks from "../../../Hooks/useHooks";
import Cover from "../../Sheard/Cover";
import MenuItem from "../../Sheard/MenuItem/MenuItem";

// Images
import salad1 from "../../../assets/menu/salad-bg.jpg";
import pizza1 from "../../../assets/menu/pizza-bg.jpg";
import soup1 from "../../../assets/menu/soup-bg.jpg";
import dessert1 from "../../../assets/menu/dessert-bg.jpeg";
import drinks1 from "../../../assets/menu/soft-drink-cans-800x400.jpg";
import { Link } from "react-router-dom";


// Reusable Category Section Component
const CategorySection = ({ img, title, details, items }) => {

  return (
    <>
      <Cover img={img} title={title} details={details} />
      <div className="grid md:grid-cols-2 space-x-4 gap-4 mb-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
        <Link to="/order"><button className="btn -mt-14 justify-center items-center border-b-amber-500 uppercase hover:bg-[#1F2937] text-[#BB8506]">Order your favorite food.</button></Link>
    </>
  );
};

const MenuCategory = () => {
  const [menu] = useHooks([]);

  // categories
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className="space-y-14">
      <CategorySection
        img={salad1}
        title="SALAD"
        details="Would you like to try a dish?"
        items={salad}
      />

      <CategorySection
        img={dessert1}
        title="DESSERT"
        details="Would you like to try a dish?"
        items={dessert}
      />

      <CategorySection
        img={pizza1}
        title="PIZZA"
        details="Would you like to try a dish?"
        items={pizza}
      />

      <CategorySection
        img={drinks1}
        title="DRINKS"
        details="Would you like to try a dish?"
        items={drinks}
      />

      <CategorySection
        img={soup1}
        title="SOUP"
        details="Would you like to try a dish?"
        items={soup}
      />

      <CategorySection
        img={salad1}
        title="TODAY'S OFFER"
        details="Don’t miss out!"
        items={offered}
      />
    </div>
  );
};

export default MenuCategory;
