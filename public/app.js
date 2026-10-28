window.addEventListener('load', function() {
    // open and connect to the socket
    let socket = io();
    // listen for the 'connect' event
    socket.on('connect', function() {
        console.log('Connected to server');
    });

// Receive socket messages from the server
let chatBox = document.getElementById('chat-messages');

// Listen for 'chat message' events from the server
socket.on('msg', function(data) {
    console.log("Messaged received!");
    console.log(data);

    // Create a new message element
    let receivedMsg = data.name + ": " + data.msg;
    let msgEl = document.createElement('p');
    msgEl.textContent = receivedMsg;

    // Add the message element to the chat box
    chatBox.appendChild(msgEl);

    // Add autoscroll to the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
});

// Send a message to the server when the form is submitted
let nameInput = document.getElementById('name-input');
let msgInput = document.getElementById('msg-input');
let sendBtn = document.getElementById('send-button');

sendBtn.addEventListener('click', function() {
    let curName = nameInput.value;
    let curMsg = msgInput.value;

    if (!curName.trim() || !curMsg.trim()) return;

    let msgObj = { name: curName, msg: curMsg };

    // Send the message to the server
    socket.emit('msg', msgObj);
        msgInput.value = '';
        msgInput.focus();
    });
});