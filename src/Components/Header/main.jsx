import './main.scss'
import React from 'react';
import { Form, FormControl } from 'react-bootstrap'
import { IoMenuOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
    const [show, setShow] = React.useState(false);
    const Click = () => {
        setShow(!show);
    };
    const handleRegisterClick = () => {
        setShow(false);
        history.push('/signup');
    };
    const handleRegisterClick2 = () => {
        setShow(false);
        history.push('/signin');
    };
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header__row">
                        <ul className="header__nav">
                            <Link to="/"><li><b><a href="#!">Главная</a></b></li></Link>
                            <li><b><a href="#!">Каталог</a></b></li>
                            <Link to="/added-stickers-pack"><li><b><a href="#!">Создать</a></b></li></Link>
                            <div style={{ display: "flex", gap: "40px" }}>
                                <Form>
                                    <FormControl
                                        type="text"
                                        placeholder="Поиск"
                                        className="mr-sm-2"
                                        style={{ marginTop: "10px" }}
                                    />
                                </Form>
                                <button className="header__nav__profile" style={{ marginTop: "5px" }}>
                                    <IoMenuOutline className='burger' onClick={Click} style={{ width: "45px", height: "34px", color: "#575757" }} />
                                    {show &&
                                        <div className="menu">

                                            <Link to="/signup" onClick={handleRegisterClick}><p style={{ marginTop: "5px", color: "black" }}>Зарегистрироваться</p></Link>
                                            <Link to="/login" onClick={handleRegisterClick2}><p style={{color: "black"}}>Войти</p></Link>
                                            <Link to="/otherprofile" onClick={handleRegisterClick2}><p style={{color: "black"}}>Чужой профиль</p></Link>
                                        </div>
                                    }
                                    <Link to="/myprofile"><FaCircleUser className='user' style={{ width: "40px", height: "36px", color: "#A3A3A3" }} /></Link>
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;