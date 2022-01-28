/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your EDA ViewModel code goes here
 */
require(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojknockout", "ojs/ojinputtext", "ojs/ojbutton", "ojs/ojlabel", "ojs/ojcollapsible", "ojs/ojformlayout", ], function(require, exports, ko, Bootstrap) {
    "use strict";
});



    var dt = new Date();
    document.getElementById("timeStamp").innerHTML = dt.toLocaleTimeString();


// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#timeStamp").append(time);
    document.getElementById("userMessage").scrollIntoView(false);
}


// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text from the input box and processes it
function getResponse() {
    let userText = $("#userMessage").val();
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#userMessage").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#userMessage").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}


// Press enter to send a message
$("#userMessage").keypress(function(e) {
    if (e.keyCode === 13) {
        getResponse();
    }
});

//Responses ________________________________________________________________________________________________




function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    if (input == "") {
        return "Please ask a question";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

}