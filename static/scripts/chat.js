// var coll = document.getElementsByClassName("collapsible");
// // document.getElementById("chat-bar-bottom").scrollIntoView(true);

// for (let i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//         this.classList.toggle("active");

//         var content = this.nextElementSibling;

//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }

//     });
// }

// // Adds user message to the chatbox and gets bot's response
// function getResponse() {

//     setTimeout(() => {
//         getHardResponse(userText);
//         scrollToBottom(); // Auto-scroll to the bottom
//     }, 1000);
// }

// // Auto-scroll to the bottom of the chatbox
// function scrollToBottom() {
//     var chatbox = document.getElementById("chatbox");
//     chatbox.scrollTop = chatbox.scrollHeight;
// }

// function getTime() {
//     let today = new Date();
//     hours = today.getHours();
//     minutes = today.getMinutes();

//     if (hours < 10) {
//         hours = "0" + hours;
//     }

//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }

//     let time = hours + ":" + minutes;
//     return time;
// }

// // Gets the first message
// function firstBotMessage() {
//     let firstMessage = "How's it going?"
//     document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

//     let time = getTime();

//     $("#chat-timestamp").append(time);
//     document.getElementById("userInput").scrollIntoView(false);
// }

// firstBotMessage();

// // Retrieves the response
// // function getHardResponse(userText) {
// //     let botResponse = getBotResponse(userText);
// //     let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
// //     $("#chatbox").append(botHtml);

// //     document.getElementById("chat-bar-bottom").scrollIntoView(true);
// // }

// function getHardResponse(userText) {
//     let botResponse = getBotResponse(userText);
//     let botMessageElement = document.createElement("p");
//     botMessageElement.classList.add("botText");

//     let spanElement = document.createElement("span");
//     botMessageElement.appendChild(spanElement);
//     document.getElementById("chatbox").appendChild(botMessageElement);

//     let index = 0;
//     const typingSpeed = 75;

//     function typeWriter() {
//         if (index < botResponse.length) {
//             spanElement.innerHTML += botResponse.charAt(index);
//             index++;
//             setTimeout(typeWriter, typingSpeed);
//         }
//     }

//     typeWriter();

//     document.getElementById("chat-bar-bottom").scrollIntoView(true);
// }

// //Gets the text text from the input box and processes it
// function getResponse() {
//     let userText = $("#textInput").val();

//     if (userText == "") {
//         userText = "I love Code Palace!";
//     }

//     let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

//     $("#textInput").val("");
//     $("#chatbox").append(userHtml);
//     document.getElementById("chat-bar-bottom").scrollIntoView(true);

//     setTimeout(() => {
//         getHardResponse(userText);
//     }, 1000)

// }

// // Handles sending text via button clicks
// function buttonSendText(sampleText) {
//     let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

//     $("#textInput").val("");
//     $("#chatbox").append(userHtml);
//     document.getElementById("chat-bar-bottom").scrollIntoView(true);
// }

// function sendButton() {
//     getResponse();
// }

// function heartButton() {
//     buttonSendText("Heart clicked!")
// }

// // Press enter to send a message
// $("#textInput").keypress(function (e) {
//     if (e.which == 13) {
//         getResponse();
//     }
// });


// function handleKeyDown(event) {
//     if (event.keyCode === 13) {
//         sendButton();
//     }
// }





var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    scrollToBottom(); // Auto-scroll to the bottom

    setTimeout(() => {
        getHardResponse(userText);
        scrollToBottom(); // Auto-scroll to the bottom
    }, 1000);
}

function scrollToBottom() {
    var chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;
}

function scrollToTop() {
    var chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = 0;
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botMessageElement = document.createElement("p");
    botMessageElement.classList.add("botText");

    let spanElement = document.createElement("span");
    botMessageElement.appendChild(spanElement);
    document.getElementById("chatbox").appendChild(botMessageElement);

    let index = 0;
    const typingSpeed = 75;

    function typeWriter() {
        if (index < botResponse.length) {
            spanElement.innerHTML += botResponse.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();

    scrollToBottom(); // Auto-scroll to the bottom
}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    scrollToBottom(); // Auto-scroll to the bottom
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

function handleKeyDown(event) {
    if (event.keyCode === 13) {
        sendButton();
    }
}

// Scroll to top button event listener
$("#scrollToTopBtn").click(function () {
    scrollToTop();
});

// Scroll to bottom button event listener
$("#scrollToBottomBtn").click(function () {
    scrollToBottom();
});
