{
    var fetchData = function (url, method) {
        console.log(method);
    };
    var reqOptions1 = {
        url: 'https://someurl.com',
        method: 'false-GET',
    };
    var reqOptions2 = {
        url: 'https://someurl.com',
        method: 'false-GET',
    };
    var reqOptions3 = {
        url: 'https://someurl.com',
        method: 'false-GET',
    };
    var reqOptions4 = {
        url: 'https://someurl.com',
        method: 'false-GET',
    };
    var str = 'str';
    var method = 'GET';
    fetchData('qqq', 'GET');
    fetchData(reqOptions1.url, method);
    fetchData(reqOptions1.url, reqOptions1.method);
    fetchData(reqOptions1.url, reqOptions2.method);
    fetchData(reqOptions1.url, reqOptions1.method);
    var box = document.querySelector('.box');
    var input = document.querySelector('input');
    var someNum = input.value;
    console.log(someNum.toFixed());
    // box.classList.add('');
}
