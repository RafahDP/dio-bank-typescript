export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  public deposit = (depositAmount: number): void => {
    if (this.validateStatus()) {
      if (depositAmount <= 0) {
        throw new Error('deposito não pode ser menor que 0')
      }
      this.balance = this.balance + depositAmount
    }
  }

  withdraw = (withdrawAmount: number): void => {
    if (this.validateStatus()) {
      if (withdrawAmount <= 0 || withdrawAmount >= this.balance) {
        throw new Error('Saque não pode ser feito')
      }
      this.balance = this.balance - withdrawAmount
    }
  }

  public getBalance = (): number => {
    return this.balance
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
  getAccountStatus = (): boolean => {
    return this.status
  }
 
}
