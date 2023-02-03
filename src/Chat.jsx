import React, { useEffect, useRef, useState } from "react";
import "./Chat.scss";
import { AiOutlineSend } from "react-icons/ai";
import { db } from "./firebase";
import { addDoc, collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { RxCross1 } from "react-icons/rx";


const Chat = () => {
  const [input, setInput] = useState();
  const [username, setUsername] = useState();
  const [error, setError] = useState();
  const [message, setMessage] = useState([]);
  const popup = useRef();
  const [ispopup, setPopup] = useState(true);
console.log(message)
const PopupButton = () =>{
    if(username === ""){
        setError('Input field cannot be blank')
    }else{
        setPopup(false)
        popup.current.style.display = "block"
    }
}

useEffect(() => {
    const Data = async () => {
      const colleRef = query(collection(db, "messages"), orderBy("createdAt"));
      onSnapshot(colleRef, (snapshot) => {
        setMessage(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    Data();
  }, []);
  

  const SendMessage = async (event) => {
    event.preventDefault();
    // setMessage([...message, input])
    const collectionRef = collection(db, "messages");
    const payload = { name: username, message : input, createdAt : Timestamp.now()};
    try{
        setInput('')
        await addDoc(collectionRef, payload)
    }catch(err){
        console.log(err.message)
    }
  };
  return (
    <>
    {ispopup && (
        <div className="overlay">
        <div className="name">
          <div className="cross">
            <h3>Chat</h3>
            <RxCross1 />
          </div>
          <div className="field">
            <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
            <button onClick={PopupButton}>Ok</button>
            <p>{error}</p>
          </div>
        </div>
      </div>
    )}
    
      <div ref={popup}  className="chat">
        <div className="head">
          <h1>Chat App.</h1>
        </div>
        <div className="chatting-place">
            {message.map((msg)=>{
                const {name, message, id} = msg;
                return(
                    <>
                        {msg && (
                            <div className={username === name ? "right" : "left"} >
                                <p key={id}>{name} : {message}</p>
                            </div>
                        )}
                    </>
                )
            })}
        </div>
        <form>
          <input
            value={input}
            type="text"
            placeholder="Message here..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={SendMessage}>
            <AiOutlineSend />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
