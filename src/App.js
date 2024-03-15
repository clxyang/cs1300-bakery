import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  const addToCart = (name, price) => {
    console.log('adding to cart: ', name)

    setCart([[name, price], ...cart]);
    setCartTotal(cartTotal + price);
  }

  const showCart = () => {
    if (cart.length === 0) {
      console.log('cart is empty')
      return <p>Cart is empty</p>
    }

    const jsxlist = cart.map((item, index) => { //item is array of name, price
      return <p key={index} >{item[0]}: ${item[1]}</p>
    })
    return jsxlist;
  }

  const showCartTotal = () => {
    return <p>Total: ${cartTotal}</p>
  }

  const showItems = () => {
    return bakeryData.map((item, index) => ( 
      <BakeryItem name={item.name} description={item.description} price={item.price}
        image={item.image} addCart={addToCart}></BakeryItem>
    ))
  }

  return (
    <div className="App">
      <div className="BakeryListSection">
        <h1 className="PageTitle">Baker-eact</h1> {/* TODO: personalize your bakery (if you want) */}

        <div className="BakeryList">
          {showItems()}
        </div>
      </div>

      <div className="CartSection">
        <h2>Cart</h2>
        {showCart()}
        {showCartTotal()}
      </div>
    </div>
  );
}

export default App;
