import { useContext } from "react";
import { CartContext } from "../context/cart-context";

const Item=({item})=>{
    const{addCartData} = useContext(CartContext)

    return(
<>
<section className="card">
<img className="card-image" src={`http://localhost:1337${item?.image?.data?.attributes?.url}`} alt="game image"/>
<article className="card-title">{item.title}</article>
<article className="card-description">{item.description}</article>
<section className="card-footer">
    <article className="price">{item.price}</article>
    <button className="cart-button" onClick={()=>{addCartData(item)}}>Add to cart</button>
    </section>
</section>
</>
    )
}
 export default Item;