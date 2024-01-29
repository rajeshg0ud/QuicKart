import React from 'react';
import { Data } from '../data';
import { useState } from 'react';
import { DataContext } from '../context/contextProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Food = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState(Data);
  const { addToCart, cartItems } = useContext(DataContext);

  return (
    <div className='food-container'>
      <h1 className="h1-center">Order Essentials</h1>
      <div className='mainItem-container'>
      <h1>Buy Fresh Fruits Online </h1>
      <div className='food-grid'>
  <Splide options={{ perPage: 6, gap: "1rem", grag: "free", arrows: true, autoplay: false, interval: 2800, rewind: false }}>
    {foods.fruit.map((item) => (
        <SplideSlide key={item.id} className='food-item'>
          <img src={item.image} alt={item.name} />
          <div className='item-name'>
            <p>{item.name}</p>
            <p>{item.weight}</p>
          </div>
          <div className="item-container">
            <p className="price-text">{"₹"}{item.price}</p>
            <div className='add-button'>
              {cartItems[item.id] === 0 && <a className='addToCartBttn' onClick={() => addToCart(item.id)}>{"ADD TO CART"}</a>}
              {cartItems[item.id] > 0 && <a className='addToCartBttn' onClick={() => navigate("/cart")}>GO TO CART</a>}
            </div>
          </div>
        </SplideSlide>
      ))}
  </Splide>
</div>
      </div>

      <div className='mainItem-container'>
      <h1>Buy Fresh Vegetables Online</h1>
      <div className='food-grid'>
  <Splide options={{ perPage: 6, gap: "1rem", grag: "free", arrows: true, autoplay: false, interval: 2800, rewind: true }}>
    {foods.vegetables.map((item) => (
        <SplideSlide key={item.id} className='food-item'>
          <img src={item.image} alt={item.name} />
          <div className='item-name'>
            <p>{item.name}</p>
            <p>{item.weight}</p>
          </div>
          <div className="item-container">
            <p className="price-text">{"₹"}{item.price}</p>
            <div className='add-button'>
              {cartItems[item.id] === 0 && <a className='addToCartBttn' onClick={() => addToCart(item.id)}>{"ADD TO CART"}</a>}
              {cartItems[item.id] > 0 && <a className='addToCartBttn' onClick={() => navigate("/cart")}>GO TO CART</a>}
            </div>
          </div>
        </SplideSlide>
      ))}
  </Splide>
  </div>
      </div>


      <div className='mainItem-container'>
      <h1>Buy Essentials Online</h1>
      <div className='food-grid'>
  <Splide options={{ perPage: 6, gap: "1rem", grag: "free", arrows: true, autoplay: false, interval: 2800, rewind: true }}>
    {foods.groceries.map((item) => (
        <SplideSlide key={item.id} className='food-item'>
          <img src={item.image} alt={item.name} />
          <div className='item-name'>
            <p>{item.name}</p>
            <p>{item.weight}</p>
          </div>
          <div className="item-container">
            <p className="price-text">{"₹"}{item.price}</p>
            <div className='add-button'>
              {cartItems[item.id] === 0 && <a className='addToCartBttn' onClick={() => addToCart(item.id)}>{"ADD TO CART"}</a>}
              {cartItems[item.id] > 0 && <a className='addToCartBttn' onClick={() => navigate("/cart")}>GO TO CART</a>}
            </div>
          </div>
        </SplideSlide>
      ))}
  </Splide>
  </div>
      </div>

    </div>
  );
}

export default Food;


/* 
  const filterCat = (category) => {
    setFoods(Data.filter((item) => {
      return item.category === category;
    }))
  }

  

  <div className='menu-filter'>
  <button onClick={() => setFoods(Data)} className='menu-button'>All</button>
  <button onClick={() => filterCat("salad")} className='menu-button'>Salad</button>
  <button onClick={() => filterCat("pizza")} className='menu-button'>Pizza</button>
  <button onClick={() => filterCat("chicken")} className='menu-button'>Chicken</button>
  <button onClick={() => filterCat("fish")} className='menu-button'>Fish</button>
  <button onClick={() => filterCat("beverage")} className='menu-button'>Beverage</button>
</div>  */