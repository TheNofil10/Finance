import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate()

    const [data, setData] = useState({
        username: "",
        password: "",
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const {username, password} = data
        try {
            const {data} = await axios.post('http://16.171.208.165:8000/login', {
                username,
                password
            });
            if(data.error){
                toast.error(data.error)
            } else {
                setData({});
                navigate('/home')
            }
        } catch (error) {
            
        }
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center mx-auto align-middle p-5 vh-100 justify-content-center" >
                <div>
                    <h2>Login</h2>
                </div>
                <form className="d-flex flex-column align-items-center p-5" onSubmit={loginUser}>
                    <label className='p-4'>

                        Username
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input type="text" name="username" value={data.username} onChange={(e) => setData({...data, username: e.target.value})}/>
                    </label>
                    <label className='p-4'>

                        Password
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input type="password" name="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                    </label>
                    <button type="submit">Confirm</button>
                </form>
            </div>
        </>
    )
}