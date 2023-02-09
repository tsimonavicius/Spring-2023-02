import {useState} from "react";

const ProductForm = () => {

    const [product, setProduct] = useState({
        name: '',
        description: '',
        quantity: '',
        price: ''
    })

    const submit = (event) => {
        event.preventDefault()
    }

    const onProductFieldChange = (e) => {

        console.log("field name", e.target.name)

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Pavadinimas</label>
                <input id="name"
                       name="name"
                       value={product.name}
                       onChange={onProductFieldChange}
                       placeholder="Pavadinimas" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Aprasymas</label>
                <input id="description"
                       name="description"
                       value={product.description}
                       onChange={onProductFieldChange}
                       placeholder="Aprasymas" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Kiekis</label>
                <input id="quantity"
                       name="quantity"
                       value={product.quantity}
                       onChange={onProductFieldChange}
                       placeholder="Kiekis" className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">Kaina</label>
                <input id="price"
                       name="price"
                       value={product.price}
                       onChange={onProductFieldChange}
                       placeholder="Kaina" className="form-control"/>
            </div>

            <button type="submit" className="btn btn-primary">Sukurti</button>
        </form>
    )
}

export default ProductForm