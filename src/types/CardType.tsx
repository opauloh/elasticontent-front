import { UserType } from './UserType';

export type CardType = {
  id: string;
  company: string;
  responsible: UserType;
  status: string;
  title: string;
  datetime: Date;
  description: string;
  starred: boolean;
  active: boolean;
  new: boolean;
};
