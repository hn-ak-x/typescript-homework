import {Deputat} from "./deputat";

export class PoliticalParty {
    name: string;
    mainDeputat: Deputat;
    members: Deputat[];

    constructor(name: string, mainDeputat: Deputat, members: Deputat[]) {
        this.name = name;
        this.mainDeputat = mainDeputat;
        this.members = members;
    }

    addDeputatToPoliticalParty(deputat: Deputat): void {
        this.members.push(deputat)
    }

    deleteDeputatFromPoliticalParty(deputatId: number): void {
        for (let i of this.members) {
            if (i.id === deputatId) this.members.splice(this.members.indexOf(i), 1)
        }
    }

    showAllDeputats(): void {
        for (let i of this.members) console.log(i)
    }

    showAllHabarnukiv(): void {
        for (let i of this.members) if (i.honestly < 50) console.log(i)
    }

    showMostHabarnuk(): void {
        const mostHabarnuk = this.members.reduce(
            (pre, cur) => pre.honestly < cur.honestly ? pre : cur)
        console.log(mostHabarnuk)
    }
}
