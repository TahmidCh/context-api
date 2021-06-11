import React from 'react';
import Categories from './Categories';

const Home = (props) => {
    const {count}= props;
    return (
        <div style={{border: '1px solid red'}}>
            <h2>This is home: {count}</h2>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;