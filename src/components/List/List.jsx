import React from 'react'
import './List.scss'
import Cards from '../Cards/Cards';

function List() {
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
        }
        ,
        {
            id: 4,
            img: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Shoes",
            isNew: false,
            oldPrice: 19,
            price: 12,
        }
        ,
        {
            id: 4,
            img: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Shoes",
            isNew: false,
            oldPrice: 19,
            price: 12,
        }
        ,
        {
            id: 4,
            img: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Shoes",
            isNew: false,
            oldPrice: 19,
            price: 12,
        }
        ,
        {
            id: 4,
            img: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Shoes",
            isNew: false,
            oldPrice: 19,
            price: 12,
        }
        ,
        {
            id: 4,
            img: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Shoes",
            isNew: false,
            oldPrice: 19,
            price: 12,
        }
        ,
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
        <div className="list">
            {data.map(item => (

                <Cards item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List