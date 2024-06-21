import React, { useState } from 'react'
import './main.scss'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsEye } from 'react-icons/bs'
import { BsEyeSlash } from 'react-icons/bs'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const schema = yup.object({
    LogIn: yup.string().required().min(3, "Слишком короткое имя!"),
    Password: yup.string().required().min(8, "Пароль не достаточно длинный!").required()
}).required();

function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false);
    const change = () => {
        setShowPassword(!showPassword)
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const Submit = (data) => console.log("data", data);
    return (
        <div className='signup'>
            <div className="container">
            <form onSubmit={handleSubmit(Submit)}>
                <div className="signup_text">
                    <h3>Создать профиль</h3>
                    <p>Придумайте логин и пароль для публикаций</p>
                </div>
                <div className="signup_buttons">
                        <input type="text"
                            name='LogIn'
                            id='LogIn'
                            placeholder="Логин"
                            {...register('LogIn')} />
                        <p style={{ color: "white" }}>{errors.LogIn?.message}</p>

                        <div className="relative-eye">
                            <input type={showPassword ? 'text' : 'Password'}
                                name='Password'
                                id='Password'
                                placeholder="Пароль"
                                {...register('Password')}
                            />
                            <button className="eye" onClick={change}>
                                {showPassword ? <BsEyeSlash /> : <BsEye />}
                            </button>
                        </div>
                        <p style={{ color: "white" }}>{errors.Password?.message}</p>
                        <button className="signup_button">Зарегистрироваться</button>
                </div>
                <div className="signup_textbutton">
                    <Link to="/login"><span>Уже есть профиль?</span></Link>
                </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp;