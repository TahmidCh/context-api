import React from 'react';
import CategoryDetail from './CategoryDetail';

const Categories = (props) => {
    const{count} = props;
    return (
        <div>
            <h1>This is category: {count}</h1>
            <CategoryDetail count={count}></CategoryDetail>
        </div>
    );
};

export default Categories;