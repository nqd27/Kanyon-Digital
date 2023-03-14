import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Layout/Nav'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { accountSelector } from '../../selectors/selectors';
import { Eggy } from '@s-r0/eggy-js';
import accountSlice from '../../stores/slices/accountSlice';
import { SignInSelector } from '../../selectors/selectors';
import { fetchAllUser } from '../../stores/slices/accountSlice';
function Login() {

    const [show, setShow] = useState(false);
    const dataAccount = useSelector(accountSelector)
    const dispatch = useDispatch()
    const signInCheck = useSelector(SignInSelector)
    const checkSI = localStorage.getItem('SignIn');

    // console.log(dataAccount)

    useEffect(() => {
        dispatch(fetchAllUser())
    }, [])

    const handleShowPassWord = () => {
        let password = document.querySelector("#password");
        if (!show) {
            password.type = 'text'
            setShow(true)
        } else {
            password.type = 'password'
            setShow(false)
        }
    }

    const handleSignIn = () => {
        let form = document.querySelector("#form1");
        let password = document.querySelector("#password").value;
        let email = document.querySelector("#email").value;
        let check = false;
        form.reset();

        dataAccount.forEach((item, index) => {
            if(item.Email == email && item.password == password){
                localStorage.setItem("ID_User", item.id_user);
                localStorage.setItem("Index",index)
                dispatch(accountSlice.actions.setIndexUser(index))
                check = true;
            }
        })

        if (check) {
            Eggy({
                title: 'Sign in',
                message: 'Sign in Success',
            })
            localStorage.setItem("SignIn", true)
            dispatch(accountSlice.actions.setCheckSignIn(true))
        } else {
            Eggy({
                title: 'Sign in',
                message: 'Sign in fail',
                type: 'error'
            });
        }


    }


    if (!signInCheck) {
        return (
            <>
                <Nav />
                <div className="container">
                    <div className="main">
                        <h1>Login</h1>
                        <form id='form1'>
                            <div className="form-control">
                                <label htmlFor="email">Email:</label><br />
                                <input type="email" id='email' name='value' placeholder='example@kyanon.digial' required /><br />
                            </div>

                            <div className="form-control">
                                <label htmlFor="password">Password:</label><br />
                                <input type="password" id="password" name='value' placeholder='********' />
                            </div>
                            <div className="action">
                                <div className="left">
                                    <input type="checkbox" id='show' onClick={handleShowPassWord} /> <label name="show" htmlFor="show">Show password</label>
                                </div>
                                <div className="btn">
                                    <button type='button' onClick={handleSignIn}>Sign in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Nav />
                <div className="container">
                    <div className="main">
                        <h1>Đăng nhập thành công!</h1>
                        <h3>- Go to <Link to='/profile' id='pages'>Profile</Link></h3>
                        <img id='img-login' src="./src/assets/images/login.gif" alt="" />
                    </div>
                </div>
            </>
        )
    }


}

export default Login