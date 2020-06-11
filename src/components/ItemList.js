import React, {useLayoutEffect} from 'react';

function ItemList(props) {
    return (
        <>
            <h3>ItemList component</h3>
            <br/>
            {
                props.articles.map(article => <div key={article.id}> {article.quantity} {article.name}</div>)
            }

        </>
    );
}

export default ItemList;
