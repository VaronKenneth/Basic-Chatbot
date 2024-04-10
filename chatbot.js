const chatInput = document.querySelector(".chat-input textarea");
const userMessageBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox")
const chatbotToggler = document.querySelector(".chatbot-toggler")
const closeResponsive = document.querySelector(".close-btn")

let showUserMsg;
const inputInitHeight = chatInput.scrollHeight;


const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span> <p></p> ` // Conditional (ternary) operator 
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message; // A little change make the message only text (not HTML sensitive)
    return chatLi;
} // In this case the code determines if the message need the span smart_icon if the message is not outgoing


const generateResponse = () => {
    const lowerCase = showUserMsg;
    let response = '';

    if (lowerCase.includes("hi") || lowerCase.includes("hello") || lowerCase.includes("hey")) {
        response = "Hello :3, how can I assist you today?";
        return response;
    } 
    else if (lowerCase.includes("how") && lowerCase.includes("are") && lowerCase.includes("you")) {
        response = "I'm fine thanks for asking. How can i help you today?";
        return response;
    }
    else if (lowerCase.includes("bye")) {
        response = "Thanks for talk to me, good bye :3";
        return response;
    }
    else {
        response = "Sorry, i can't help you";
        return response;
    }

}
// these are texts who can evalue the chatbot and set a answer if the string outgoing contains the word in the conditionals

const handleChat = () => {
    showUserMsg = chatInput.value.trim().toLowerCase(); 
    chatInput.value = ""; // After send the chatbox this is blank
    chatInput.style.height = `${inputInitHeight}px`;
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
        chatbox.scrollTo(0, chatbox.scrollHeight); // Autoscroll
    }, 600);
    // if the function has been executed without errors (shows a string) the function add a child to "chatbox" and then the msg is show
} 

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});


chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if (e.key === "enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});
userMessageBtn.addEventListener("click", handleChat); // event for send the msg


closeResponsive.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));



