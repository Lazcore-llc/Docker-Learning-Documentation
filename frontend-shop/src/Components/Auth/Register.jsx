import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = `https://localhost:44337/api/auth/Register`;
    console.log(name, email, phoneNumber, password, role);
    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    axios
      .post(URL, data)
      .then((result) => {
        const sav = result.data;
        if (sav === 200) {
          return (
            <div class="alert alert-success" role="alert">
              {sav.message}
            </div>
          );
        }
        clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const clear = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
  };
  const handleLogin = () => {
    window.localStorage.url("/Login");
  };
  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header">
                    <h3 className="text-center font-weight-light my-4">
                      Create Account
                    </h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="form-floating mb-3 mb-md-0">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter your full name"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                            />
                            <label htmlFor="inputFirstName">Fullname</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="name@gmail.com"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <label htmlFor="inputEmail">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Phone"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          value={phoneNumber}
                        />
                        <label htmlFor="inputEmail">Phone Number</label>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="form-floating mb-3 mb-md-0">
                            <input
                              className="form-control"
                              type="password"
                              placeholder="Create a password"
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                            />
                            <label htmlFor="inputPassword">Password</label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 mb-0">
                        <div className="d-grid">
                          <button
                            className="btn btn-primary btn-block"
                            onClick={(e) => handleSubmit(e)}
                          >
                            Create Account
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center py-3">
                    <div className="small">
                      <a onClick={(e) => handleLogin(e)}>
                        Have an account? Go to login
                      </a>
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
export default Register;
