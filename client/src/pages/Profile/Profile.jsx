import React, { useEffect } from 'react'
import Nav from '../Layout/Nav'
import { useState } from 'react'
import { getUserSelector } from '../../selectors/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { Eggy } from '@s-r0/eggy-js';
import accountSlice from '../../stores/slices/accountSlice'
import { inDexUserSelector, accountSelector } from '../../selectors/selectors'
import { updatePro } from '../../stores/slices/accountSlice'
import { fetchAllUser } from '../../stores/slices/accountSlice';
function Profile() {
    const dispatch = useDispatch()
    const data = useSelector(getUserSelector)
    const inDex = useSelector(inDexUserSelector)
    const dataAllUser = useSelector(accountSelector)
    const [check, setCheck] = useState(false)
    // console.log(data)
    useEffect(() => {
        dispatch(fetchAllUser())
    }, [])

    const updatePage = () => {
        setCheck(true);
    }

    // back

    const backProfile = () => {
        setCheck(false)
    }

    // Update data
    const updateProfile = () => {
        let date = document.querySelector("#date").value;
        let fullname = document.querySelector("#fullname").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        let form = document.querySelector("#form1");

        if (date == "" || fullname == "" || email == "" || phone == "") {
            Eggy({
                title: 'Confirm profile',
                message: 'Faill',
                type: 'error'
            })
        } else {
            let newArr = []

            // Obj update 
            let newObj = {
                id_user: data[0].id_user,
                Fullname: fullname,
                DayOfBirth: date,
                Email: email,
                Phone: phone,
                password: data[0].password
            }

            // Data lưu store
            dataAllUser.forEach((item, i) => {
                if (i == inDex) {
                    newArr.push(newObj)
                } else {
                    newArr.push(item)
                }
            })

            // data dispatch
            let data12 = {
                Arr: newArr,
                Obj: newObj
            }

            dispatch(updatePro(data12))
            form.reset()
            setCheck(false)

            Eggy({
                title: 'Confirm profile',
                message: 'Upload thành công!!!',
            })
        }
    }

    // Render data
    if (data[0] && !check) {
        return (
            <>
                <Nav />
                <div className="container">
                    <div className="main-profile">
                        <div className="left-box">
                            <img src="./src/assets/images/ANHDAIDIEN.jpg" alt="" />

                        </div>

                        <div className="right-box">
                            <h1>PROFILE USER</h1>
                            <div className="message">
                                <div className='control'>
                                    <p><span>Full Name</span>: <b>{data[0].Fullname}</b></p>
                                </div>
                                <div className='control'>
                                    <p><span>Birth Day</span>: <b>{data[0].DayOfBirth}</b></p>
                                </div>
                                <div className='control'>
                                    <p><span>Email</span>: <b>{data[0].Email}</b></p>
                                </div>
                                <div className='control'>
                                    <p><span>Phone</span>: <b>{data[0].Phone}</b></p>
                                </div>
                            </div>
                            <div className="btn-update">
                                <button className='btnUpdate' onClick={updatePage}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } 
    else
        if (data[0] && check) {
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
                                        <button type='button' className='btn-profile cancel' onClick={backProfile}>Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )
        } 
    else {
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