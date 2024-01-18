import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "../config/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import ChatMessage from "./ChatMessage";
import { useRef, useState } from "react";

const ChatRoom = () => {
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(2000));
  const [messages] = useCollectionData(q, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    try {
      await addDoc(messagesRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });

      setFormValue("");
      dummy.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  };
  const dummy = useRef();
  return (
    <>
      <main>
        {messages &&
          messages.map((msg, id) => (
            <>
              <ChatMessage
                key={id}
                text={msg.text}
                uid={msg.uid}
                photoURL={msg.photoURL}
              />
              <div ref={dummy}></div>
            </>
          ))}
      </main>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ChatRoom;
