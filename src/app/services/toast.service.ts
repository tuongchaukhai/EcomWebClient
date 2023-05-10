import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  private toastMessages: Array<any> = [];
  constructor(private messageService: MessageService) {

    const messages = JSON.parse(localStorage.getItem('toastMessages')!);
    if (messages) {
      this.toastMessages = messages;
    }
  }

  showSuccess(message: string, title = 'success') {
    const toast = { severity: 'success', summary: title, detail: message, timestamp: new Date().toISOString() }
    this.messageService.add(toast);
    this.toastMessages.push(toast);
    
    localStorage.setItem('toastMessages', JSON.stringify(this.toastMessages))
  }

  showInfo(message: string, title = 'info') {
    const toast = { severity: 'info', summary: title, detail: message, timestamp: new Date().toISOString()  }
    this.messageService.add(toast);
    this.toastMessages.push(toast);
    localStorage.setItem('toastMessages', JSON.stringify(this.toastMessages))
  }

  showWarn(message: string, title = 'warm') {
    const toast = { severity: 'warn', summary: title, detail: message, timestamp: new Date().toISOString()  };
    this.messageService.add(toast);
    this.toastMessages.push(toast);
    localStorage.setItem('toastMessages', JSON.stringify(this.toastMessages))
  }

  showError(message: string, title = 'error') {
    const toast = { severity: 'error', summary: title, detail: message, timestamp: new Date().toISOString()  };
    this.messageService.add(toast);
    this.toastMessages.push(toast);
    localStorage.setItem('toastMessages', JSON.stringify(this.toastMessages))
  }

  getToastMessages() {
    return this.toastMessages;
  }

  clearToastMessages() {
    this.toastMessages = [];
    localStorage.removeItem('toastMessages');
  }
} 
