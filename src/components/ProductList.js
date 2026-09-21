

import products from "../data/products"

export const ProductList = () => {
    return (
        <>
            <div className="main-content">
                <h1 className="products">Products</h1>

                
                <div className="product-list">
                {products.map((item) => {
                    return (
                        <Product
                            key={item.id}       // key giúp React tối ưu render danh sách
                            name={item.name}    // prop: tên sản phẩm
                            price={item.price}  // prop: giá sản phẩm
                            status={item.status}// prop: tình trạng sản phẩm
                            image={item.image}  // prop: URL ảnh sản phẩm
                        />
                    )
                })}
                </div>
            </div>
        </>
    )
}