import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, obraz, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={obraz} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
