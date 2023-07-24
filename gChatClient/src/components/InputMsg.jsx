import "../styles/Chats.css";
import { useGlobalContext } from "../context";
import { useState } from "react";

const InputMsg = () => {
    const [content, setContent] = useState("");
    console.log(content);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://127.0.0.1:3000/messages/create`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: content,
                user_id: 1,
            })
        })
    }

    return(
        <div className="form-div">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setContent(e.target.value)} placeholder="Type here..."/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default InputMsg;