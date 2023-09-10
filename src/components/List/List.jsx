import React from 'react'
import './List.scss'
import Cards from '../Cards/Cards';
import useFetch from "../../hooks/useFetch";

function List({ cat, subCats, maxPrice, sort }) {

    const { data, loading, error } = useFetch(`/products?populate=*
    &[filters][categories][id]=${cat}
    ${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}
    &sort=price:${sort}
    `)

    return (
        <div className="list">
            {loading ? "loading" : data?.map(item => (

                <Cards item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List