import { useCallback, useContext } from "react";
import { CartContext } from "../context/cart-context";
import useRazorpay from "react-razorpay";

const Cart = ()=> {
    const {cartData} = useContext(CartContext);
    let total = 0;
    for(let i=0;i<cartData.length;i++){
        total = total + cartData[i].price
    }
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total)=> {
        const options = {
            key: "rzp_test_vW9H1JISNdOdkU",
            amount: total*100,
            currency: "INR",
            name: "10x-Gaming-Site",
            description: "Gaming Transaction",
            handler: (res)=> {
                console.log(res);
            },
            prefill: {
                name: "Shivani gupta",
                email: "sg5428702@gmail.com",
                contact: "9340459316"
            
            },
            notes: {
                address: "work address"
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
        
    }, [RazorPay])
        return (
        <>
            <section>
                <section>
                {cartData.map((cartItem)=> {
                return (
                    <article>
                        <img src={`http://localhost:1337${cartItem?.image?.data?.attributes?.url}`} alt=""/>
                        <article>{cartItem.title}</article>
                        <article>{cartItem.price}</article>
                        <button >Remove from cart</button>
                    </article>
                )
            })}
                </section>
                <section>
                <article>Billing Information </article>
                  {cartData.map((cart)=> {
                      return <article>
                          <span>{cart.title}</span>
                          <span>{cart.price}</span>
                      </article>
                  })}
                  <article>Total: {total}</article>
                  <button onClick={()=>{razorPayDisplay(total)}}>Checkout</button>
                </section>
            </section>
           
        </>
    )
}
export default Cart;