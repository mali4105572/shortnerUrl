import { PhKeyValuePair } from './ph-key-value-pair';
import { FilterInputType } from './filter-input-type';
import { TemplateRef } from '@angular/core';

export interface PhColumn {
    header: string;
    name: string;
    type: string;
    sortable: boolean;
    columnOptions: PhKeyValuePair[];
    tmpl: TemplateRef<any>;
    headerTmpl: TemplateRef<any>;
    tooltip: string;
    width: number;
}