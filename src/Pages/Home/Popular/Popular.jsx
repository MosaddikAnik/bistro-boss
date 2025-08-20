import SectionTitle from '../../Sheard/SectionTitle/SectionTitle';
import MenuItem from '../../Sheard/MenuItem/MenuItem';
import useHooks from '../../../Hooks/useHooks';

const Popular = () => {
      const [menu] = useHooks([])
      const popular = menu.filter(item => item.category === "popular" )
      return (
            <section>
                  <SectionTitle
                    subHeading={"---Check it out---"}
                    heading={"FROM OUR MENU"}
                  ></SectionTitle>
                 <div className='grid md:grid-cols-2 space-x-4 gap-4 mb-20'>
                   {
                        popular.map(item => <MenuItem
                         key={item._id}
                         item={item}
                        ></MenuItem>)
                  }
                 </div>
                  <div className='items-center justify-center flex -mt-7'>
                      <button className="btn border-b-black uppercase">View Full  Menu</button>
                  </div>
            </section>
      );
};

export default Popular;