import React from 'react'
import "./FeaturedProducts.scss";
import Cards from '../Cards/Cards';

function FeaturedProducts({ type }) {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Jacket",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1574898/pexels-photo-1574898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/3622624/pexels-photo-3622624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Short",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Tshirt",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Shoes",
            isNew: false,
            oldPrice: 19,
            price: 12,
        }
    ]
    return (
        <div className='featuredProducts'>

            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                {
                    data.map(item => (
                        <Cards item={item} key={item.id} />
                    ))

                }
            </div>
        </div>
    )
}

export default FeaturedProducts