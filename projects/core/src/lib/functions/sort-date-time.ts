export const sortDateTime = (date1: string, date2: string) => {
    return Date.parse(date1) - Date.parse(date2);
}