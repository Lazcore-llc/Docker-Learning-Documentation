import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = `https://localhost:44337/api/auth/Login`;
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(URL, data)
      .then((result) => {
        const sav = result.data;
        alert(sav.message);
        clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const clear = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header">
                    <h3 className="text-center font-weight-light my-4">
                      Login
                    </h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="name@gmail.com"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <label for="inputEmail">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <label for="inputPassword">Password</label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          id="inputRememberPassword"
                          type="checkbox"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="inputRememberPassword"
                        >
                          Remember Password
                        </label>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <a className="small" href="password.html">
                          Forgot Password?
                        </a>
                        <button onClick={(e)=>handleSubmit(e)}className="btn btn-primary" href="index.html">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center py-3">
                    <div className="small">
                      <a href="register.html">Need an account? Sign up!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
