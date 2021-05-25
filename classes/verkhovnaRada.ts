import {PoliticalParty} from "./politicalParties";

export class VerkhovnaRada {
    parties: PoliticalParty[];
    year: number;

    constructor(members: PoliticalParty[], year: number) {
        this.parties = members;
        this.year = year;
    }

    deletePoliticalParty (nameOfPoliticalParty: string): void {
        for (let i of this.parties) {
            if(i.name === nameOfPoliticalParty) this.parties.splice(this.parties.indexOf(i), 1)
        }
    }

    addPoliticalParty (politicalParty: PoliticalParty): void {
        this.parties.push(politicalParty)
    }

    showAllPoliticalParties(): void {
        for (let i of this.parties) console.log(i)
    }

    showThisPoliticalParty (nameOfPoliticalParty: string): void {
        for (let i of this.parties) {
            if(i.name === nameOfPoliticalParty) console.log(i)
        }
    }

    showMostHabarnukInRada(): void {
        for (let i of this.parties) {
            const mostHabarnuk = i.members.reduce(
                (pre, cur) => pre.honestly < cur.honestly ? pre : cur)
            console.log(mostHabarnuk)
        }
    }
}
