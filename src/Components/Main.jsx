import { useState } from "react"
import memesData from "./memesData"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    });

    function handleChange(event) {
        const {name, value} = event.currentTarget;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value

        }));
    }

    function getRandomMeme() {
        const memes = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: memes[randomIndex].url
        }));
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getRandomMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src= {meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}