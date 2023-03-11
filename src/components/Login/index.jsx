import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import './style.scss';
import axios from "axios";
import { BACKEND_DOMAIN_API } from "../../global";

const validation = Yup.object({
    email: Yup.string()
        .email('Bạn cần nhập đúng định dạng email!')
        .required('Bạn cần cung cấp email!'),
    password: Yup.string().required('Bạn cần nhập mật khẩu!')
})
const Login = () => {
    const navigate = useNavigate();
    const { values, touched, isValid, errors, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validation,
        onSubmit(values) {
            getAllUser(values);
        }
    });
    const getAllUser = async (user) => {
        const findAllUser = await axios.get(`${BACKEND_DOMAIN_API}/api/v1/users`);
        const findUserLogin = findAllUser.data.find((item) => item.email === user.email);
        if (findUserLogin && findUserLogin.password === user.password) {
            localStorage.setItem('userLogin', JSON.stringify(user));
            alert('Đăng nhập thành công!');
            navigate('/home');
        } else {
            alert('Sai tài khoản hoặc mật khẩu!')
        }
    }
    return (
        <div className="container-login-page">
            <h1>Đăng nhập shop mindX</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>Email <strong className="red">*</strong></label>
                    <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                </div>
                {touched.email && !isValid && errors.email && <p className="red">{errors.email}</p>}
                <div className="row">
                    <label>Password <strong className="red">*</strong></label>
                    <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                </div>
                {touched.password && !isValid && errors.password && <p className="red">{errors.password}</p>}
                <button type="submit">Đăng nhập</button>
                <input type="button" value='Đăng ký' onClick={() => {
                    navigate('/auth/register');
                }} />
            </form>
        </div>
    )
}
export default Login;