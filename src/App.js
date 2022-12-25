import style from './App.module.scss';

function App() {
    return (
        <div className={style.app}>
            {imagesUrl.map((image, i) => {
                if (i === 0 || i === 1) return <div style={{width: "512px", height: "512px"}}/>
                return <img src={image.url} className="image" alt="ai thing"/>
            })}
        </div>
    );
}

export default App;