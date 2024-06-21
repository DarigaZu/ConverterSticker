import './main.scss'

function Create() {
    return (
        <div className='create'>
            <div className="container">
                <div className="create__text">
                    <h3>Опубликовать стикер пак в профиль</h3>
                    <p>Опубликовать стикер пак в gif и png из вашей ссылки <br />в общедоступное скачивание</p>
                </div>
                <div className="create__buttons">
                    <input type="text" placeholder="название стикер пака"/>
                    <button className="gettgs">Файл tgs</button>
                    <button className="confirm">Опубликовать</button>
                </div>
            </div>
        </div>
    )
}
export default Create;