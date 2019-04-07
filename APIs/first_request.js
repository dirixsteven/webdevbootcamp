const rp = require("request-promise");
/*
request("https://api.magicthegathering.io/v1/sets/LEA", function(error, response, body) {
    if (!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData["set"]["name"]);
    }
})
*/
rp("https://jsonplaceholder.typicode.com/users/1")
    .then((body) => {
        const parsedData = JSON.parse(body);
        
        console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
    })
    .catch((err) => {
        console.log('Error!', err);
    });