import React from 'react'
import '../home/home.css'
import Loginpage from '../login-page/Loginpage'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
    <Link to='/login' className='btn'>Login</Link>
    <Link to='/signup' className='btn btn-primary'>Signup</Link>
    </div>
  )
}

export default Login