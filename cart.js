const Cart = ({cart}) => {
    return (
        <div className="cart">
            <h1 className="cart-name">Cart</h1>
            <div className="product-list">
                {cart.length === 0 && <div>Cart is empty</div>}
                {cart.map((products,id) => (
                    <div key={id} className="card">
                        <img src={products.img} alt="" className="product-img"></img>

                        <div className="product-info">
                            <h2>{`Төрөл: ${products.type}`}</h2>
                            <h2>{`Нэр: ${products.name}`}</h2>
                            <h2>{`Үнэ: ${products.price}₮`}</h2>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Cart