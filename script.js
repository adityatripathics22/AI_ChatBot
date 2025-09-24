const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".chat-body");
const sendMessageButton = document.querySelector("#send-message");

const userData = {
    message : null
}

const createMessageElement = (content , classes) => {
    const div = document.createElement("div");
    div.classList.add("message",classes);
    div.innerHTML = content;
    return div;
}

//Handle outgoing user messages
const handleOutgoingMessage = (e) => {
    e.preventDefault();
    userData.message = messageInput.value.trim();

    //Create and Display user message
    const messageContent = `<div class="message-text">${userData.message}</div>`;

    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    chatBody.appendChild(outgoingMessageDiv);
}


//Handle Enter key press for sending messages 
messageInput.addEventListener("keydown" , (e) => {
    const userMessage = e.target.value.trim();

    if(e.key === "Enter" && userMessage){
        handleOutgoingMessage(e);
    }
})

//trim reomves whitespaces from both sides of string
//keydown fires before the text is input so the string is not updated and shows the old value

sendMessageButton.addEventListener("click" , (e) => handleOutgoingMessage())