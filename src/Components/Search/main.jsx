import "./main.scss";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Search() {
    return (
        <div className='search'>
            <div className="container">
                <div className="search__text">
                    <h1>Поиск по запросу "{/* запрос */ }"</h1>
                </div>
                <ButtonGroup>
                    <Button variant="primary" id="popular-pack">Популярное</Button>
                    <Button variant="primary" id="top-pack">Лучшее</Button>
                    <Button variant="primary" id="new-pack">Новое</Button>
                </ButtonGroup>
                <div className="form-user-info">
                    <ul className="form-user-info-text">
                        <li><p>Username: {/* username */}</p></li>
                        <li><p>Стикерпаков: {/* кол-во стик.паков */}</p></li>
                        <li><p>Скачиваний: {/* кол-во скачиваний */}</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Search;



