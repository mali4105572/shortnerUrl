import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConnectionsService {

  getClientIp$(): Observable<string> {
    const pc = new RTCPeerConnection();
    pc.createDataChannel('');
    pc.createOffer(pc.setLocalDescription.bind(pc));
    return Observable.create((observer) => {
      pc.onicecandidate = ({ candidate: { candidate } }) => {
        if (!candidate) { return ''; }
        const results = /(([0-9]{1,3})\.){3}[0-9]{1,3}/.exec(candidate);
        if (!(!!results && !(!!results.length))) {
          observer.next(null)
        }
        else {
          observer.complete();
        }
      }
    });
  }
}
