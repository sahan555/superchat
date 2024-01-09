import { auth } from "../config/firebase";
import {} from "firebase/firestore";

const ChatMessage = ({ text, uid, photoURL }) => {
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
