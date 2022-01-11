import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayDialog: boolean;
       title = 'PeerHanailonClient';

  constructor() { }
 


}



//   constructor() {
//     //Error.stackTraceLimit = Infinity;
//     console.table(new Error().stack
//       .split(/\s+at\s+/)
//       .map(line => ({ row: line.trim() })))
//   }

