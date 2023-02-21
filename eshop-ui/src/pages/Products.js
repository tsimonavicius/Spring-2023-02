import * as React from "react";

const allProducts_dummyData = [
    {
        name: "labai geras produktas 1",
        description: "best desc ever 1",
        price: 11.11,
        addDate: new Date()
    },
    {
        name: "labai geras produktas 2",
        description: "best desc ever 2",
        price: 37.99,
        addDate: new Date()
    },
    {
        name: "labai geras produktas 3",
        description: "best desc ever 3",
        price: 0.56,
        addDate: new Date()
    }
]

const Products = () => {

    return (
        <div>
            {allProducts_dummyData.map((product, index) =>
            <div>
                <span>Product name: </span><span>{product.name} </span>
                <span>Product description: </span><span>{product.description} </span>
                <span>Product price: </span><span>{product.price} </span>
                <span>Product create date: </span><span>{product.addDate.toLocaleDateString()}</span>
            </div>
            )}
        </div>
    )
}

export default Products;