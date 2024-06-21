import './main.scss'
import { Link } from "react-router-dom";

function SettingsProfile() {
    return (
        <div className='settings'>
            <div className="container">
                <div className="settings_textbutton">
                    <Link to="/login"><span>| Выйти</span></Link>
                </div>
                <div className="settings__text">
                    <h3>Настройки профиля</h3>
                </div>
                <div className="settings__buttons">
                    <input type="text" placeholder="новый логин"/>
                    <button className="getava">📷</button>
                    <button className="saveconf">Сохранить</button>
                </div>
            </div>
        </div>
    )
}
export default SettingsProfile;