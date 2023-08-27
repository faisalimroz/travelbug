import React from 'react';
import Banner from '../../../Banner/Banner';
import SearchForm from '../SearchForm/SearchForm';
import Tourguide from '../../../Tourguide/Tourguide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchForm></SearchForm>
            <Tourguide></Tourguide>
        </div>
    );
};

export default Home;