import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


export default function AuthCheck() {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/Signin');
        }
      }, [isLoggedIn, navigate]);
}
