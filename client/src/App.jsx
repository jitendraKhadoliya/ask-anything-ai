import { useState } from "react";
import send from "./assets/send.svg";
import user from "./assets/user.png";
import bot from "./assets/bot.png";
import loadingIcon from "./assets/loader.svg";

function App() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const onSubmit = ()=>{
    if(input.trim() === "") return;
    updatePosts(input);
  }

  const updatePosts = (post)=>{
    setPosts(previousState => {
      return [...previousState , {type : "user", post}]
    })
  }

  const onKeyUp = (e)=>{
    if(e.key === "Enter" || e.which === 13){
      onSubmit();
    }
  }

  return (
    <main className="chatGPT-app">
      <section className="chat-container">
        <div className="layout">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`chat-bubble ${
                post.type === "bot" || post.type === "loading" ? "bot" : ""
              }`}
            >
              <div className="avatar">
                <img
                  src={
                    post.type === "bot" || post.type === "loading" ? bot : user
                  }
                  alt="user-photo"
                />
              </div>
              {/* condition for checking loading is aactivated or not */}
              {post.type === "loading" ? (
                <div className="loader">
                  <img src={loadingIcon} alt="loadingIcon" />
                </div>
              ) : (
                <div className="post">{post.post}</div>
              )}
            </div>
          ))}
          {/* here is user response  */}

          {/* here is chat box response */}
          {/* <div className="chat-bubble bot">
            <div className="avatar">
              <img src={bot} alt="user-photo" />
            </div>
            <div className="post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </div>
          </div> */}
        </div>
      </section>
      <footer>
        <input
          type="text"
          className="composebar"
          autoFocus
          placeholder="Ask Anything"
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={onKeyUp} 
        />
        <div className="send-button" onClick={onSubmit}>
          <img src={send} alt="" />
        </div>
      </footer>
    </main>
  );
}

export default App;
