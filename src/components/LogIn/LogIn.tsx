import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { loginUser } from "../../utils/auth"; 
import { useAuth } from "../../context/AuthContext";

const LogIn = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password });
      dispatch({ type: 'LOGIN', payload: { user: data.user, token: data.token } });

      
      console.log('🔐 Logged in user:', data.user);

      
      navigate('/'); 
    } catch (err: any) {
      alert('❌ Помилка входу: ' + err.message);
      console.error(err);
    }
  };


  return (
    <div>
      <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex={-1} role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Увійти в Аккаунт</h1>
              <button onClick={() => navigate("/")} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleLogin} className="">
                <div className="form-floating mb-3">
                  <input type="email" className="form-control rounded-3" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                  <label htmlFor="floatingInput">Електронна пошта</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control rounded-3" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                  <label htmlFor="floatingPassword">Пароль</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Увійти</button>
                <button onClick={() => navigate("/signup")} className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Зареєструватися</button>
                <small className="text-body-secondary">Натискаючи «Увійти», ви погоджуєтеся з умовами використання.</small>
                <hr className="my-4"></hr>
                <h2 className="fs-5 fw-bold mb-3">Або використайте інший спосіб входу в аккаунт</h2>
                <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                  <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter"></use></svg>
                  Увійти з Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;