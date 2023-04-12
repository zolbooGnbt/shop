
const Product = ({data, loading, addHandler}) => {

    return (
        <div className="product-list">

            {loading && (
                <div>
                    {" "}
                    <h1>Loading...</h1>
                </div>
            )}
            {data.map((products, id) => {
                // console.log(product)
                return(
                <div key={id} className="card">
                    <img src={products.img} alt="" className="product-img"></img>

                    <div className="product-info">
                        <h2>{`Төрөл: ${products.type}`}</h2>
                        <h2>{`Нэр: ${products.name}`}</h2>
                        <h2>{`Үнэ: ${products.price}₮`}</h2>
                    </div>
                    <button type="submit" className="addToCart" onClick={()=>addHandler(products)}>Add to cart</button>
                </div>
            
            )})}
        </div>
    )
}

export default Product;