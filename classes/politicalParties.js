"use strict";
exports.__esModule = true;
exports.PoliticalParty = void 0;
var PoliticalParty = /** @class */ (function () {
    function PoliticalParty(name, mainDeputat, members) {
        this.name = name;
        this.mainDeputat = mainDeputat;
        this.members = members;
    }
    PoliticalParty.prototype.addDeputatToPoliticalParty = function (deputat) {
        this.members.push(deputat);
    };
    PoliticalParty.prototype.deleteDeputatFromPoliticalParty = function (deputatId) {
        for (var _i = 0, _a = this.members; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.id === deputatId)
                this.members.splice(this.members.indexOf(i), 1);
        }
    };
    PoliticalParty.prototype.showAllDeputats = function () {
        for (var _i = 0, _a = this.members; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
        }
    };
    PoliticalParty.prototype.showAllHabarnukiv = function () {
        for (var _i = 0, _a = this.members; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.honestly < 50)
                console.log(i);
        }
    };
    PoliticalParty.prototype.showMostHabarnuk = function () {
        var mostHabarnuk = this.members.reduce(function (pre, cur) { return pre.honestly < cur.honestly ? pre : cur; });
        console.log(mostHabarnuk);
    };
    return PoliticalParty;
}());
exports.PoliticalParty = PoliticalParty;
