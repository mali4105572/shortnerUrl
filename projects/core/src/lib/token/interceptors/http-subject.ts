import { BehaviorSubject } from 'rxjs';

export class HttpSubject {
    subject$: BehaviorSubject<any>;
    requested: boolean;

    static _subjectFactory() {
        return {
            subject$: new BehaviorSubject<any>(null),
            requested: false
        }
    }
}