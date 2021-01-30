import React,{useState} from 'react';
import {FiPlus,FiMinus} from 'react-icons/fi'

const ProductInfo = ({product,sneakers,setIndex}) =>{
    const [quantity,setQuantity] = useState(1);
    const {name,description,colors,price,discount} = product ;

    const colorHandler = (index) =>{
        setIndex(index)
    }
    
    const addHandler = () =>{
        
        setQuantity(quantity => quantity + 1)
    } 
    const minusHandler = () =>{
        
        setQuantity(quantity => {
            if(quantity == 1){
                return 1
            }
            return quantity - 1
        })
    } 

    return(
        <div className="product-info">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="colors">
                <div>Colors :</div>
                {sneakers.map((sneaker,index) =>{
                   return <div  className="color"
                                key={sneaker.id}
                                style={{background:`linear-gradient(90deg, ${sneaker.color.join(',')})`}}
                                onClick={() => colorHandler(index)} ></div>
                })}
            </div>
            <div className="quantity">
                <span>Quantity :</span>
                <div className="quantity-btn">
                <FiMinus onClick={minusHandler}/>
                {quantity}
                <FiPlus onClick={addHandler}/>
                </div>
            </div>
            <span className="discount">{discount}% off</span>
            <div className="price">
                {(price * (quantity - quantity * discount/100)).toFixed(0)}
                <div className="old-price"><del>${price * quantity} </del> </div>
            </div>
        </div>
    )
}

export default ProductInfo;