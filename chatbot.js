const chatInput = document.querySelector(".chat-input textarea");
const userMessageBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox")

let showUserMsg;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span> <p>${message}</p>` // Conditional (ternary) operator 
    chatLi.innerHTML = chatContent;
    return chatLi;
} // In this case the code determines if the message need the span smart_icon if the message is not outgoing


const generateResponse = () => {
    const lowerCase = showUserMsg;

    let response = '';

    if (lowerCase.includes("hi") || lowerCase.includes("hello") || lowerCase.includes("hey")) {
        response = "Hello :3, how can I assist you today?";
        return response;
    } 
    else if (lowerCase.includes("How") && lowerCase.includes("are") && lowerCase.includes("you") || lowerCase.includes("?")) {
        response = "I'm fine thanks for asking. How can i help you today?";
        return response;
    }
    else if (lowerCase.includes("bye")) {
        response = "Thanks for talk to me, good bye :3";
        return response;
    }
    else {
        response = "Sorry, i can't help you"
        return response;
    }
}
// these are texts who can evalue the chatbot and set a answer if the string outgoing contains the word in the conditionals

const handleChat = () => {
    showUserMsg = chatInput.value.trim().toLowerCase(); 
    if (!showUserMsg) 
    return;

    chatbox.appendChild(createChatLi(showUserMsg, "outgoing")); // this is for made the code and append child of the div chatbox

    setTimeout( () => {
        const response = generateResponse(); // save te function
        if (response) {
            chatbox.appendChild(createChatLi(response, "incoming"));
        } else {
            chatbox.appendChild(createChatLi("I'm sorry, I didn't understand that.", "incoming"));
        }
    }, 600);
    // if the function has been executed without errors (shows a string) the function add a child to "chatbox" and then the msg is show
} 

userMessageBtn.addEventListener("click", handleChat); // event for send the msg



