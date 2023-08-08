import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() userList: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();

  editUser(user: any) {
    this.edit.emit(user);
    console.log('Edit User:', user);
  }

  removeUser(user: any) {
    this.remove.emit(user);
  }
}
