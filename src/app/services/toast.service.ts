import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  constructor(private messageService: MessageService) { debugger}

  showSuccess(message: string, title = 'success') {
    
    this.messageService.add({ severity: 'success', summary: title, detail: message });
  }

  showInfo(message: string, title = 'info') {
    this.messageService.add({ severity: 'info', summary: title, detail: message });
  }

  showWarn(message: string, title = 'warm') {
    this.messageService.add({ severity: 'warn', summary: title, detail: message });
  }

  showError(message: string, title = 'error') {
    this.messageService.add({ severity: 'error', summary: title, detail: message });
  }
}
