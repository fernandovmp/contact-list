import React from 'react';
import './styles.css';

type propsType = {
    source: any[];
    itemTemplate: (item: any) => JSX.Element;
    keyExpression: (item: any) => any;
};

const List: React.FC<propsType> = ({ source, itemTemplate, keyExpression }) => {
    if (source.length === 0) return <p>Lista Vazia</p>;

    return (
        <ul className="list">
            {source.map(item => (
                <li key={keyExpression(item)}>{itemTemplate(item)}</li>
            ))}
        </ul>
    );
};

export default List;
