import React, { useState } from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import "./Products.scss"
import useFetch from "../../hooks/useFetch";
const Products = () => {

    const categoryId = parseInt(useParams().id)
    const [maxPrice, setmaxPrice] = useState(1000)
    const [sort, setSort] = useState("asc")
    const [selectedSubCats, setselectedSubCats] = useState([]);

    const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${categoryId}`)


    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setselectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value))


    }
    console.log(selectedSubCats);

    return (
        <div className='products'>

            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    {
                        data?.map(item => (
                            <div className="inputItem" key={item.id}>
                                <input type="checkbox" name="" id={item.id} onChange={handleChange} value={item.id} />
                                <label htmlFor={item.id}>{item.attributes.title}</label>
                            </div>
                        ))

                    }

                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" name="" id="" min={0} max={1000}
                            onChange={(e) => setmaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" name="price" id="asc" value="asc" onChange={e => setSort("asc")} />
                        <label htmlFor="asc">Price (Lowest First)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" name="price" id="desc" value="desc" onChange={e => setSort("desc")} />
                        <label htmlFor="desc">Price (Highest First)</label>
                    </div>
                </div>
            </div>

            <div className="right">
                <img className='catImg' src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                <List cat={categoryId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
            </div>


        </div >
    )
}

export default Products