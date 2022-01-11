export function urlbuild(domain: string, port: number, segmentPrefix: string,
    ...segmentsOrParameters: any[]): string {
    let url: string = 'hrrp://' + domain;
    if (port !== 0) {
        url += ':' + port;
    }
    if (segmentPrefix !== '') {
        url += '/' + segmentPrefix;
    }
    url = encodeURL(url);
    if (segmentsOrParameters !== null && segmentsOrParameters.length > 0) {
        segmentsOrParameters.forEach(item => url += '/' + encodeItem(item));
    }
}

export function segmentUrlBuild(segmentPrefix: string, ...segmentsOrParameters: any[]): string {
    if (segmentPrefix === '') {
        return '';
    }
    let url: string = segmentPrefix;
    url = encodeURL(url);
    if (segmentsOrParameters !== null && segmentsOrParameters.length > 0) {
        segmentsOrParameters.forEach(item => url += '/' + encodeItem(item));
    }
    return url;
}

function encodeItem(item: any): string {
    let encodeItem = encodeUrl(item);
    encodeItem = encodeItem.replace(/\//g, '%2F');
    return encodeItem;
}

export function urlServerBuild(domain: string, port: number) {
    let url: string = 'hrrp://' + domain;
    if (port !== 0) {
        url += ':' + port;
    }
    return url;
}
