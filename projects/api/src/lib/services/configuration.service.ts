import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ipConfig, settingsConfig } from 'types';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  ips: ipConfig;
  settingConfig: settingsConfig;
  constructor(
    private http: HttpClient) {

  }

  initConfiguration(path): Promise<any> {
    return combineLatest(

      this.http.get<ipConfig>(`${path}/ipConfig.json`),
      this.http.get<settingsConfig>(`${path}/settingsConfig.json`)
    ).pipe(
      tap(response => [this.ips, this.settingConfig] = response),
    ).toPromise();
  }
}
