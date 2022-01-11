import { Statement } from '@angular/compiler';

export const toPascalCaseRec = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(val => toPascalCaseRec(val))
    }
    return Object.entries(obj).reduce((state, [key, val]) => ({
        ...state,
        [toPascalCase(key)]: typeof (val) === 'object' ?
            toPascalCaseRec(val)
            : val
    }))
}

export const toPascalCase = (str: string) => {
    if (typeof (str) !== 'string') { return str; }
    return str.split('').map((ch, idx) => idx === 0 ? ch.toUpperCase() : ch).join();
}