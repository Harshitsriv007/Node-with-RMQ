var amqp = require('amqplib/callback_api');

module.exports = function (handleData,error=false ) {
    if (error) {
        throw error;
    }
    amqp.connect('amqp://localhost', function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }
                var jsonObj = JSON.parse(handleData);
                
                var queue = jsonObj['data']['queue_name'];

                var json = JSON.stringify(jsonObj);

                channel.assertQueue(queue, {
                    durable: false
                });
                channel.sendToQueue(queue,Buffer.from(json));
        });
        setTimeout(function() {
            connection.close();
            process.exit(0);
        }, 500);
    });
    return true;
}



//================================================

// var amqp = require('amqplib/callback_api');

// amqp.connect('amqp://localhost', function(error0, connection) {
//     if (error0) {
//         throw error0;
//     }
//     connection.createChannel(function(error1, channel) {
//         if (error1) {
//             throw error1;
//         }

//         var queue = 'import_test';
//         var msg = 'Hello World!';
        
//         var count = 100;
//         var handleData = {
//             "App Method":"sender",
//             "data":{
//                 "dataCount":count,
//                 "userId":25056,
//                 "queue_name":queue,
//                 "cursor":0
//             }
//         };
//             console.log(handleData['data']['dataCount']);
//             channel.assertQueue(queue, {
//                 durable: false
//             });
//             channel.sendToQueue(queue,Buffer.from(handleData));
//     });
//     setTimeout(function() {
//         connection.close();
//         process.exit(0);
//     }, 500);
// });



