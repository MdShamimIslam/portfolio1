import React from 'react';
import { stats } from '../data';
import parse from 'html-react-parser';


const Stats = () => {
    return (
        <>
            {
                stats.map(({no,id,title})=>
                <div className='stats__box' key={id}>
                    <h2 className="stats__no">{no}</h2>
                    <p className="stats__title">{parse(title)}</p>
                </div>
                )
            }
        </>
    );
};

export default Stats;