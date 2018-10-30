import React, { Component } from "react";
import MessageBar from "./MessageBar";
import ChatArea from "./ChatArea";
import "../stylesheets/App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <ChatArea />
                <MessageBar />
            </div>
        );
    }
}

export default App;
