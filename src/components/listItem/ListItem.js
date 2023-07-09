import React from 'react';
import './ListItem.css';
function ListItem({ name, image, }) {
    return (
        <div className="listitem-container">
            <div className="listitem-inner-container">
                <div className="listitem-image-container">
                    <div className="listitem-shadow">
                        <img className="listitem-image"
                             src={image}
                             alt={name}/>
                    </div>
                </div>
                <div className="listitem-description">
                    <h2 className="listitem-name">{name}</h2>
                </div>
            </div>
        </div>
    );
}

export default ListItem;