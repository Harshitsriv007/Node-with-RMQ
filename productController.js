const RMQQueue = require('./sendQueue.js');

module.exports = function (handleData) {
   
    var jsonObj = JSON.parse(handleData);
    console.log(jsonObj['data']['cursor']);
    if(jsonObj['data']['cursor'] < jsonObj['data']['dataCount'])
    {
        var cursor =parseInt(jsonObj['data']['cursor']);
        jsonObj['data']['cursor'] = cursor+1;
        var json = JSON.stringify(jsonObj);
        var product = new RMQQueue(json);
        return true;
    }
    else
    {
        return [{'success':true,'data':"Imported Successfully!"}];
    }
    console.log(handleData);
    return true;
}