import { useState } from 'react'

const Show = (props) => {
    const id = props.match.params.id;
    const wish = props.wish;
    const wishList = wish.find(p => p._id === id);

    const [ editForm, setEditForm ] = useState(wishList);

    const handleChange = event => {
        setEditForm(prevState => ({
            ...prevState,
            [event.target.product]: event.target.value
        }))
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const{ _id, product, image, price } = editForm;
        props.updateWish({ product, image, price}, _id);
    }

    const removeWish = () => {
        props.deleteWish(wish._id);
        props.history.push('/');
    }
    return (
        <main>
            <h1>{wish.product}</h1>
            <h2>{wish.price}</h2>
            <img src={wish.image} alt={wish.product} />
            <button id="delete" onClick={removeWish}>Delete</button>
            <form onSubmit={handleSubmit}>
                <input
                    product="Product"
                    onChange={handleChange}
                    value={editForm.product}
                    type="text"
                />
                <input
                    product="Price"
                    onChange={handleChange}
                    value={editForm.price}
                    type="text"
                />
                <input
                    product="image"
                    onChange={handleChange}
                    value={editForm.image}
                    type="text"
                />
                <input
                    type="submit"
                    value="Edit Product"/>
            </form>
        </main>
    )
}

export default Show