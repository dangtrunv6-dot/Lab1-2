export const Product = ({ name, price, status, image }) => {

    return (
        // Mỗi sản phẩm được bọc trong div.product-card để CSS style riêng
        <div className="product-card">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div>
                <strong>name: </strong>
                <span>{name}</span>
            </div>
            <div>
                <strong>status: </strong>
                <span>{name}</span>
            </div>
            <div>
                <strong>price: </strong>
                <span>{price}</span>
            </div>
        </div>
    )
}