import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { UserCreateComponent } from '../user-create/user-create.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  page: number = 1;
  rows: number = 5;
  totalRecords: number = 0;
  visibleDeleteDialog: boolean = false;
  selectedUser: any;
  constructor(private userSerivce: UserService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.load();
  }

  loadLazy(event: LazyLoadEvent) {
    const page = (event.first! / event.rows!) + 1;
    this.userSerivce.getAll(page, this.rows).subscribe(results => {
      this.users = results.data.users;
    });
  }

  load(): void {
    this.userSerivce.getAll(this.page, this.rows).subscribe(
      response => {
        this.users = response.data.users;
        this.totalRecords = response.data.totalRecords;
      }
    )
  }

  createShow() {
    const ref = this.dialogService.open(UserCreateComponent, {
      width: '20%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000
    });

    ref.onClose.subscribe(() => this.load());

  }

  updateShow(user: any) {

  }

  deleteShow(user: any) {
    this.visibleDeleteDialog = true;
    this.selectedUser = user;
  }

  deleteUser(user: any) {
    this.visibleDeleteDialog = false;
    this.userSerivce.delete(user.userId).subscribe(response => {
      if (response) {
        alert(response.message);
        this.load();
      }
    });
  }
}
