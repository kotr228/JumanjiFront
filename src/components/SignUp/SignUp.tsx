import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { registerUser } from '../../utils/auth';
import { useAuth } from '../../context/AuthContext';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {

  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const [formData, setFormData] = useState<SignUpFormData>({ email: '', password: '', name: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await registerUser(formData);
      dispatch({ type: 'LOGIN', payload: { user: data.user, token: data.token } });
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex={-1} role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Зареєструватися з мінімальним аккаунтом на всіх проєктах</h1>
              <button onClick={() => navigate("/")} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleSubmit} className="">
                <div className="form-floating mb-3">
                  <input name="name" value={formData.name} onChange={handleChange} className="form-control rounded-3" id="floatingInput" placeholder="name"></input>
                  <label htmlFor="floatingInput">Ім'я</label>
                </div>
                <div className="form-floating mb-3">
                  <input name="email" value={formData.email} onChange={handleChange} className="form-control rounded-3" id="floatingInput" placeholder="name@example.com"></input>
                  <label htmlFor="floatingInput">Електронна пошта</label>
                </div>
                <div className="form-floating mb-3">
                  <input name="password" type="password" value={formData.password} onChange={handleChange} className="form-control rounded-3" id="floatingPassword" placeholder="Password"></input>
                  <label htmlFor="floatingPassword">Пароль</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Зареєструватися</button>
                <button onClick={() => navigate("/login")} className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="button">Увійти</button>
                <small className="text-body-secondary">Натискаючи «Зареєструватися», ви погоджуєтеся з умовами використання.</small>
                <hr className="my-4"></hr>
                <h2 className="fs-5 fw-bold mb-3">Або використайте інший спосіб реєстрації</h2>
                <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                  <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter"></use></svg>
                  Реєстрація з Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;