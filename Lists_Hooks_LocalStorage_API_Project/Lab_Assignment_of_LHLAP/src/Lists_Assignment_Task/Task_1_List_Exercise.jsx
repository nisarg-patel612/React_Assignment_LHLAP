// Task - 1 Create a React component that render a list of items(e.g. a list of fruit names). use the map() funtion to render each item in the list.

import React from 'react'

const List_Exercise = () => {

    const fruits = ["Apple", "Banana", "Orange", "Mangos", "Chiku", "Cherry"];


    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {fruits.map((fruit,index) => {
                    return (
                        <li key={index}>{fruit}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List_Exercise; 


