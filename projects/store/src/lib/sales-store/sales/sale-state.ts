import {  PastDays, TopSel, TopUniqueSel } from 'types';

export class SalesState {
    sales:boolean;
    isAdded:boolean;
    topSel: TopSel[]=[];
    topUniqueSel: TopUniqueSel[]=[];
    pastDays: PastDays[]=[];
} 