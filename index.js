const route = require('./Route.js');

var count =100;
var queue = 'import_test';
var handleData = {
    "App_Method":"sender",
    "data":{
        "dataCount":count,
        "userId":25056,
        "queue_name":queue,
        "cursor":0,
        "data":"Harshit send msg"
    }
};
var json = JSON.stringify(handleData);
var person1 = new route(json);

console.log(person1);



