export const enumValueToString = (enumType: object, value: number) => {
    value = value || 0;
    if (!enumType[value]) {
        throw new Error(`enum value not exists:
         ${JSON.stringify(enumType)} with value:${value}}`);
    }
    return camelCaseToSplitString(enumType[value]);
}
export const camelCaseRegex = /([a-z])([A-Z])/g;

export const camelCaseToSplitString = (str: string) => {
    if (!str) { return str || ''; }
    return str.toString().replace(camelCaseRegex, '$1 $2');
}