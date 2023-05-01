import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

type Emoji = {
    character: string;
};

const ShitPostComponent: React.FC = () => {
    const [text, setText] = useState<string>("");
    const [emoji, setEmoji] = useState<Emoji[]>([]);

    //fetch all the emojis from open emoji api
    useEffect(() => {
        const fetchEmojis = async () => {
            await axios
                .get(
                    "https://emoji-api.com/emojis?access_key=d1214f742f5e91a1eeb2672ad3107b1294661207"
                )
                .then((res) => {
                    setEmoji(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        fetchEmojis();
    }, []);

    //emojis text generator
    const shitpostify = (text: string, emojis: Emoji[]): string => {
        const newString = text
            .split("")
            .map((char) => {
                if (char === " ") {
                    return emojis[Math.floor(Math.random() * emojis.length)]
                        .character;
                } else {
                    const randomCased = Math.round(Math.random());
                    const charToReplace = char.toLowerCase();
                    const randomEmoji =
                        emojis[Math.floor(Math.random() * emojis.length)];
                    const replacedChar = charToReplace.replace(
                        ".",
                        randomEmoji.character
                    );
                    return randomCased
                        ? replacedChar.toUpperCase()
                        : replacedChar;
                }
            })
            .join("");
        return newString;
    };

    //handle text change
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const oldText = e.target.value;
        const shitpostText = shitpostify(oldText, emoji);
        setText(shitpostText);
    };

    //copy text to clipboard
    const copyBtn = async (): Promise<void> => {
        try {
            await navigator.clipboard.writeText(text);
            alert("Đã copy!");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className='shitpost-container'>
                <h1>Emoji Pasta - làm mù đối thủ bằng emoji 🙂</h1>
                <textarea
                    className='shitpost-input'
                    value={text}
                    onChange={handleTextChange}></textarea>
                <button className='shitpost-btn' onClick={copyBtn}>
                    Cope
                </button>
            </div>
        </>
    );
};

export default ShitPostComponent;
