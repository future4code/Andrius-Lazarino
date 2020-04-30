import {Industry} from "./Industry";
import {Client} from "./Client";

export class IndustrialClient extends Industry implements Client{
    constructor(
        machinesQuantity: number,
        cep: string,
        public consumedEnergy: number,
        public  name: string,
        public  registrationNumber: number,
        private insdustryNumber: string
    ){
        super(machinesQuantity,cep)
    }

    public calculateBill(): number {
        return ((this.consumedEnergy * 0.45) + (this.machinesQuantity * 100));
    }
    public getConsumedEnergy():number{
        return this.consumedEnergy
    }
    public getName():string{
        return this.name
    }
    public getRegistrationNumber():number{
        return this.consumedEnergy
    }
    public getIndustryNumber(): string {
        return this.insdustryNumber
    }
}