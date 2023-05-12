import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-reusable-admin-table-list',
  templateUrl: './reusable-admin-table-list.component.html',
  styleUrls: ['./reusable-admin-table-list.component.scss']
})
export class ReusableAdminTableListComponent {
  @Input() models: any[] = [];
  @Input() rows: number = 0;
  @Input() totalRecords: number = 0;
  @Input() title: string = '';
  @Input() headArray: any[] = [];
  @Input() splitButtonMenu: MenuItem[] = [];
  // @Input() visibleDeleteDialog: boolean = false;
  visibleDeleteDialog: boolean = false;
  selectedModel: any;
  // @Input() selectedModel: any;
  @Output() create: EventEmitter<any> = new EventEmitter<any>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() lazyLoad: EventEmitter<LazyLoadEvent> = new EventEmitter<LazyLoadEvent>();


  createShow(): void {
    this.create.emit();
  }

  updateShow(model: any): void {
    this.update.emit(model);
  }

  deleteShow(model: any): void {
    this.selectedModel = model;
    this.visibleDeleteDialog = true;
  }

  deleteModel(): void {
    this.visibleDeleteDialog = false;
    this.delete.emit(this.selectedModel);
  }
}
