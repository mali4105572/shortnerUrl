export const stringIsJson = (json: any): boolean => {
    try {
        const obj = JSON.parse(json);
        return !!obj && typeof (obj) === 'object';
    }
    catch{

    }
    return false
}