//console.log(module);

// module.exports = "Hello World!";
exports.getDate =
function getData() {
    const today = new Date();
    // var currentDay = today.getDay();
    // var day = "";
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    //var today = new Date();

    //console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    //console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    return today.toLocaleDateString("en-US", options);

}


exports.getDay =
function getDay() {
    const today = new Date();
    // var currentDay = today.getDay();
    // var day = "";
    const options = {
        weekday: 'long'
    };
    //var today = new Date();

    //console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    //console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    return today.toLocaleDateString("en-US", options);

}