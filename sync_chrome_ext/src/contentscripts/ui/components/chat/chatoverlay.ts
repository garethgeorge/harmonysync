import TestOverlay from "../../../overlays/test_overlay";

export default class ChatOverlay extends TestOverlay {
    applyHTML() {
        const mediaElement = this.findVideoPlayer();
        if (!mediaElement) {
            throw new Error("could not find the HTML video player object");
        }
        mediaElement.parentElement.innerHTML += `<div class="chat_box"> 
        <label for="chat_history"> <b>Chat</b> </label>
        <div id="chat_history"></div>
        <textarea id="msg_area" placeholder="type here ..." required></textarea>
        <button type="submit" class="btn" id="submit_button">Send</button>
        </div>`;
        const head = this.window.document.querySelector("head");
        let chatcss = `<style>
        .chat_box {
            position:absolute;
            top:50;
            left:100;
            z-index:1;
        }
        .chat_history {
            max-width: 300px;
            padding: 10px;
            background-color: white;
          }
          /* Full-width textarea */
          .chat_box textarea {
            width: 100%;
            padding: 15px;
            margin: 5px 0 22px 0;
            border: none;
            background: #f1f1f1;
            resize: none;
            min-height: 50px;
          }
          .chat_box .btn { 
            background-color: #4CAF50;
            color: white;
            padding: 16px 20px;
            border: none;
            cursor: pointer;
            width: 25%;
            margin-bottom:10px;
            opacity: 0.8;
          }
          </style>
        `;
        head.innerHTML += chatcss;
        // const body = this.window.document.querySelector("body");
        // body.innerHTML += `<script>
        // window.onload = (event) => {
        //     console.log('I am working');
        //     alert("Test")
        //     document.getElementById("submit_button").onclick = function () {
        //         document.getElementById("chat_history").innerHTML += "<p>Chat text1</p>";
        //     };
        // };
        // </script>`;
        window.addEventListener('load', (e) => {
            console.log("page is loaded");
            document.getElementById("submit_button").onclick = function () {
                document.getElementById("chat_history").innerHTML += `<p bgcolor="#000000" text="#ffffff">` +  (document.getElementById("msg_area") as HTMLTextAreaElement).value + `</p>`;
            };
        });
    }
}