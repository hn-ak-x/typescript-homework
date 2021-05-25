import {Deputat} from "./classes/deputat";
import {PoliticalParty} from "./classes/politicalParties";
import {VerkhovnaRada} from "./classes/verkhovnaRada";
import {PartiesEnum} from "./enums/parties.enum";

const dep1 = new Deputat(0,'Anton', 32, 'male', 75);
const dep2 = new Deputat(1, 'Petro', 45, 'male', 30, 2000);
const dep3 = new Deputat(2, 'Svitlana', 29, 'female', 45, 1000);
const dep4 = new Deputat(3, 'Andriy', 54, 'male', 63);
const dep5 = new Deputat(4, 'Kateryna', 44, 'female', 20, 3000);
const dep6 = new Deputat(5, 'Ostap', 23, 'male', 80);
const dep7 = new Deputat(6, 'Maria', 34, 'female', 70);
const dep8 = new Deputat(7, 'Stepan', 61, 'male', 10, 5000);
const dep9 = new Deputat(8, 'Arsen', 26, 'male', 52);

const part1 = new PoliticalParty(PartiesEnum.SVOBODA, dep1, [dep1, dep2, dep9]);
const part2 = new PoliticalParty(PartiesEnum.SLUGA, dep8, [dep8, dep3, dep5]);
const part3 = new PoliticalParty(PartiesEnum.SAMOPOMICH, dep6, [dep6, dep4, dep7]);

const rada = new VerkhovnaRada([part2, part3], 2021);