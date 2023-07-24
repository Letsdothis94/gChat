import "../styles/MessageBubble.css";

const messageBubble = ({ id, content, user_id }) => {
    return (
        <div className="msg-bubble">
            <h6>{content} - {user_id}</h6>
        </div>

    )
}

export default messageBubble;