export const jsonIsEmpty = (json: any): boolean => {
    try {
        const obj = JSON.parse(json);
        return !(!!Object.keys(obj).length);
    }
    catch{

    }
    return false;
}