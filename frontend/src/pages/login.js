import React,{useState} from 'react'
import { FaSmile } from 'react-icons/fa';

const Login = () => {
  const [formData,setFormData]=useState({
    email:'',
    password:''
});
const {email,password}=formData;
const handleChange=(e)=>{
  setFormData((prevState)=>({
    ...prevState,[e.target.name]:e.target.value,
  }))
}
const handleSubmit=(e)=>{
  e.preventDefault();
}

  return (<>
    <section>
      <div className='heading'>
        <FaSmile/><h1>Login</h1>
        <p>Enter credentials to access the platform</p>
      </div>
    </section>

    <section className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input type='text' name='email' value={email} className='form-control'placeholder='Please enter valid Email' onChange={handleChange} />
          </div>
          
          <div className='form-group'>
            <input type='text' name='password' value={password} className='form-control'placeholder='Please enter valid Password' onChange={handleChange} />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'> Login Buddy</button>
          </div>
        </form>
    </section></>
  )
}

export default Login