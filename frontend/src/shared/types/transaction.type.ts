export interface ITransaction {
  id: number;
  fromId: number;
  toId: number;
  dateTime: string;
  amount: number;
}
export interface IRecharge{
    userId: number,
    amount: number
}