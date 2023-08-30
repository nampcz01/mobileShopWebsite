export interface IAccount {
  id: number;
  userId: number;
  name: string;
  phoneNumber: string;
  address: string;
  balance: number;
}
export interface IAccountAdd {
  userId: number;
  name: string;
  phoneNumber: string;
  address: string;
  balance: number;
}