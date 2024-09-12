import React from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect} from 'react';
import { Form,Button } from 'react-bootstrap';
import PasswordChecklist from "react-password-checklist";

function Signup() {
    const navigate=useNavigate();
    const [user,setUser]=useState({
        Email:"",
        Phone:"",
        Name:"",
        Password:"",
        Profession:"Student"    
    });
    const handleChange=(e)=>{
    const {name,value} = e.target;
        setUser ({
          ...user,
          [name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        localStorage.setItem('Name',user.Name);
        localStorage.setItem('Password',user.Password);
        navigate("/");
    }

    useEffect(()=>{
        localStorage.removeItem('logintoken');
    })
  return (
    <div className='text-center'>
        <div className='container'>
            <h1 className='pt-2'>Register Here</h1>
        <Form className='pp1 rounded rounded-5' onSubmit={handleSubmit}>
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
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="Profession" name="Profession">Profession</label>
                <select className="form-select" id="Profession" name="Profession" onChange={handleChange}>
                    <option defaultValue="Student" >Student</option>
                    <option value="Fresher">Fresher</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Manager/Lead">Manager/Lead</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="Email"
                placeholder="Email address"
                value={user.Email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Control
                type="tel"
                name="Phone"
                minLength={10}
                maxLength={10}
                placeholder="Phone Number (Without +91)"
                value={user.Phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="Password"
                value={user.Password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className='m-1'>
            <PasswordChecklist 
            rules={["minLength","specialChar","number","capital"]}
            minLength={6}
            value={user.Password}
            onChange={(isValid) => {}}/>
            </div>
            <div className="d-grid gap-2 m-2">
              <Button variant="primary" type="submit">
                Submit Details
              </Button>
            </div>
          </Form>
        </div>
    </div>
  )
}

export default Signup