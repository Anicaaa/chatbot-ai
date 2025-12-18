import './App.css'
import ChatbotIcon from './components/ChatbotIcon'

function App() {

  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2>Chatbot Assistant</h2>
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hello! <br /> I'm your Chatbot Assistant. How can I help you today?
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">
              Hi! I have a question about your services.
            </p>
          </div>
          <div className="chat-footer">
            <form action="" className="chat-form">
              <input className="message-input" type="text" placeholder="Type your message..." required/>
              <button className="material-symbols-rounded">arrow_upward</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
