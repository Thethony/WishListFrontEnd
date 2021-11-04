import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Show from '../pages/Show'

const Main = (props) => {
    const [ wish, setWish ] = useState([]);

    const BASE_URL= 'https://mernappwish-list-api.herokuapp.com/wish/'

    const getWish = async () => {
        const response = await fetch(BASE_URL)
        const data = await response.json();
        setWish(data);
    }

    const createWish = async (wishList) => {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(wishList)
        });

        getWish();
    }

    const updateWish = async (wishList, id) => {
        await fetch(BASE_URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(wishList)
        })
        getWish();
    }

    const deleteWish = async id => {
        await fetch(BASE_URL + id, { method: 'DELETE'})
        getWish();
    }

    useEffect(() => getWish(), [])

    return (
    <main>
        <Switch>
            <Route exact path="/">
                <Home wish={wish} createWish={createWish} />
            </Route>
            <Route path="/wish/:id" render={(rp) => ( 
                wish.length ?
                <Show 
                    {...rp}
                    wish={wish}
                    updateWish={updateWish}
                    deleteWish={deleteWish}
                /> 
                :
                <Redirect to="/" />
                )} />
                <Route>
                    <div>
                        <h1>Page does not exist</h1>
                        <Link to='/'> Go back to Home Page</Link>
                    </div>
                </Route>
        </Switch>
    </main>
    )
}

export default Main