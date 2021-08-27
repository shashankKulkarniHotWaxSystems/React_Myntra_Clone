import React from 'react'
import { useEffect, useState } from 'react'
import './MainPageData.css'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export const MainPageData = () => {
    const [allProducts,setAllProducts]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((response)=>{
            return response.json();
        }).then((result)=>{
            console.warn(result);
            setAllProducts(result)
            
        })
        console.warn("UseEffect ");

    },[])
    console.log(allProducts);
    return (
        <div className="MainPageData">
      
       
        <div className="productDiv">
            {/* <h1>Hello iam Main page data component</h1> */}
          
            {
                
                    
            allProducts.map((product)=>{
                return(
                    <Link to={"/category/"+product.category+"/"+product.id}>
                    <div className="gridele" >
                    <img src={product.image} alt="" height="100px" width="100px" />
                    <h3 className="price" >$ {product.price}</h3>
                    <span className="category" >Category: {product.category}</span>
                    {/* <p>{product.title}</p> */}

                    </div>
                    </Link>

                )
            })            
            }
 
            </div>
        
            
        </div>
    )
}
