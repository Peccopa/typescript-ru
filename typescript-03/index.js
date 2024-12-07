// let msg: 'Hello' = 'Hello';
// msg = 'Hello';
function createAnimation(id, animName, timingFunc, duration, iterCount) {
    if (timingFunc === void 0) { timingFunc = 'ease'; }
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    var elem = { style: { animation: '' } };
    if (elem) {
        console.log("".concat(animName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterCount));
        elem.style.animation = "".concat(animName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterCount);
    }
    else {
        console.log('Elem is ' + elem);
    }
}
createAnimation('id', 'fade', 'ease-in-out', 4, 100);
