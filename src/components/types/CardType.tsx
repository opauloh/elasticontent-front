import { UserType } from './UserType';

export type CardType = {
  id: string,
  company: string,
  responsible: UserType,
  status: string,
  description: string
};