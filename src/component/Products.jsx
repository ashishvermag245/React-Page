import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton"
import "./Products.scss";
import $ from 'jquery';


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
        <>
           <div className="col-md-3">
             <Skeleton height={350}/>
           </div>
           <div className="col-md-3">
             <Skeleton height={350}/>
           </div>
           <div className="col-md-3">
             <Skeleton height={350}/>
           </div>
           <div className="col-md-3">
             <Skeleton height={350}/>
           </div>
           <div className="col-md-3">
             <Skeleton height={350}/>
           </div>
        </>
    );
  };

const filterProduct = (cat) => {
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
}

  const ShowProduts = () => {
    return (
      <>
        <div className="buttons text-center mt-5">
          <button className="btn btn-outline-dark me-3 rounded-pill" onClick={()=>setFilter(data)}>
            ALL
          </button>
          <button className="btn btn-outline-dark me-3 rounded-pill" onClick={()=>filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button className="btn btn-outline-dark me-3 rounded-pill" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-3 rounded-pill" onClick={()=>filterProduct("jewelery")}>
          Jewelery
          </button>
          <button className="btn btn-outline-dark me-3 rounded-pill" onClick={()=>filterProduct("electronics")}>
            Accessories's
          </button>
        </div>
        <div className="row py-5">
          {filter.map((Products) => {
            return (
              <>
                <div className="col-md-3 mb-4">
                  <div class="card h-100 text-center p-4" key={Products.id}>
            
                    <img
                      src={Products.image}
                      class="card-img-top"
                      alt={Products.title} height="300px"
                    />
                    <div class="card-body">
                      <h5 class="card-title fw-bold">{Products.title.substring(0,12)}</h5>
                      <p class="card-text lead fw-bold">${Products.price}</p>
                      <a href="#" class="btn btn-outline-dark rounded-pill">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      {/* ************ Products **************** */}
      <div className="product py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="product-heading">
                <h1 className="display-6 text-center py-3">Latest Products</h1>
                <hr />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
                <div className="col">{loading ? <Loading /> : <ShowProduts />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
$(document).on('click','.product .card',function(){
    console.log($(this)[0].__reactFiber$2ydhljqct64.key)
    const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

   }
})

export default Products;
