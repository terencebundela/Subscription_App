import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'subscription-app';
  userList: any[] = [];

  ngOnInit() {
    this.loadStoredSubscriptions();
  }

  handleSubscriptionSaved(subscriptionData: any) {
    this.userList.push(subscriptionData);
    this.saveUserListToLocalStorage();
  }

  private loadStoredSubscriptions() {
    const storedUserList = JSON.parse(localStorage.getItem('userList') || '[]');
    this.userList = storedUserList;
  }

  private saveUserListToLocalStorage() {
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }
}
