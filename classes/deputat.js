"use strict";
exports.__esModule = true;
exports.Deputat = void 0;
var habar_enum_1 = require("../enums/habar.enum");
var Deputat = /** @class */ (function () {
    function Deputat(id, name, age, gender, honestly, minimum) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestly = honestly;
        this.minimum = minimum;
    }
    Deputat.prototype.xxx = function (suma) {
        console.log(this.minimum + suma * this.honestly / 100);
    };
    Deputat.prototype.datuHabar = function (suma) {
        if (this.honestly > 50) {
            console.log('Депутат не бере хабарі');
            return;
        }
        if (suma < this.minimum) {
            console.log(habar_enum_1.HabarEnum.UNSUCCESSFUL);
            return;
        }
        if (suma < (this.minimum + this.minimum * this.honestly / 100)) {
            console.log(habar_enum_1.HabarEnum.FLUCTUATES);
            return;
        }
        if (suma > (this.minimum + this.minimum * this.honestly / 100)) {
            console.log(habar_enum_1.HabarEnum.SUCCESSFUL);
            return;
        }
    };
    return Deputat;
}());
exports.Deputat = Deputat;
