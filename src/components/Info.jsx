import React from 'react';
import { personalInfo } from '../data';

const Info = () => {
    return (
        <>
            {
                personalInfo.map(({title,description,id})=><li key={id}>
                    <span className="info__title">{title}</span>
                    <span className="info__description">{description}</span>
                </li>)
            }
        </>
    );
};

export default Info;