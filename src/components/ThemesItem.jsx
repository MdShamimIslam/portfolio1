import React from 'react';

const ThemesItem = ({color,img,changeColor}) => {
    return (
        <div>
            <h3 className='theme__img' onClick={()=>{changeColor(color)}}>{img}</h3>
        </div>
    );
};

export default ThemesItem;