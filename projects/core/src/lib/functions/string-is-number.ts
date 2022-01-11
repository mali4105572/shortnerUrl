export const stringIsNumber = (value: string | number): boolean => {
    return !isNaN(+value)
}