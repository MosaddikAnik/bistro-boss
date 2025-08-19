import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Sheard/SectionTitle/SectionTitle';
import MenuItem from '../../Sheard/MenuItem/MenuItem';

const Popular = () => {
      const [menu,setMenu] = useState([])
      useEffect(()=>{
            fetch("menu.json")
            .then(res => res.json())
            .then(data =>{
                  const popularItem = data.filter(item => item.category === "popular")
                  setMenu(popularItem)
            })
      },[])
      return (
            <section>
                  <SectionTitle
                    subHeading={"---Check it out---"}
                    heading={"FROM OUR MENU"}
                  ></SectionTitle>
                 <div className='grid md:grid-cols-2 space-x-4 gap-4 mb-20'>
                   {
                        menu.map(item => <MenuItem
                         key={item._id}
                         item={item}
                        ></MenuItem>)
                  }
                 </div>
                  <div className='items-center justify-center flex -mt-7'>
                      <button className="btn border-b-black uppercase">View Full  Menu</button>
                  </div>
                  <div className=" mb-20 mt-40">
                         <div className=" bg-black  flex items-center justify-center">
                           <div className="bg-black bg-opacity-90 p-8 w-7xl h-40 rounded-lg text-center">
                             <p className="text-white p-4 text-4xl leading-relaxed">
                               Call Us: +88 0192345678910
                             </p>
                           </div>
                         </div>
                       </div>
            </section>
      );
};

export default Popular;