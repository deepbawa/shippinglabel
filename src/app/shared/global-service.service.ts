import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Console } from '@angular/core/src/console';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  globalData = {};
  errorMsg;
  private subject = new Subject<any>();
  saveFormData(message?: string, ind?: number) {
    this.errorMsg = false;
    this.subject.next({ text: message, index: ind });
  }

  clearMessages() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  setData(data?, val?) {
    this.globalData[val] = data;
  }
  getData() {
    return this.globalData;
  }
  setErrorMsg(msg) {
    this.errorMsg = msg;
  }
  getErrorMsg() {
    return this.errorMsg;
  }
}
