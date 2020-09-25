import * as React from "react";
import * as ReactDOM from "react-dom";
import * as css from './ChatOverlay.css';

interface MessageProps {
    message: string;
}
interface MessageState {}

class Message extends React.Component<MessageProps, MessageState> {
    render() {
        return (
            <p>
                { this.props.message }
            </p>
        );
    }
}

interface ChatProps {}

interface ChatState {
    messages: string[];
}

declare module 'react' {
    interface DOMAttributes<T> {
        class?: string;
    }
}

class ChatOverlay extends React.Component<ChatProps, ChatState> {
    constructor(props: ChatProps){
        super(props);
        this.state = { 
            messages: ["Testing"]
        };
        // this.handleMessage = this.handleMessage.bind(this);
    }
    // handleMessage(e: React.ChangeEvent<HTMLInputElement>) {
    handleMessage(e: React.KeyboardEvent) {
        if(e.key === 'Enter') {
            this.setState({
                messages: this.state.messages.concat((e.target as HTMLInputElement).value)
            });
            (e.target as HTMLInputElement).value = "";
        }
    }
    render() {
        let elements = [];
        for(let i=0; i<this.state.messages.length; i++) {
            elements.push(<Message message={ this.state.messages[i] }/>);
        }
        return (
            <div class="chatoverlay">
                <h1>Chat</h1>
                <div class="chatMessages">
                    {elements}
                </div>
                <input class="chatInput" onKeyDown={this.handleMessage.bind(this)}></input>
            </div>
        );
    }
}

// ReactDOM.render(<p>HELLO WORLD</p>, document.getElementById("myTestDiv"));
ReactDOM.render(<ChatOverlay />, document.getElementById("myTestDiv"));
