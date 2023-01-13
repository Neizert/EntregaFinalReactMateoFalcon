import React,{useState} from "react";
import './itemDetail.css';
import ItemCount from "../ItemCount";
import { useCartContext } from "../../context/CartContext";
import{ Link } from "react-router-dom";



export const ItemDetail = ({data}) =>{

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();


    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    {
                        goToCart
                        ? <Link className="finalizar" to="/cart">Terminar compra</Link>
                        : <ItemCount initial = {1} stock = {5} onAdd = {onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;