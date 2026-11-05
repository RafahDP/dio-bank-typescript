import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { AccountEx } from './class/AccountEx'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const accountEx: AccountEx =  new AccountEx('Rafah', 300)
companyAccount.deposit(10)
console.log(companyAccount)
console.log(peopleAccount.getBalance())
companyAccount.getLoan(10)
console.log(companyAccount.getBalance())
accountEx.accruedDeposit(25)
console.log(accountEx.getBalance())
peopleAccount.withdraw(1)

console.log(peopleAccount.getBalance())