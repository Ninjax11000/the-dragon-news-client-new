import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://the-news-dragon-server-sigma-nine.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCategories(data);
        })
        .catch(error=>console.log(error.message))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            {
                categories.map(category=>
                    <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>
                    )
            }
        </div>
    );
};

export default LeftNav;