{
    var TOP = 'Top';
    var RIGHT = 'Right';
    var Directions = void 0;
    (function (Directions) {
        Directions[Directions["TOP"] = 0] = "TOP";
        Directions[Directions["RIGHT"] = 1] = "RIGHT";
        Directions[Directions["LEFT"] = 2] = "LEFT";
        Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
    })(Directions || (Directions = {}));
    var TimingFunc = void 0;
    (function (TimingFunc) {
        TimingFunc["EASE"] = "ease";
        TimingFunc["EASE_IN"] = "ease-in";
        TimingFunc["LINEAR"] = "linear";
        // EASE_IN = `${ease}-in`,
        // ERROR = 5,
    })(TimingFunc || (TimingFunc = {}));
    function frame(elem, dir, tFunc) {
        if (dir === Directions.RIGHT) {
            console.log(dir);
            console.log(tFunc);
        }
    }
    frame('id', Directions.RIGHT, TimingFunc.EASE);
}
