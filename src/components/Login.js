import React from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect} from 'react';
import { Form,Button } from 'react-bootstrap';
function Login() {
    const [err,seterr]=useState("");
    const navigate=useNavigate();
    const [user,setUser]=useState({
        Name:"",
        Password:"",
    });
    const handleChange=(e)=>{
        seterr("");
    const {name,value} = e.target;
        setUser ({
          ...user,
          [name]:value})
    }
    const login=(e)=>{
        e.preventDefault();
        console.log(user);
        seterr("");
        if(localStorage.getItem('Name')===user.Name && localStorage.getItem('Password')===user.Password) {
            localStorage.setItem('logintoken',1);
            navigate("/dashboard");
            window.location.reload();
        }
        else {
            seterr("Invalid details/Please Register");
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('logintoken')!=null) {
            localStorage.removeItem('logintoken');
            window.location.reload();
        }
    })
  return (
    <div className='text-center w11 mt-5'>
        <div className='container'>
            <h2 className='pt-2'>Please Log in</h2>
        <Form className='pp2 rounded rounded-5' onSubmit={login}>
            {err!=="" && <h5 className='text-danger'>{err}</h5>}
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                name="Name"
                placeholder="Name"
                required
                value={user.Name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="Password"
                value={user.Password}
                onChange={handleChange}
                minLength={'6'}
                required
              />
            </Form.Group>
            <div className="d-grid gap-2 m-2">
              <Button variant="primary" type="submit">
                Log in
              </Button>
            </div>
          </Form>
        </div>
    </div>
  )
}

export default Login