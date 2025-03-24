// import React from 'react'
// import "./Main.css"

// import { assets } from '../../assets/assets'
// const Main = () => {
//   return (
    
//     <div className='main'>
//         <div className="nav">
//             <p>Gemini</p>
//             <img src={assets.user_icon} alt="User Icon" />
//         </div>
//         <div className="main-container">
//             <div className="greet">
//                 <p><span>Hello,Sanchit</span></p>
//                 <p>How can i  help you</p>
//             </div>
//             <div className="cards">
//               <div className="card">
//                 <p>suggest me how to be tall</p>
//                 <img src={assets.compass_icon}/>
//               </div>
//               <div className="card">
//                 <p>suggest me how to be tall</p>
//                 <img src={assets.compass_icon}/>
//               </div>
//               <div className="card">
//                 <p>suggest me how to be tall</p>
//                 <img src={assets.compass_icon}/>
//               </div>
//               <div className="card">
//                 <p>suggest me how to be tall</p>
//                 <img src={assets.compass_icon}/>
//               </div>
//             </div>
            
//         </div>
      
//     </div>
//   )
// }

// export default Main
// import React from 'react'

// const Main = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Main



import "./Hero.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Main = () => {
  // destructuring the object of context
  const {
    input,
    setInput,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);
  // The useContext hook is used to access the value of a context inside a functional component.
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="UserIcon" />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Dev</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Suggest beautiful places to see on upcoming road trip</p>
                  <img src={assets.compass_icon} alt="CompassIcon" />
                </div>
                <div className="card">
                  <p>Suggest beautiful places to see on upcoming road trip</p>
                  <img src={assets.bulb_icon} alt="CompassIcon" />
                </div>
                <div className="card">
                  <p>Suggest beautiful places to see on upcoming road trip</p>
                  <img src={assets.message_icon} alt="CompassIcon" />
                </div>
                <div className="card">
                  <p>Suggest beautiful places to see on upcoming road trip</p>
                  <img src={assets.code_icon} alt="CompassIcon" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="UserIcon" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="GeminiIcon" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(event) => setInput(event.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div className="search-box-icon">
                <img src={assets.gallery_icon} alt="GalleryIcon" />
                <img src={assets.mic_icon} alt="MicIcon" />
                {input ? (
                  <img
                    onClick={() => onSent()}
                    src={assets.send_icon}
                    alt="SendIcon"
                  />
                ) : null}
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display inaccurate info, including about people, so
              double-check its responses.{" "}
              <a href="https://support.google.com/gemini/answer/13594961?visit_id=638488069169109558-2959892032&p=privacy_notice&rd=1#privacy_notice">
                Your privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
