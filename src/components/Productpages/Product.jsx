import React, {useState} from 'react'
import './products.css'




function Product(props) {
    //console.log(props.productx)

    //const [cartitems, setCartitems] = useState('')

    const handleClick = () => {
      //console.log(e.target);
      //setCartitems(props.productx)
      
      props.addToCart(props.productx)
      
    }
//console.log( "cartitems console", cartitems);
  return (
    <>
       
        <div className='product-card'>
            {/* <img src={`../../images/${props.productx.picture}`} alt="product picture" className='product-pic'/> */}
           
            <div className='product-pic' style={{ backgroundImage: `url(../../images/${props.productx.picture})` }} > </div>
            
         
            <div>{props.productx.name}</div>
            <div>{props.productx.price}</div>
            <button className='btn btn-green btn-addcart' onClick={handleClick}>Add to cart</button>
        </div>
    
    </>
  )
}

export default Product