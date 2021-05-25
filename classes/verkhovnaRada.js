"use strict";
exports.__esModule = true;
exports.VerkhovnaRada = void 0;
var VerkhovnaRada = /** @class */ (function () {
    function VerkhovnaRada(members, year) {
        this.parties = members;
        this.year = year;
    }
    VerkhovnaRada.prototype.deletePoliticalParty = function (nameOfPoliticalParty) {
        for (var _i = 0, _a = this.parties; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.name === nameOfPoliticalParty)
                this.parties.splice(this.parties.indexOf(i), 1);
        }
    };
    VerkhovnaRada.prototype.addPoliticalParty = function (politicalParty) {
        this.parties.push(politicalParty);
    };
    VerkhovnaRada.prototype.showAllPoliticalParties = function () {
        for (var _i = 0, _a = this.parties; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
        }
    };
    VerkhovnaRada.prototype.showThisPoliticalParty = function (nameOfPoliticalParty) {
        for (var _i = 0, _a = this.parties; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.name === nameOfPoliticalParty)
                console.log(i);
        }
    };
    VerkhovnaRada.prototype.showMostHabarnukInRada = function () {
        for (var _i = 0, _a = this.parties; _i < _a.length; _i++) {
            var i = _a[_i];
            var mostHabarnuk = i.members.reduce(function (pre, cur) { return pre.honestly < cur.honestly ? pre : cur; });
            console.log(mostHabarnuk);
        }
    };
    return VerkhovnaRada;
}());
exports.VerkhovnaRada = VerkhovnaRada;
