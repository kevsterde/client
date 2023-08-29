import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setquantity] = useState(1)
    const images = [
        "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]

    return (
        <div className="product">

            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className='price'>$199</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam sunt totam? Accusamus, illo quibusdam molestiae ab quaerat, obcaecati alias saepe deleniti mollitia accusantium explicabo perferendis fugit libero labore? Nihil exercitationem vero saepe voluptas consequuntur, voluptatum quaerat, maiores minima voluptatem dicta, ipsam assumenda! Exercitationem, animi debitis facere provident iure accusantium!</p>

                <div className="quantity">
                    <button onClick={() => setquantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setquantity(prev => prev + 1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISHLIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE

                    </div>
                </div>

                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITION INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div >
    )
}

export default Product