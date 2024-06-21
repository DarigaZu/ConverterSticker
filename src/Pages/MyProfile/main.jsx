import './main.scss'
import user from '../../images/user (1).png'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

function MyProfile() {
    return (
        <div className='profile'>
            <div className="container">
                <div className="profile_content">
                <div className="profile_content_lblock">
                    <img style={{ width: '105px', height: '105px', borderRadius: '50px' }} src={user} />
                    <span>Username</span>
                    <Link to="/settings"><button>Реадактировать профиль</button></Link>
                </div>
                     
             <div className="profile_content_rblock">
                <ButtonGroup style={{display: 'flex', gap: '10%'}}>
                    <Button style={{borderRadius: '20px'}} variant="primary" id="top-pack">Лучшее</Button>
                    <Button style={{borderRadius: '20px'}} variant="primary" id="popular-pack">Популярное</Button>
                    <Button style={{borderRadius: '20px'}} variant="primary" id="new-pack">Новое</Button>
                </ButtonGroup>
                <button style={{width:'138px', height: '50px', backgroundColor: '#090C9B', color: 'white', borderRadius: '25px', marginTop:'25%'}}>Создать</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default MyProfile;