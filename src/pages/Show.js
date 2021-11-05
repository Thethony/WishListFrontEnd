import { useState } from 'react'

const Show = (props) => {
    const id = props.match.params.id;
    const wish = props.wish;
    const wishList = wish.find(p => p._id === id);

    const [ editForm, setEditForm ] = useState(wishList);

    const handleChange = event => {
        console.log(event.target)
        setEditForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const{ _id, product, image, price } = editForm;
        props.updateWish({ product, image, price}, _id);
        props.history.push('/')
    }

    const removeWish = () => {
        props.deleteWish(wishList._id);
        props.history.push('/');
    }
    return (
        <div className="wish">
            <h1>{wish.product}</h1>
            <h2>{wish.price}</h2>
            <img src={wish.image} alt={wish.product} />
            <button id="delete" onClick={removeWish}>Delete</button>
            <form onSubmit={handleSubmit}>
                <input
                    name="product"
                    value={editForm.product}
                    onChange={handleChange}
                    type="text"
                />
                    <input
                        name="image"
                        onChange={handleChange}
                        value={editForm.image}
                        type="url"
                    />
                <input
                    name="price"
                    onChange={handleChange}
                    value={editForm.price}
                    type="text"
                />
                <input
                    type="submit"
                    value="Edit Product"/>
            </form>
        </div>
    )
}

export default Show