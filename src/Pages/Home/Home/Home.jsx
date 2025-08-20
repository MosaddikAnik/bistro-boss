import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Popular from '../Popular/Popular';
import Food from '../Food/Food';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet';

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>HOME</title>
                  </Helmet>
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