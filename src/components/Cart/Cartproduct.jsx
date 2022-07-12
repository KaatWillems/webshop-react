import React from 'react'

function Cartproduct(props) {

    console.log(props.item)
  return (
    <div>
           <div>
              <div className='product-pic' style={{ backgroundImage: `url(../../images/${props.item.picture})` }} > </div>
              
           
              <div>{props.item.name}</div>
              <div>€{props.item.price}</div>
              <div className='change-quantity'>
                <button>+</button>
                <div>{props.item.lenght}</div>
                <button>-</button>

              </div>
           </div>
           
    </div>
  )
}

export default Cartproduct