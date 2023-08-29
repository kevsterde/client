import React, { useState } from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import "./Products.scss"

const Products = () => {

    const categoryId = parseInt(useParams().id)
    const [maxPrice, setmaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)
    return (
        <div className='products'>

            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="1" value={1} />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="2" value={2} />
                        <label htmlFor="2">Shirt</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="3" value={3} />
                        <label htmlFor="3">Short</label>
                    </div>
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
                        <input type="radio" name="price" id="des" value="des" onChange={e => setSort("des")} />
                        <label htmlFor="des">Price (Highest First)</label>
                    </div>
                </div>
            </div>

            <div className="right">
                <img className='catImg' src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                <List cat={categoryId} maxPrice={maxPrice} sort={sort} />
            </div>


        </div>
    )
}

export default Products