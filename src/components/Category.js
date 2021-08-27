import React from 'react'
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import './Category.css'
import { Link } from 'react-router-dom'
function Category(prop){
    const [products,setproducts]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/"+prop.match.params.Category).then((response)=>{
            return response.json();
        }).then((result)=>{
            console.warn();
            setproducts(result)
            
        })
        console.warn("UseEffect ");

    },[prop.match.params.Category])
  
    console.log(products);
  
    console.log(prop.match.params.Category);
    return (
        <div className="Category" >
        <span className="heading">{prop.match.params.Category}</span>
       <br />

        {
            
        products.map(product =>{
          return(
       <Link to={"/category/"+product.category+"/"+product.id}>

            <div className="Box" key={product.id}>
            <img src={product.image} alt="Product" height="200px" width="300px"/>
            <br />
            <div>
              <h3>$ {product.price}</h3>
              <span>{product.title}</span>
            </div>
            </div>
      </Link>

            
          )
        })

            
      }

        
        </div>
    )
}
export default withRouter(Category)