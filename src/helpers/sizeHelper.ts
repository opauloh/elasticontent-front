import spacing from '../tokens/spacing';
import { SizeType } from '../components/types/SizeType';

export const getSize = (size: SizeType) => {
    switch (size) {
        case 'xxs':
            return spacing[`$spacing-xxs`];
        case 'xs':
            return spacing[`$spacing-xs`];
        case 'sm':
            return spacing[`$spacing-sm`];
        case 'md':
            return spacing[`$spacing-md`];
        case 'lg':
            return spacing[`$spacing-lg`];
        case 'xl':
            return spacing[`$spacing-xl`];
        default:
            return spacing[`$spacing-md`];
    }
};
