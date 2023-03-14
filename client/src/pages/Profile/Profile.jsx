import React from 'react'
import Nav from '../Layout/Nav'
import { useState } from 'react'
import { getUserSelector } from '../../selectors/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { Eggy } from '@s-r0/eggy-js';
import accountSlice from '../../stores/slices/accountSlice'
import { inDexUserSelector } from '../../selectors/selectors'
function Profile() {
    const dispatch = useDispatch()
    const data = useSelector(getUserSelector)
    const inDex = useSelector(inDexUserSelector)
    // console.log(data)

    // Update data
    const updateProfile = () => {
        let date = document.querySelector("#date").value;
        let fullname = document.querySelector("#fullname").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        let form = document.querySelector("#form1");

        if(date == "" || fullname == "" || email =="" || phone == ""){
            Eggy({
                title: 'Confirm profile',
                message: 'Faill',
                type: 'error'
            })
        }else{
            let newObj = {
                id_user: data[0].id_user,
                Fullname: fullname,
                DayOfBirth: date,
                Email: email,
                Phone: phone,
                password: data[0].password
            }

            console.log(newObj)
            form.reset()
            dispatch(accountSlice.actions.editProfile([inDex,newObj]))
            Eggy({
                title: 'Confirm profile',
                message: 'Upload thành công!!!',
            })
        }
    }

    // Render data
    if (data[0]) {
        return (
            <>
                <Nav />
                <div className="container">
                    <div className="main">
                        <h1>Profile</h1>
                        <form id='form1'>
                            <div className="form-control">
                                <label htmlFor="fullname" id='profile'>Fullname:</label><br />
                                <input type="text" id='fullname' name='value' defaultValue={data[0].Fullname} /><br />
                            </div>

                            <div className="form-control">
                                <label htmlFor="date" id='profile'>Date Of Birth:</label><br />
                                <input type="date" id="date" name='value' defaultValue={data[0].DayOfBirth} />
                            </div>
                            <div className="form-control">
                                <label htmlFor="date" id='profile'>Email:</label><br />
                                <input type="email" id="email" name='value' defaultValue={data[0].Email} />
                            </div>
                            <div className="form-control">
                                <label htmlFor="phone" id='profile'>Phone:</label><br />
                                <input type="text" id="phone" name='value' defaultValue={data[0].Phone} />
                            </div>
                            <div className="action">
                                <div className="left">

                                </div>
                                <div className="btn">
                                    <button type='button' className='btn-profile' onClick={updateProfile}>Update</button>
                                    <button type='button' className='btn-profile cancel'>Cancel</button>
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
                        <h1>Bạn chưa đăng nhập tài khoản!</h1>
                    </div>
                </div>
            </>
        )
    }

}

export default Profile