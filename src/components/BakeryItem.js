export function BakeryItem( { name, description, price, image, addCart } ) {
    return (
      <div className="BakeryItem">
        <img className="ItemPhoto" src={image}></img>
        <h2 className="ItemPart"> {name} </h2>
        <p className="ItemPart"> {description}: {price} </p>
        <button className="ItemPart" onClick={() => addCart(name,  price)}> Add to cart </button>
      </div>
    );
  }