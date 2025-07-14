const MenuItemShow = ({ r, cartItems, addItem, removeItem }) => {
  console.log(r);

  const isItemCart = cartItems.some((i) => i._id === r._id);

  const quantityInCart = isItemCart
    ? cartItems.find((item) => item._id === r._id).quantity
    : 0;
  return (
    <div className="restaurant__menu-item-card">
      <div className="restaurant__menu-item-info">
        <p className="restaurant__menu-item-name">{r.name}</p>
        <p className="restaurant__menu-item-price">
          {r.defaultPrice / 100 || r.price / 100}
        </p>
        {/* <p className="cuisineDesc">
            {r.card.info.description}
          </p> */}
      </div>
      <div className="restaurant__menu-item-action">
        {isItemCart ? (
          <div className="restaurant__menu-item-quantity-controls">
            <button
              onClick={() => {
                removeItem(r);
              }}
            >
              -
            </button>
            <span>{quantityInCart}</span>
            <button
              onClick={() => {
                addItem(r);
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="restaurant__menu-item-add-btn"
            onClick={() => addItem(r)}
          >
            Add
          </button>
        )}
        <img src={`/images/${r.imgName}`} alt="a" />
      </div>
    </div>
  );
};

export default MenuItemShow;
