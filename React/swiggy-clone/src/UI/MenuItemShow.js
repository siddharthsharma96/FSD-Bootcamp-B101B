const MenuItemShow = ({ r, cartItems, addItem, removeItem }) => {
  const isItemCart = cartItems.some((i) => i.card.info.id === r.card.info.id);

  const quantityInCart = isItemCart
    ? cartItems.find((item) => item.card.info.id === r.card.info.id).quantity
    : 0;
  return (
    <div className="restaurant__menu-item-card">
      <div className="restaurant__menu-item-info">
        <p className="restaurant__menu-item-name">{r.card.info.name}</p>
        <p className="restaurant__menu-item-price">
          {r.card.info.defaultPrice / 100 || r.card.info.price / 100}
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
        <img src={`/images/${r?.card.info.imgName}`} alt="a" />
      </div>
    </div>
  );
};

export default MenuItemShow;
