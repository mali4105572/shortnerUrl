import { MenuItem } from 'primeng/primeng';

export interface PhMenuItem extends MenuItem {

    shortText?: string;
    imgSrc?: string;
    tooltip?: string;
    rectangleColor?: string;
    rectangleClickCommand?: (event?: any) => void;
}