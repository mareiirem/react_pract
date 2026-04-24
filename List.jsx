import React from 'react';

function List(props) {
    return (
        <ul>
            {props.items.map((item, index) => (
                <li key={index}>
                    {typeof item === "string" ? item : item.name}
                </li>
            ))}
        </ul>
    );
}

export default List;
