import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Popular from '../Popular/Popular';
import Food from '../Food/Food';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Category></Category>
                  <Popular></Popular>
                  <Food></Food>
                  <Featured></Featured>
                  <Testimonial></Testimonial>
            </div>
      );
};

export default Home;