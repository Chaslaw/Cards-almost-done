import React from 'react';


const Card = ({name, age, lastName}) => {

    return (

        <li>
            <span>Name: {name}</span>
            <span>Last name: {lastName}</span>
            <span>Age: {age}</span>
        </li>);

}


export { Card }