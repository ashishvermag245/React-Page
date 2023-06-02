import React from 'react'
import "./Blog.scss";
import $ from 'jquery';
import { useState, useEffect,useRef } from 'react';

const Blog = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  return ( 
  $(document).on("submit",'form',function(){
    var data={
      "title":"inputRef1.current.value",
      "price":"inputRef2.current.value",
      "description":"inputRef3.current.value",
      "category":"inputRef4.current.value" ,
      "image":"hdesjds",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    }
    var url="https://fakestoreapi.com/products"
            
    return(
      $.ajax({
        type: "POST",
        url: url,
        data: data,
        success:function(response){
          console.log(response,"RESPONSE")
      },
        dataType:"jsonp"
      }).done(function (data) {
        console.log(data+"here");
    })
    )
  }),
    

    <div>

      <div class="flex mt-6 justify-center">
            <form action="" >
            <div class=" w-50 p-5 m-auto  rounded-full bg-indigo-500 inline-flex">
            <input   ref={inputRef1} class="form-control  title form-control-lg mb-3" type="text" placeholder="title" aria-label=".form-control-lg example"/>
            <input   ref={inputRef2} class="form-control Price form-control-lg mb-3" type="text" placeholder="Price" aria-label=".form-control-lg example"/>
            <input   ref={inputRef3} class="form-control Description form-control-lg mb-3" type="text" placeholder="Description" aria-label=".form-control-lg example"/>
            <input   ref={inputRef4} class="form-control category form-control-lg mb-3" type="text" placeholder="category" aria-label=".form-control-lg example"/>
            <button   type="Submit" class="btn btn-primary">Submit</button>
            </div>
            </form>
          </div>
    </div>
  )
}


export default Blog
