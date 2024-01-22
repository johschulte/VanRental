import { useState } from "react";
import { useOutletContext, useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../api";

const Login = () => {
  const [loginFormData, setLoginFormData, handleCheckbox] = useState({
    email: "",
    password: "",
  });
  const { setAuthenticated, authenticated } = useOutletContext();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const { state } = useLocation();

  const from = location.state?.from || "/host";

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="login-container">
        {state?.failedRouting && (
          <h3 className="login-first">
            You must logged in, in order to visit the "Host" page.
          </h3>
        )}
        <h1>Sign in to your account</h1>
        <p>Try: Joh@nnes.com as Email and p123 as password.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={loginFormData.email}
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={loginFormData.password}
          />
          <button>Log in</button>
          <div className="login-switch">
            <p>Switch login state:</p>
            <input
              type="checkbox"
              id="checkbox"
              checked={authenticated}
              onChange={() => setAuthenticated((prev) => !prev)}
            />
            <label htmlFor="checkbox"></label>
          </div>
          {authenticated && (
            <>
              <p>You are now logged in! </p>
              <p>Try again to visit the "Host" section.</p>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
