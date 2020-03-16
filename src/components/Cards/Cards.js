import React, {Fragment} from 'react';
import './Cards.scss';
import uuid from 'react-uuid';

import { Card } from '../Card/Card';


const Cards = ({data, openForm}) => {

const renderCards = () => (
    <ul className="second-list">
        <li className="cardAdd" onClick={openForm}>
            <span>+</span>
        </li>
    
    {data.map( card => <Card key={uuid()} name={card.name} age={card.age} lastName={card.lastName}/>)}
    </ul>
    
    )


return (
            
    <Fragment>
        {renderCards()}
      
        </Fragment>
    
        ) 



};

export { Cards };