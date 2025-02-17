import { UserType } from './UserType';
import { CompanyType } from './CompanyType';

export type CardType = {
  id: string;
  company: CompanyType;
  responsible: UserType;
  status: string;
  title: string;
  datetime: Date;
  description: string;
  starred: boolean;
  active: boolean;
  new: boolean;
};
