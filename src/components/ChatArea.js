import React from 'react';
import '../stylesheets/ChatArea.css';

const ChatArea = () => (
  <div className="chat">
    <div className="chat_header">
      JOHN DOE
      <div className="chat_status">ONLINE</div>
    </div>
    <div className="chat_s">
      <div className="chat_bubble-robo">Hi</div>
      <div className="chat_bubble-robo">How are you?</div>
      <div className="chat_bubble-guest">Fine. What about you?</div>
      <div className="chat_bubble-robo">I'm great. Wanna meet?</div>
      <div className="chat_bubble-guest">Sure</div>
      <div className="chat_bubble-guest">I'll see you soon</div>
      <div className="chat_bubble-robo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat augue ac ultrices malesuada. Fusce varius urna id dignissim vestibulum. Integer rutrum, purus sit amet tincidunt molestie, diam dui pulvinar nulla, rhoncus facilisis elit mi sit amet lorem.</div>
      <div className="chat_bubble-robo">Huh?</div>
      <div className="chat_bubble-robo">Just Testing</div>
    </div>
    <div className="chat_input">
      <input placeholder="Type here..." className="chat_text" />
      <button type="button" className="chat_submit">
        send
      </button>
    </div>
  </div>
);

export default ChatArea;
