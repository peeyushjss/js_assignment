/* jshint esversion: 6, strict: true */

const staticData = require('./clicks.json');
const moment = require('moment');

let ipData = {};
let ipLessTenClickArray = [];
let filterData = [];
let resultSet = [];

/* Method to convert a data into unix timestamp */
// let convertToTimestamp = (strDate) => {
//     let datum = Date.parse(strDate);
//     return datum / 1000;
// }

// /* Method to sort a json object based on property */
// function GetSortOrder(prop) {
//     return function (a, b) {
//         if (a[prop] > b[prop]) {
//             return 1;
//         } else if (a[prop] < b[prop]) {
//             return -1;
//         }
//         return 0;
//     }
// }

staticData.forEach(element => {
    if (ipData[element.ip]) {
        let count = ipData[element.ip];
        ipData[element.ip] = count + 1;
    } else {
        ipData[element.ip] = 1;
    }
});

for (let i in ipData) {
    if (ipData[i] < 10) {
        ipLessTenClickArray.push(i);
    }
}

for (let a = 0; a < staticData.length; a++) {
    for (let b = 0; b < ipLessTenClickArray.length; b++) {
        if (staticData[a].ip === ipLessTenClickArray[b]) {
            filterData.push(staticData[a]);
        }
    }
}

// let filterDataOnIPBasis = filterData.sort(GetSortOrder("ip"));

/* You have to remove array declare using x. Variable x will replace by filterData. X == filterdata */

let x = [
    { ip: '11.11.11.11', timestamp: '3/11/2016 02:12:32', amount: 6.5 },
    { ip: '11.11.11.11', timestamp: '3/11/2016 02:13:11', amount: 7.25 },
    { ip: '11.11.11.11', timestamp: '3/11/2016 06:45:01', amount: 12 },
    { ip: '11.11.11.11', timestamp: '3/11/2016 06:59:59', amount: 11.75 },
    { ip: '11.11.11.11', timestamp: '3/11/2016 07:02:54', amount: 4.5 },
    { ip: '33.33.33.33', timestamp: '3/11/2016 07:02:54', amount: 15.75 },
    { ip: '44.44.44.44', timestamp: '3/11/2016 02:13:54', amount: 8.75 },
    { ip: '44.44.44.44', timestamp: '3/11/2016 06:32:42', amount: 5 },
    { ip: '44.44.44.44', timestamp: '3/11/2016 13:02:55', amount: 8 },
    { ip: '66.66.66.66', timestamp: '3/11/2016 07:02:54', amount: 14.25 }
];

let finalData = [];


/* You have to correct this code or write your own code. */
for (let a = 1; a < x.length; a++) {
    if (x[a].ip != x[a - 1].ip) {
        finalData.push(x[a]);
    } else {
        if (x[a - 1].timestamp.split(" ")[1].split(":")[0] == x[a].timestamp.split(" ")[1].split(":")[0]) {
            x[a - 1].amount < x[a].amount ? finalData.push(x[a]) : finalData.push(x[a - 1]);
        } else {
            finalData.push(x[a - 1]);
        }
    }
}

console.log(" xxxxxxxxxxxxxxxxxxxxx ");
console.log(finalData);