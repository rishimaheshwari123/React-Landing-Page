import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import axios from "axios";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();

  const navigate = useNavigate();
  // for hiding and showing the password
  const [password, setPassword] = useState(true);

  const handlePassword = () => {
    setPassword(!password);
  };

  const handleInput = (e) => {
    console.log(e);
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
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        user
      );
      if (response && response.data) {
        alert("User Registration Successfully");
        navigate("/login");

        // for token
        const res_data = response.data;
        storeTokenInLS(res_data.token);
      } else {
        alert("Not valid registration");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3 ">registration form</h1>
                <hr className="hr" />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      required
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type={password ? "password" : "text"}
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
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
                    Register Now
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

export default Register;
