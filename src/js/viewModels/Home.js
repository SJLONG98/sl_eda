/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */



define(['../accUtils', 'axios', 'require', 'exports', 'knockout', 'ojs/ojbootstrap', 'ojs/ojknockout',
        'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojlabel', 'ojs/ojcollapsible', 'ojs/ojformlayout'
    ],
    function(accUtils, axios, require, exports, ko, Bootstrap) {

        function test() {
            var config = {
                method: 'get',
                url: 'https://api.rtt.io/api/v1/json/search/MIA',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                    'Authorization': 'Basic cnR0YXBpX3NhbWpvc2VwaDoxN2Y4M2U0ZWY4NTUwZTliN2RhZGM2YjY4ZDc2ZDkzYzkzNTgyOTk5'
                }
            };

            axios(config)
                .then(function(response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        test();
    });

// define(function(require) {
//     const realtimeTrains = require('realtime-trains-scraper');

//     // Fetching Data using the Station Code
//     realtimeTrains.getTrains("KGX");

//     // Fetching Data using the Station Name. However, this is not recommended as the Station Code is more reliable.
//     realtimeTrains.getTrains("London King's Cross");
// });