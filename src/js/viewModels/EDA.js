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


define(['../accUtils', 'ojs/ojrestdataprovider', 'ojs/ojtable', 'require', 'exports', 'knockout', 'ojs/ojbootstrap', 'ojs/ojknockout',
        'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojlabel', 'ojs/ojcollapsible', 'ojs/ojformlayout',
    ],
    function(accUtils, require, exports, ko, Bootstrap) {

        // function test() {
        //     var config = {
        //         method: 'get',
        //         url: 'https://api.rtt.io/api/v1/json/search/MIA',
        //         headers: {
        //             "Access-Control-Allow-Origin": "*",
        //             "Access-Control-Allow-Methods": "GET",
        //             'Authorization': 'Basic cnR0YXBpX3NhbWpvc2VwaDoxN2Y4M2U0ZWY4NTUwZTliN2RhZGM2YjY4ZDc2ZDkzYzkzNTgyOTk5'
        //         }
        //     };

        //     axios(config)
        //         .then(function(response) {
        //             console.log(JSON.stringify(response.data));
        //         })
        //         .catch(function(error) {
        //             console.log(error);
        //         });
        // }
        // test();
    });

//DB/REST API connection ___________________________________________________________________________________________

// function viewModel() {
//     // To be defined
// };
// return { 'deptVM': viewModel };
// }
// )

// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Basic QURNSU46TTZOTnJUcmdtQTVXQUZM");

// var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
// };

// fetch("https://g5ac78245d565e6-sleda.adb.uk-london-1.oraclecloudapps.com/ords/admin/rates/", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

//Tried adding a time stamp 
var dt = new Date();
// document.getElementById("timeStamp").innerHTML = dt.toLocaleTimeString();
var timeStamp = ko.observable(dt.toLocaleTimeString());

class ButtonModel {
    constructor() {
        //timeStamp = ko.observable(dt.toLocaleTimeString());
    }
}
ojbootstrap_1.whenDocumentReady().then(() => {
    ko.applyBindings(new ButtonModel(), document.getElementById("messages"));
});

//  first message
function firstBotMessage() {
    let firstMessage = "Hello, Please ask me a question"
    document.getElementById("botMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#timeStamp").append(time);
    document.getElementById("userMessage").scrollIntoView(false);
}
firstBotMessage();

// gets the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("bottom").scrollIntoView(true);
}

//Gets the text from the input
function getResponse() {
    let userText = $("#userMessage").val();
    if (!userText) {
        return
    }
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#userMessage").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// sending text  button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#userMessage").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("bottom").scrollIntoView(true);


}

function sendButton() {
    getResponse();
}

function enterKey(e) {
    if (e.code === 'Enter') {
        getResponse();
    }
}



//temp Responses ________________________________________________________________________________________________


function getBotResponse(input) {
    var userInput = input.toLowerCase()

    console.log(userInput)

    if (userInput.includes("meal expense")) {
        return "If you are staying in a hotel for one night of more, the meal expense limit is £30 per night.";
    } else if (userInput.includes("away from home")) {
        return "If you are staying in a hotel for one night of more, the meal expense limit is £30 per night.";
    } else if (userInput.includes("is the limit £30 per night")) {
        return "If you are staying in a hotel for one night of more, the meal expense limit is £30 per night.";
    }

    if (userInput.includes("booking site")) {
        return "Capgemini makes use of the Egencia site. All train, car, plane and hotel bookings should be made through Egencia.";
    } else if (userInput.includes("travel site")) {
        return "Capgemini makes use of the Egencia site. All train, car, plane and hotel bookings should be made through Egencia.";
    } else if (userInput.includes("egencia")) {
        return "Capgemini makes use of the Egencia site. All train, car, plane and hotel bookings should be made through Egencia.";
    }

    if (userInput.includes("mileage decreased")) {
        return "This will be due to you driving more than 10,000 miles for Capgemini, as per HMRC the rate decreased to 25p for every mile over 10,000. This resets at the start of each Tax year.";
    } else if (userInput.includes("my mileage was 45p")) {
        return "This will be due to you driving more than 10,000 miles for Capgemini, as per HMRC the rate decreased to 25p for every mile over 10,000. This resets at the start of each Tax year.";
    } else if (userInput.includes("is now 25p")) {
        return "This will be due to you driving more than 10,000 miles for Capgemini, as per HMRC the rate decreased to 25p for every mile over 10,000. This resets at the start of each Tax year.";
    } else if (userInput.includes("10000 miles")) {
        return "This will be due to you driving more than 10,000 miles for Capgemini, as per HMRC the rate decreased to 25p for every mile over 10,000. This resets at the start of each Tax year.";
    } else if (userInput.includes("hmrc mileage limit")) {
        return "This will be due to you driving more than 10,000 miles for Capgemini, as per HMRC the rate decreased to 25p for every mile over 10,000. This resets at the start of each Tax year.";
    }

    if (userInput.includes("incidental fee")) {
        return "Capgemini covers incidental expenses, if this in the UK, Capgemini covers up to £5 for incidental expenses and £10 over seas ";
    } else if (userInput.includes("hotel fee")) {
        return "Capgemini covers incidental expenses, if this in the UK, Capgemini covers up to £5 for incidental expenses and £10 over seas ";
    } else if (userInput.includes("accidental hotel fee")) {
        return "Capgemini covers incidental expenses, if this in the UK, Capgemini covers up to £5 for incidental expenses and £10 over seas ";
    } else if (userInput.includes("cover accidental fees")) {
        return "Capgemini covers incidental expenses, if this in the UK, Capgemini covers up to £5 for incidental expenses and £10 over seas ";
    }

    if (userInput.includes("alcohol limit")) {
        return "I'm afraid not as per the policy. A meal must not consist of only alcoholic beverages. Alcohol is allowed when purchased with a meal but should not be excessive.";
    } else if (userInput.includes("whole allowence on alcohol")) {
        return "I'm afraid not as per the policy. A meal must not consist of only alcoholic beverages. Alcohol is allowed when purchased with a meal but should not be excessive.";
    } else if (userInput.includes("full meal expense on alcohol")) {
        return "I'm afraid not as per the policy. A meal must not consist of only alcoholic beverages. Alcohol is allowed when purchased with a meal but should not be excessive.";
    }


    if (userInput.includes("alternative accommodation Limit")) {
        return "The Capgemini Alternative accommodation limit for Barrow-in-Furness is £92 per night.";
    } else if (userInput.includes("barrow-In-Furness")) {
        return "The Capgemini Alternative accommodation limit for Barrow-in-Furness is £92 per night.";
    } else if (userInput.includes("alternative accommodation")) {
        return "The Capgemini Alternative accommodation limit for Barrow-in-Furness is £92 per night.";
    }

    if (userInput.includes("amex fees")) {
        return "Nope,  corporate card “rewards” Membership fees including AMEX membership rewards are not reimbursable expenses";
    } else if (userInput.includes("rewards points fees")) {
        return "Nope,  corporate card “rewards” Membership fees including AMEX membership rewards are not reimbursable expenses";
    } else if (userInput.includes("american express rewards fees")) {
        return "Nope,  corporate card “rewards” Membership fees including AMEX membership rewards are not reimbursable expenses";
    }

    if (userInput.includes("golf club")) {
        return "I'm afraid not, as per the Capgemini policy the Company will not, under any circumstances, pay any costs in respect of clubs or organisations(e.g. sports and golf clubs) irrespective of whether the membership is used to further the Company’sbusiness.";
    } else if (userInput.includes("club fees")) {
        return "I'm afraid not, as per the Capgemini policy the Company will not, under any circumstances, pay any costs in respect of clubs or organisations(e.g. sports and golf clubs) irrespective of whether the membership is used to further the Company’sbusiness.";
    } else if (userInput.includes("club fees")) {
        return "I'm afraid not, as per the Capgemini policy the Company will not, under any circumstances, pay any costs in respect of clubs or organisations(e.g. sports and golf clubs) irrespective of whether the membership is used to further the Company’sbusiness.";
    }

    if (userInput.includes("flowers")) {
        return "Flowers are not allowable through Expenses, other than wreaths for funerals up to £100. Purchases of flowers (maximum £40) should be ordered through GPS.";
    }

    if (userInput.includes("reward meals")) {
        return "Meals as Rewards should be claimed in the Meals section of MyExpenses under the “Team Meals” Category. Make sure VAT receipt is obtained.";
    }

    if (userInput.includes("parking fine")) {
        return "sorry but The Company will not pay parking fines or other traffic offence fines under any circumstances.";
    } else if (userInput.includes("recieved a parking fine")) {
        return "sorry but The Company will not pay parking fines or other traffic offence fines under any circumstances.";
    } else if (userInput.includes("Cover the cost of a parking fine")) {
        return "sorry but The Company will not pay parking fines or other traffic offence fines under any circumstances.";
    }

    if (userInput.includes("tea")) {
        return "You are in luck Capgemini can help! If you are on a client site where you have to pay for tea and coffee, you may claim reasonable costs through expenses without the need for a receipt up to £5 per day ";
    } else if (userInput.includes("coffee")) {
        return "You are in luck Capgemini can help! If you are on a client site where you have to pay for tea and coffee, you may claim reasonable costs through expenses without the need for a receipt up to £5 per day ";
    } else if (userInput.includes("hot drinks not available for free")) {
        return "You are in luck Capgemini can help! If you are on a client site where you have to pay for tea and coffee, you may claim reasonable costs through expenses without the need for a receipt up to £5 per day ";
    } else if (userInput.includes("coffee isnt free")) {
        return "You are in luck Capgemini can help! If you are on a client site where you have to pay for tea and coffee, you may claim reasonable costs through expenses without the need for a receipt up to £5 per day ";
    } else if (userInput.includes("tea isnt free")) {
        return "You are in luck Capgemini can help! If you are on a client site where you have to pay for tea and coffee, you may claim reasonable costs through expenses without the need for a receipt up to £5 per day ";
    }
    // Simple response
    if (userInput == "hello") {
        return "Hello there!";
    } else if (userInput == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

};