import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  const [extended, setExtended] = useState(false); // using this to hide paragraph tag and all

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        {/* so basicall we go to setextended function and check if value if not false aftr clicking */}
        <div className="new-chat">
          <img src={assets.plus_icon} />

          {extended ? <p>New Chat</p> : null}
          {/* //if extendex is false then do null that means hide the word New Chat */}
        </div>

        {/* // we will also hide this all the page if extended is false */}
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} />
              <p>What is react...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
