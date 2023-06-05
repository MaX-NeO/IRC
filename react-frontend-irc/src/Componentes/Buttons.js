import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const HomeBtn = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <button className="route-btn xy-1 home-btn " onClick={navigateHome}>
            <div className="sign">
                <span className="material-symbols-outlined">home</span>
            </div>
            <div className='text'>Home</div>
        </button>
    );
};

const BackBtn = () => {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    };

    return (
        <button className="route-btn xy-2 back-btn" onClick={navigateBack}>
            <div className="sign">
                <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </div>
            <div className='text'>Back</div>
        </button>
    )

};

const LoginBtn = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/Signin');
    };

    return (

        <button className="route-btn xy-1 login-btn" onClick={navigateLogin}>
            <div className="sign">
                <span className="material-symbols-outlined">account_circle</span>
            </div>
            <div className='text'>Login</div>
        </button>
    )
};

const LogoutBtn = () => {
    const navigate = useNavigate();

    const navigateLogout = () => {
        if (Cookies.get('isLoggedIn') === 'true') {
            Cookies.remove('isLoggedIn');
            navigate('/Signin');
        } else {
            navigate('/Signin');
        }

    };

    return (

        <button className="route-btn xy-2 logout-btn" onClick={navigateLogout}>
            <div className="sign">
                <span className="material-symbols-outlined">power_settings_new</span>
            </div>
            <div className='text'>Logout</div>
        </button>
    )
};
const AddBtn = () => {
    const navigate = useNavigate();

    const navigateAdd = () => {
        navigate('/Dashboard/add');
    };

    return (

        <button className="route-btn xy-3 add-btn" onClick={navigateAdd}>
            <div className="sign">
                <span className="material-symbols-outlined">add</span>
            </div>
            <div className='text'>Add</div>
        </button>
    )
};

export { HomeBtn, BackBtn, LoginBtn, LogoutBtn, AddBtn };
