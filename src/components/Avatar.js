import React, {useState} from 'react';
import'../Styles/Avatar.css';

const Avatar =() =>{
    const [sprite] = useState("avataaars");
    const [seed, setSeed] = useState(1000);

    function handleGenerate(){
        let x = Math.floor(Math.random() * 1000);
        setSeed(x);
    }

    return(
        <div className="container">
            <div className="nav">
                <p>Random Avatar Generator</p>
            </div>
            <div className="home">
                <div className="avatar">
                    <img src = {`https://avatars.dicebear.com/api/${sprite}/${seed}.svg`} alt="Sprite" />
                </div>
                <div className="generate">
                    <button id="gen" onClick={() =>{
                        handleGenerate()}}>Generate</button>  
                </div>
            </div>
        </div>
    )
}

export default Avatar;