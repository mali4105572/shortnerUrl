export const fileNameFromfullPath = (fullPath: string): string => {
    return fullPath && fullPath.replace(/^.*[\\\/]/, '') || '';
}