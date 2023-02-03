import React from 'react'
import "./Chat.scss"
import { RxCross1 } from "react-icons/rx";

const Popup = () => {
  return (
   <>
   <div className="overlay">
        <div className="name">
          <div className="cross">
            <h3>Chat</h3>
            <RxCross1 />
          </div>
          <div className="field">
            <input type="text" placeholder="Username" />
            <button>Ok</button>
          </div>
        </div>
      </div>
   </>
  )
}

export default Popup