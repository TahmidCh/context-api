import React, { useContext } from 'react';
import { contextCategory } from '../App';

const CategoryDetail = (props) => {
    const{count} = props;
    const category = useContext(contextCategory);
    return (
        <div>
            <h1>CategoryDetail: {count}</h1>
            <h2>This is category: {category}</h2>
        </div>
    );
};

export default CategoryDetail;