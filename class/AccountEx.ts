import { DioAccount } from "./DioAccount";

export class AccountEx extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }
    accruedDeposit(depositAmount: number) {
        this.deposit(depositAmount+10)

        
    }
}