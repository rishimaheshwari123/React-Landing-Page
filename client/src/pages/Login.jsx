import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAuth } from "../store/Auth";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [password, setPassword] = useState(true);

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        user
      );
      if (res && res.data) {
        alert("User Login Successfully");
        const res_data = res.data;
        storeTokenInLS(res_data.token);
        navigate("/");
      }
    } catch (error) {
      console.log("Login Failed ", error);
    }
  };

  const handlePassword = () => {
    setPassword(!password);
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/login.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <hr className="hr" />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type={password ? "password" : "text"}
                      name="password"
                      placeholder="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                    <span
                      style={{
                        marginLeft: -24,
                        alignItems: "center",
                        marginTop: 10,
                        cursor: "pointer",
                      }}
                    >
                      {password ? (
                        <FiEye onClick={handlePassword} size={20} />
                      ) : (
                        <FiEyeOff onClick={handlePassword} size={20} />
                      )}
                    </span>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
