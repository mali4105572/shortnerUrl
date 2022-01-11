import { LogLevel } from './enums';

export class HttpRequestModel {
    component?: string;
    logMessage?: string;
    url: string;
    action: string;
    params: object;
    body: any;
    logLevel?: LogLevel;
    skipCatchErrors?: boolean;
    isText?: boolean;

    constructor(copy?: any) {
        if (copy) {
            this.logMessage = copy.logMessage;
            this.url = copy.url;
            this.action = copy.action;
            this.params = copy.params;
            this.body = copy.body;
            this.logLevel = copy.logLevel;
            this.skipCatchErrors = copy.skipCatchErrors;
            this.isText = copy.isText;
        }
    }

    // get queryParams() {
    //     const result = Object.entries(this.params)
    //         .map(([key, value]) => `${key}=${value}`)
    //         .reduce((state, next) => `${state}&${next}`, '');
    //     const [, ...sliced] = result.split('');
    //     return /&/.test(result) ? `?${sliced.join('')}` : '';
    // }
    get fullUrl(): string {
        return `${this.url}${this.action}`;
    }
}