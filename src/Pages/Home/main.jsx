import './main.scss'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Form, FormControl } from 'react-bootstrap'
import { useRef } from 'react';

function Home() {
    const converterSysRef = useRef(null);

    const handleScrollToConverter = () => {
        if (converterSysRef.current) {
            converterSysRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    };

    return (
        <>
            <div className="home-top">
                <div className="converter">
                    <div className="content">
                        <h1><b>Бесплатный конвертер<br />стикеров из Telegram в png</b></h1>
                        <Button variant="primary" className="goUse" onClick={handleScrollToConverter}>Попробовать</Button>
                    </div>
                </div>
            </div>
            <div className="home">
                <div className="container">
                    <div className="converter-sys" ref={converterSysRef}>
                        <div className="content">
                            <div className="content__text">
                                <h1><b>Конвертировать стикеры</b></h1>
                                <p>Конвертировать стикерпак в gif и png из файла tgs</p>
                            </div>
                            <ButtonGroup vertical>
                                <Button variant="outline-secondary">Загрузить файл tgs</Button>{' '}
                                <DropdownButton
                                    as={ButtonGroup}
                                    title="Формат"
                                    id="bg-vertical-dropdown-1"
                                >
                                    <Dropdown.Item eventKey="##1">GIF</Dropdown.Item>
                                    <Dropdown.Item eventKey="##2">PNG</Dropdown.Item>
                                </DropdownButton>
                                <Button variant="success">Конвертировать</Button>
                            </ButtonGroup>
                        </div>
                    </div>

                    <div className="converter-catalog">
                        <div className="content">
                            <h1><b>Каталог стикеров</b></h1>
                            <Form>
                                <FormControl 
                                    type="text"
                                    placeholder="Введите ключевые слова..."
                                    className="mr-sm-2"
                                />
                            </Form>
                            <ButtonGroup>
                                <Button variant="primary" id="popular-pack">Популярное</Button>
                                <Button variant="primary" id="top-pack">Лучшее</Button>
                                <Button variant="primary" id="new-pack">Новое</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
