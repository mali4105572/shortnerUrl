import { Component, OnInit, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'lib-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  time = '00:00';
  isDestroy = false;
  constructor(private zone: NgZone, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.cd.detach();
    this.zone.runOutsideAngular(() => this.setTime());
  }

  setTime() {
    if (this.isDestroy) { return; }
    const now = new Date();
    this.time = `${now.getHours()}:${this.formatNum(now.getMinutes())}`;
    this.cd.detectChanges();
    setTimeout(this.setTime.bind(this), 6000);
  }

  formatNum(i) {
    return i < 10 ? `0${i}` : i;
  }

  ngOnDestroy(): void {
    this.isDestroy = true;
  }

}

