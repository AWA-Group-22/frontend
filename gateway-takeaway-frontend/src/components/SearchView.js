import React from 'react';
import styles from './SearchView.module.css';

import SearchResult from './SearchResult';

export default function SearchView(props) {
    return (
        <div>
            <div className={ styles.restView }>
                {
                    props.items.map(rest => <SearchResult key={ rest.restaurant_id} {...rest} />)
                }
            </div>
        </div>
    )
}
