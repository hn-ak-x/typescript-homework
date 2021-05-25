import {HabarEnum} from "../enums/habar.enum";

export class Deputat {
    id: number;
    name: string;
    age: number;
    gender: string;
    honestly: number;
    minimum?: number;

    constructor(id: number, name: string, age: number, gender: string, honestly: number, minimum?: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestly = honestly;
        this.minimum = minimum;
    }

    xxx(suma) {
        console.log(this.minimum + suma*this.honestly/100)
    }

    datuHabar (suma: number): any {
        if (this.honestly > 50) {
            console.log('Депутат не бере хабарі')
            return
        }

        if (suma < this.minimum) {
            console.log(HabarEnum.UNSUCCESSFUL)
            return
        }

        if (suma < (this.minimum + this.minimum*this.honestly/100)) {
            console.log(HabarEnum.FLUCTUATES)
            return
        }

        if (suma > (this.minimum + this.minimum*this.honestly/100)) {
            console.log(HabarEnum.SUCCESSFUL)
            return
        }
    }

}