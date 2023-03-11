import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BACKEND_DOMAIN_API } from '../../global';

export const AuthProtect = (props) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getAllUser = async (user) => {
        const findAllUser = await axios.get(`${BACKEND_DOMAIN_API}/api/v1/users`);
        const findUserLogin = findAllUser.data.find((item) => item.email === user.email);
        if (findUserLogin && findUserLogin.password === user.password) {
            setLoading(false);
            navigate('/home');
        } else {
            navigate('/auth/login');
            localStorage.removeItem('userLogin');
            setLoading(false);
        }
    }
    useEffect(() => {
        const userLogin = JSON.parse(localStorage.getItem('userLogin'));
        if (!userLogin) {
            navigate('/auth/login');
            setLoading(false);
            localStorage.removeItem('userLogin');
        } else {
            if (!userLogin.email || !userLogin.password) {
                navigate('/auth/login');
                setLoading(false);
                localStorage.removeItem('userLogin');
            } else {
                getAllUser(userLogin);
            }
        }
    }, [])
    return (
        <>
            {loading ? 'Loading...' :
                props.children
            }
        </>
    )
}
