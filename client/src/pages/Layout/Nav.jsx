import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SignInSelector } from '../../selectors/selectors';
import accountSlice from '../../stores/slices/accountSlice';
import { Eggy } from '@s-r0/eggy-js';
function Nav() {
    const dispatch = useDispatch()
    const checkSignIn = useSelector(SignInSelector)
    const signOut = () => {
        dispatch(accountSlice.actions.setCheckSignIn(false))
        Eggy({
            title: 'Sign out',
            message: 'Sign out Success',
        })
        dispatch(accountSlice.actions.setIndexUser(null))
        window.localStorage.clear();
    }

    if (checkSignIn) {
        return (
            <div className="nav">
                <div className="logo">

                    <img src="./src/assets/images/logo.png" alt="" />
                </div>
                <div className="pages">
                    <Link className='Link' to='/profile'>Profile</Link>
                    <Link className='Link' to='/' onClick={signOut}>Sign out</Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="nav">
                <div className="logo">

                    <img src="./src/assets/images/logo.png" alt="" />
                </div>
                <div className="pages">
                    <Link className='Link' to='/'>Login</Link>
                    <Link className='Link' to='/profile'>Profile</Link>
                </div>
            </div>
        )
    }

}

export default Nav