import React, {useState} from "react";
import style from './App.module.scss';
import data from "./_generatedImages";
import Generate from "./components/Generate";

const App = () => {
    const [imagesUrl, setImagesUrl] = useState([])

    // const requestImg = (imgUrl) => {
    //     const headers = new Headers();
    //     headers.set('Authorization', `Bearer ${process.env.REACT_APP_API_KEY}`);
    //     return fetch(imgUrl, {headers}).then(res => res.blob()).then(blob => URL.createObjectURL(blob));
    // }

    return (
        <div className={style.app}>
            {data.map((obj, i) => {
                if (i > 1) return
                return (
                    <div key={i}>
                        <span>{obj.text}</span>
                        {obj.generatedImagesList.map((imgs, i) => (
                            <div key={i}>
                                {[...imagesUrl, ...imgs].map(imgUrl => (
                                    // <img key={imgUrl} src={() => requestImg(imgUrl)} className="image" alt="ai thing"/>
                                    <img src="" key={imgUrl}
                                    onError={() => fetch(imgUrl,{headers: {Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`}}).then(r=>r.blob()).then(d=> this.src=window.URL.createObjectURL(d))}/>
                                    ))}
                            </div>
                        ))}
                    </div>
                )
            })}
            {/*<Generate imagesUrl={imagesUrl} setImagesUrl={setImagesUrl}/>*/}
        </div>
    );
}

export default App;