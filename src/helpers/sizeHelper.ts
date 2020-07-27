import spacingInline from '../tokens/spacingInline';
import { SizeType } from '../types/SizeType';

export const getSize = (size: SizeType) => {
  switch (size) {
    case 'quarck':
      return spacingInline['$spacing-inline-quarck'];
    case 'nano':
      return spacingInline['$spacing-inline-nano'];
    case 'xxxs':
      return spacingInline['$spacing-inline-xxxs'];
    case 'xxs':
      return spacingInline['$spacing-inline-xxs'];
    case 'xs':
      return spacingInline['$spacing-inline-xs'];
    case 'sm':
      return spacingInline['$spacing-inline-sm'];
    case 'md':
      return spacingInline['$spacing-inline-md'];
    case 'xl':
      return spacingInline['$spacing-inline-xl'];
    case 'xxl':
      return spacingInline['$spacing-inline-xxl'];
    default:
      return spacingInline['$spacing-inline-md'];
  }
};
