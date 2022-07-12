import {SubCategory} from './sub-category';

export interface Category {
    title: string;
    icon: string;
    subCategories: SubCategory[];
}
