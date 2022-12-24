import './App.css';
import {useState} from "react";
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

function App() {
  const [userPrompt, setUserPrompt] = useState("")
  const [imagesUrl, setImagesUrl] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: 10,
    size:"512x512"

    }
      setIsLoading(true)
      try {
        const response = await openai.createImage(imageParameters);
          const urlData = response.data.data
          console.log(urlData);
          setImagesUrl(urlData);
      } catch (e) {
        console.log(e)
      } finally {
          setIsLoading(false)
      }
  }

  return (
      <div className="App" >
          <div style={{display: "flex", gap: "30px",
              flexWrap: "wrap"}}>
                {imagesUrl.map((image, i)=> {
                    if (i === 0 || i === 1) return <div style={{width: "512px", height: "512px"}}/>
                    return <img src={image.url} className="image" alt="ai thing" />
                })}
          </div>
        <div style={{position: "absolute", top: 0, left: "11px"}}>
            <p>What do you want to see?</p>

            <textarea
                value={userPrompt}
                placeholder='A sunset on the Sydney Opera House'
                onChange={(e) => setUserPrompt(e.target.value)}
                style={{padding: "10px 20px", width: "1000px", height: "452px", fontSize: "24px"}}
            />
            <button onClick={() => generateImage()}
                    style={{padding: "10px 20px", margin: "10px"}}
            >Generate</button>
            {isLoading && <div className="loader"/>
            }
        </div>
      </div>
  );
}

export default App;