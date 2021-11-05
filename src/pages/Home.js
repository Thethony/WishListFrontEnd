import { Link } from "react-router-dom"
import { useState } from 'react'

const Home = (props) => {
    const [newform, setNewForm] = useState(getNewState());
    const loaded = () => {
        return props.wish.map(wishList => ( 
            <div key={wishList._id} className="wishList">
                <Link to={`/wish/${wishList._id}`}>
                    <h1>{wishList.product}</h1>
                </Link>
                <img style={{height: 150, width: 150}} src={wishList.image} alt={wishList.product} />
                <h3>{wishList.price}</h3>
            </div>
        ))
    }

const loading = () => <h1>Loading ...</h1>

const handleChange = (event) => {

    setNewForm(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value 
    }))
}

const handleSubmit = (event) => {
    event.preventDefault();
    props.createWish(newform)
    setNewForm(getNewState())
}

function getNewState() {
    return {
        product: "",
        image: "",
        price: "",
    }
}
    return (
        <section>
            <form className="Form" onSubmit={handleSubmit}>
                <input
                    value={newform.product}
                    onChange={handleChange}
                    text="text"
                    placeholder="Product Name"
                    name="product"
                />
                <input
                    value={newform.image}
                    onChange={handleChange}
                    type="url"
                    placeholder="Product image"
                    name="image"
                />
                    <input
                    value={newform.price}
                    onChange={handleChange}
                    text="text"
                    placeholder="Product Price"
                    name="price"
                />
                <input type="submit" value="Create Product" />
            </form>
            { props.wish ? loaded() : loading() }
        </section>
    )
}

export default Home