import img from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet";
import Cover from "../Sheard/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useHooks from "../../Hooks/useHooks";
import MenuItems from "../Sheard/MenuItems/MenuItems";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useHooks();

  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>ORDER PAGE</title>
      </Helmet>

      <Cover
        img={img}
        title="OUR ORDER"
        details="Would you like to try a dish?"
      />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Drinks</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
        </TabList>

        {/* Salad */}
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-5">
            {salad.map((item) => (
              <MenuItems key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>

        {/* Pizza */}
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-5">
            {pizza.map((item) => (
              <MenuItems key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>

        {/* Drinks */}
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-5">
            {drinks.map((item) => (
              <MenuItems key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>

        {/* Soup */}
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-5">
            {soup.map((item) => (
              <MenuItems key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>

        {/* Dessert */}
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-5">
            {dessert.map((item) => (
              <MenuItems key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
