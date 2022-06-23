import React, { useState } from "react";

const Register = ({ handleRegister }) => {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [passwordConfirm, setPassWordConfirm] = useState('');
  
  const handleInput = (e) => {
    e.preventDefault();
    if (e.target.name === 'username') { setUserName(e.target.value)}
    else if (e.target.name === 'password') { setPassWord(e.target.value)}
    else if (e.target.name === 'confirmation') { setPassWordConfirm(e.target.value)};
  };
  return (
    <form action="/register" method="post">
      <div className="mb-3">
        <input autoComplete="off" autoFocus className="form-control mx-auto w-auto" id="username" name="username" placeholder="Username" type="text" required onChange={(e)=>handleInput(e)}/>
      </div>
      <div className="mb-3">
        <input className="form-control mx-auto w-auto" id="password" name="password" placeholder="Password" type="password" required onChange={(e)=>handleInput(e)}/>
      </div>
      <div className="mb-3">
        <input className="form-control mx-auto w-auto" id="passwordConfirm" name="confirmation" placeholder="Password(again)" type="password" required onChange={(e)=>handleInput(e)}/>
      </div>
      <button className="btn btn-primary" type="submit" onClick={(e)=>handleRegister(e, username, password, passwordConfirm)}>Register</button>
    </form>
  )
};

export default Register;