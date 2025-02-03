//Task - 2 Use the useEffect()hook to fetch and display data from an API when the component mounts.

import React, { useEffect, useState } from 'react'

const Task_2_UseEffect_Hooks = () => {

  const [categories,setCategories] = useState([]);

  const [loading,setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then((data) => {
          setCategories(data);
          setLoading(false);
      })
      .catch((error) => {
        console.error("Error Fetching Data : ", error);
        setLoading(false);
      })
  }, []);


  return (
    <div>
        <h1>Product Categories</h1>
        {
          loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {categories.map((category,index) => {
                return (
                  <li key={index}>{category}</li>
                )
              })}
            </ul>
          )
        }
    </div>
  )
}

export default Task_2_UseEffect_Hooks