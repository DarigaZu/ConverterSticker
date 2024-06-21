import React, { useState } from 'react'
import './main.scss'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsEye } from 'react-icons/bs'
import { BsEyeSlash } from 'react-icons/bs'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const schema = yup.object({
    LogIn: yup.string().required().min(3, "Неправильно имя пользователя!"),
    Password: yup.string().required().min(8, "Неправильный пароль, введите ещё раз!").required()
}).required();


function LogIn() {
    const [showPassword, setShowPassword] = React.useState(false);
    const change = () => {
        setShowPassword(!showPassword)
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const Submit = (data) => console.log("data", data);
    return (
        <div className='login'>
            <div className="container">
                <form onSubmit={handleSubmit(Submit)}>
                    <div className="login_text">
                        <h3>Войти в профиль</h3>
                        <p>Напишите логин и пароль для входа в свой профиль</p>
                    </div>

                    <div className="login_buttons">
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
                                {...register('Password')} />
                            <button className="eye" onClick={change}>
                                {showPassword ? <BsEyeSlash /> : <BsEye />}
                            </button>
                        </div>
                        <p style={{ color: "white" }}>{errors.Password?.message}</p>
                        <button className="login_button">Войти</button>
                    </div>
                    <div className="login_textbutton">
                        <Link to="/signup"><span>Нету профиля?</span></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LogIn;