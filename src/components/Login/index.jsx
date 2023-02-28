import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import './style.scss';

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
            console.log(values);
        }
    });
    return (
        <div className="container-login-page">
            <h1>Đăng nhập shop mindX</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>Email <strong className="red">*</strong></label>
                    <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} />
                </div>
                {touched.email && !isValid && errors.email && <p className="red">{errors.email}</p>}
                <div className="row">
                    <label>Password <strong className="red">*</strong></label>
                    <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} />
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