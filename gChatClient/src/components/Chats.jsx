import ChatBox from "./ChatBox";
import "../styles/Chats.css";
import { useGlobalContext } from "../context";
import MessageBubble from "./MessageBubble";
import InputMsg from "./InputMsg";

const Chats = () => {
    const { messages } = useGlobalContext();
    console.log(messages);

    return (
        <section className="msg-section">
            <div className="messages-container">
                {
                    messages.map((message) => {
                        return (
                            <MessageBubble key={message.id} {...message} />
                        )
                    })
                }
            </div>
            <InputMsg />
        </section>
    )
}

export default Chats;