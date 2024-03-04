import React from 'react';
import parse from 'html-react-parser';

const ResumeItem = ({icon,desc,title,year}) => {
    return (
        <div className='resume__item'>
            <div className="resume__icon"><p className='resIcon'>{icon}</p></div>
            {
                year ? <span className="resume__date">{year}</span> : ''
            }
            <h3 className="resume__subtitle">{parse(title)}</h3>
            <p className="resume__description">{desc}</p>
        </div>
    );
};

export default ResumeItem;