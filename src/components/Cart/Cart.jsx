import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, reset } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

function Cart() {
    const products = useSelector(state => state.cart.products)
    const totalPrice = () => {
        let total = 0;
        products.forEach(item =>
            (total += item.quantity * item.price))

        return total.toFixed(2)
    }

    const dispatch = useDispatch();


    const stripePromise = loadStripe('pk_test_51Nn2YOCn9anY7ShEmWYMgVAEZAk4ZcBD8cO1oWM2IeFobb0p80gDlKZNmRDc8XdZ8PSgZdIXPsGTZaMngDhXzMLM00CRyXuhwL'

    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise
            console.log(stripe);
            console.log("kevin asd")
            const res = await makeRequest.post("/orders", {
                products,
            });
            console.log("kevin qwe")
            stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,

            })
        } catch (error) {
            console.log("kevin error")
            console.log(error)

        }
    }


    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {products?.map(item => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">{item.quantity} x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete" onClick={() => dispatch(
                        removeItem({ id: item.id })
                    )} />
                </div>

            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <div className="reset" onClick={() => dispatch(reset())}>Reset Cart</div>
        </div>
    )
}

export default Cart