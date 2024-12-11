// Variables for DOM elements
const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

// Function to send a new message
function sendMessage() {
    const userMessage = messageInput.value.trim();

    if (userMessage !== "") {
        // Create the user's message bubble first
        const userBubble = document.createElement("div");
        userBubble.classList.add("message-bubble", "user-message");

        const userAvatar = document.createElement("img");
        userAvatar.classList.add("avatar");
        userAvatar.src = "images/user.png";
        userAvatar.alt = "User Avatar";

        const userText = document.createElement("p");
        userText.classList.add("message-text");
        userText.textContent = userMessage;

        userBubble.appendChild(userText);
        userBubble.appendChild(userAvatar); // Avatar on the right

        // Create the buddy's message bubble after
        const buddyBubble = document.createElement("div");
        buddyBubble.classList.add("message-bubble", "buddy-message");

        const buddyAvatar = document.createElement("img");
        buddyAvatar.classList.add("avatar");
        buddyAvatar.src = "images/dogavatar.png";
        buddyAvatar.alt = "Buddy Avatar";

        const buddyText = document.createElement("p");
        buddyText.classList.add("message-text");
        buddyText.textContent = "...";

        buddyBubble.appendChild(buddyAvatar); // Avatar on the left
        buddyBubble.appendChild(buddyText);

        // Append new messages to the chatbox
        chatBox.appendChild(userBubble);
        chatBox.appendChild(buddyBubble);

        // Scroll to the bottom of the chatbox
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear the message input
        messageInput.value = "";
    }
}

// Add event listener to the send button
sendBtn.addEventListener("click", sendMessage);

// Allow pressing 'Enter' to send the message
messageInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
