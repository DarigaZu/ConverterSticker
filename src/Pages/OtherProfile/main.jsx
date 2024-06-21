import './main.scss'
import user from '../../images/user (1).png'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function OtherProfile() {
    return (
        <div className='otprofile'>
        <div className="container">
            <div className="otprofile_content">
            <div className="otprofile_content_lblock">
                <img style={{ width: '105px', height: '105px', borderRadius: '50px' }} src={user} />
                <span>Username</span>
            </div>
                 
         <div className="otprofile_content_rblock">
            <ButtonGroup style={{display: 'flex', gap: '10%'}}>
                <Button style={{borderRadius: '20px'}} variant="primary" id="top-pack">Лучшее</Button>
                <Button style={{borderRadius: '20px'}} variant="primary" id="popular-pack">Популярное</Button>
                <Button style={{borderRadius: '20px'}} variant="primary" id="new-pack">Новое</Button>
            </ButtonGroup>
        
            </div>
            </div>
        </div>
    </div>
    )
}
export default OtherProfile;