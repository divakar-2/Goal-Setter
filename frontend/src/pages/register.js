import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';

const Register = () => {
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name,email, password,password2} = formData;
    const handleChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <>
    <section className='heading'>
        <h1>
            <FaUser/>Register
        </h1>
        <p>Please Create An Account</p>
    </section>
    <section className='form'>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <input type='text' className='form-control' name='name' value={name} placeholder='Enter Name' onChange={handleChange} ></input>
            </div>
            <div className='form-group'>
                <input type='text' className='form-control' name='email' value={email} placeholder='Enter Email'  onChange={handleChange}></input>
            </div> 
            <div className='form-group'>
                <input type='text' className='form-control' name='password' value={password} placeholder='Enter Password' onChange={handleChange} ></input>
            </div>
            <div className='form-group'>
                <input type='text' className='form-control' name='password2' value={password2} placeholder='Enter Confirm Password'  onChange={handleChange}></input>
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-block'>Submit</button> 
            </div>
        </form>
    </section>
    </>
  )
}

export default Register