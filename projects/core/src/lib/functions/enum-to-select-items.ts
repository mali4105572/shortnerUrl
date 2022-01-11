import { camelCaseToSplitString } from './enum-value-to-string';
;

// export const enumToSelectItems = (enumType: object): SelectItem => {
export const enumToSelectItems = (enumType: object): any => {
    return Object.entries(enumType).slice(0, Object.keys(enumType).length / 2)
        .map(([key, val]) => ({
            label: camelCaseToSplitString(val),
            value: key
        }))
        .map(item => ({
            ...item,
            value: isNaN(+item.value) ? item.value : +item.value
        })) || [];
}