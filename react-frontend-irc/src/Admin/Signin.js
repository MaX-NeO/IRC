import {useState} from 'react'
import '../Assets/css/Form.css'
import { Link,useNavigate } from 'react-router-dom'
import { HomeBtn } from '../Componentes/Buttons'
import { xSignin } from '../services/api'
import Cookies from 'js-cookie';

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await xSignin(formData);
      if (response.data === 'success') {
        Cookies.set('isLoggedIn', 'true');
        alert('Login successful');
        navigate("/Dashboard");
      } else if (response.data === 'invalidusername') {
        alert('Invalid username');
        console.log('Invalid username');
      } else if (response.data === 'invalidpassword') {
        alert('Invalid password');
        console.log('Invalid password');
      }
    } catch (error) {
      alert('An error occurred');
      console.error(error);
    }
  };


  return (
    <div>
      <div className='form-container'>
        <form className="form cardx" onSubmit={handleSignIn}>
          <p className="title">Login </p>
          <p className="message">Login to modify the products. </p>
          <label>
            <input required placeholder="" type="text" className="input" name="username" value={formData.username} onChange={handleInputChange}/>
            <span>Username</span>
          </label>
          <label>
            <input required placeholder="" type="password" className="input"  name="password" value={formData.password} onChange={handleInputChange}/>
            <span>Password</span>
          </label>
          <div className='submit-btn'>
            <button className="Btn" type='submit'>
              Sign In
            </button>
          </div>
          <p className="signin">Wanna create an new acount ? <Link to='/Signup'>Signup</Link> </p>
        </form>
      </div>
      <HomeBtn/>
    </div>
  )
}
