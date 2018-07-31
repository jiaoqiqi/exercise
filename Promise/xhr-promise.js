var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getURL(URL) {
    return new Promise(function (resolve, reject) {
        const req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText)
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    })
}

var URL = "http://httpbin.org/get";
getURL(URL).then(function onFulfilled(value) {
    console.log(value);
}).catch(function onRejected(error) {
    console.error(error);
});

Promise.resolve(42).then(function (value) {
    console.log(value);
})
