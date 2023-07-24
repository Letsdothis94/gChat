import Userlist from "./Userlist";
import Chats from "./Chats";
import "../styles/ChatBox.css";

const ChatBox = () => {
    return (
        <section className="main-section">
            <Userlist />
            <Chats />
        </section>
    )
}

export default ChatBox;