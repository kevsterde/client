import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss'

function Cart() {

    const data = [
        {
            id: 4,
            img: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequuntur facere alias delectus, rerum recusandae? Doloribus assumenda dolorum facere non, odit blanditiis consequuntur nobis repellat dicta impedit. Minima laudantium cupiditate nihil dolores, ex, eveniet corporis iusto hic, ab fuga deserunt dignissimos nesciunt voluptatem? Nesciunt voluptatibus, consequuntur debitis possimus provident at quae, itaque, fugit cupiditate omnis nam animi! Sapiente suscipit at voluptate similique dolorem nam ducimus doloribus, odio libero quia est iure cum in officiis esse temporibus, hic quisquam saepe quas odit tempora inventore, quam dolorum repellendus! Numquam expedita ratione nostrum aperiam fugiat dolore, non quam corrupti sint consequuntur doloribus debitis sequi cupiditate exercitationem molestias esse id obcaecati. Harum qui repellat quae, id quis odio nobis corrupti nostrum, nulla, nemo rem?",
            title: "Shoes",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Shoes",
            isNew: false,
            oldPrice: 19,
            price: 12,
        }
    ]

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete" />
                </div>

            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <div className="reset">Reset Cart</div>
        </div>
    )
}

export default Cart