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

window.document.onload = function() {
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
}