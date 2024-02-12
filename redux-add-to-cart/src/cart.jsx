import React from 'react'
import { useDispatch } from 'react-redux'
import { logged, loggedOut } from './reducer';

function Cart() {
    const dispatch = useDispatch();
    const loggedinBtn = () => {
        dispatch(logged()); 
    }
    const loggedoutBtn = () => {
        dispatch(loggedOut()); 
    }

    return (
        <div>
            <button onClick={loggedinBtn}>loggedinBtn</button>
            <button onClick={loggedoutBtn}>loggedoutBtn</button>
        </div>
    )
}

export default Cart;
