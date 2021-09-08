import React from 'react'
import { useEffect, useState } from 'react';
import './ProductDetails.css'


export default function ProductDetails(prop) {
    const [product1,setProduct1]=useState([])
    // var ary = [];
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+prop.match.params.id).then((response)=>{
            return response.json();
        }).then((result)=>{
            console.log(result);
            // ary.push(result)
            product1.push(result)
            setProduct1(result)
            
        })
        console.warn("UseEffect");

    },[prop.match.params.id])
    console.warn(product1.title);
    return (
        <div>
        
        
            {/* <h1>iam ProductDetails component</h1> */}
            {/* <h1>{product1.title}</h1> */}
            <table>
                <tr className="tr">
                    <td className="tdImg" >
                         <img src={product1.image} alt="" height="auto" width="400px " />
                    </td>
                    <td className="tdData" >
                    <p className="productDataElement" id="productTitle">{product1.title}</p>
                    <p className="productDataElement" id="productCategory">Category: {product1.category}</p>
                    <p className="productDataElement" id="productPrice" >${product1.price}</p>
                    <p ><span><button className="addToCartBtn">Add To Bag </button> <button className="addToWishBtn">Wish List</button></span></p>
                    <hr />
                    <p className="detailesHeading">Description</p>
                    <p className="productDataElement" id="productDescription">{product1.description}</p>

                    </td>
                </tr>
            </table>
        </div>
    )
}



