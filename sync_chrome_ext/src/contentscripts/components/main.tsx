<<<<<<< HEAD
import * as React from "react";
import * as ReactDOM from "react-dom";
// import * as css from './ChatOverlay.css';

interface MessageProps {
    message: string;
}
interface MessageState {}

class Message extends React.Component<MessageProps, MessageState> {
    render() {
        return (
            <p class="chatMessage">
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
        id?: string;
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
            if((e.target as HTMLInputElement).value != "") {
                this.setState({
                    messages: this.state.messages.concat((e.target as HTMLInputElement).value)
                });
                (e.target as HTMLInputElement).value = "";
            }
        }
    }
    render() {
        let elements = [];
        for(let i=0; i<this.state.messages.length; i++) {
            elements.push(<Message message={ this.state.messages[i] }/>);
        }
        return (
            <div id="chatoverlay">
                <h3 id="chatHeader">Chat</h3>
                <div id="chatMessages">
                    {elements}
                </div>
                <input id="chatInput" onKeyDown={this.handleMessage.bind(this)}></input>
            </div>
        );
    }
}

function dragElement(element: HTMLElement, dragBox: HTMLElement) {
    let x1:number = 0, y1:number = 0, x2:number = 0, y2:number = 0;
    dragBox.onmousedown = dragMouseDown;
    function dragMouseDown(e: MouseEvent) {
        e.preventDefault();
        x1 = e.clientX;
        y1 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e: MouseEvent) {
        e.preventDefault();
        x2 = x1 - e.clientX;
        y2 = y1 - e.clientY;
        x1 = e.clientX;
        y1 = e.clientY;
        element.style.left = (element.offsetLeft - x2) + "px";
        element.style.top = (element.offsetTop - y2) + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// ReactDOM.render(<p>HELLO WORLD</p>, document.getElementById("myTestDiv"));
ReactDOM.render(<ChatOverlay />, document.getElementById("myTestDiv"));
dragElement(document.getElementById("chatoverlay"), document.getElementById("chatHeader"))
