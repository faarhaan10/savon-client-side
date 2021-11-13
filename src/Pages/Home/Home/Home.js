import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import SavonPress from '../SavonPress/SavonPress';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <SavonPress></SavonPress>
            <Footer></Footer>
        </div>
    );
};

export default Home;