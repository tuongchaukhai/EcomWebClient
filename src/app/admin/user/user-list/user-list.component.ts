import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { LazyLoadEvent } from 'primeng/api';

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

  constructor(private userSerivce: UserService){}

  ngOnInit(): void {
    this.load();
  }

  loadLazy(event: LazyLoadEvent) {
    const page = (event.first! / event.rows!) + 1;
    this.userSerivce.getAll(page, this.rows).subscribe(results => {
      this.users = results.data.users;
    });
  }

  load() : void{
    this.userSerivce.getAll(this.page,this.rows).subscribe(
      response => {
        this.users = response.data.users;
        console.log(this.users);
        this.totalRecords = response.data.totalRecords;
      }
    )
  }

  createShow(){

  }

  updateShow(user: any){

  }

  deleteShow(user: any){

  }
}
