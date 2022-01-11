export const stringIsDate = (value: any): boolean => {
    if (!/[0-9]{1,2}[/.-][0-9]{1,2}[/.-][1-9][0-9]{1,3}/.test(value)
        && !/[1-9][0-9]{1,3}[/.-][0-9]{1,2}[/.-][0-9]{1,2}/.test(value)) {
        return false;
    }
    return !isNaN(Date.parse(value));
}