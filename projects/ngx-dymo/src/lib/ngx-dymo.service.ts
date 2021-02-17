import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxDymoService {

  isInitialed: boolean = false;

  constructor() {
  }

  async init() {
    const prom = await new Promise(async(res, rej) => {
      
      await dymo.label.framework.init(() => {
        this.isInitialed = true
        res('inited')
      })
    })
    return prom
  }

  async getPrinters(): Promise<dymo.label.framework.PrinterInfo[]>  {
    if (this.isInitialed) {
      
      return dymo.label.framework.getPrintersAsync();
    }
    return Promise.resolve([])
  }
}
