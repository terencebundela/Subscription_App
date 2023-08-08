import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  @Output() subscriptionSaved = new EventEmitter<any>();

  subscriptionName: string = '';
  gridDetail: any[] = [];

  ngOnInit() {
    this.loadStoredSubscriptions();
  }

  addRow() {
    this.gridDetail.push({
      date: '',
      startTime: '',
      endTime: ''
    });
  }

  removeRow(index: number) {
    this.gridDetail.splice(index, 1);
  }

  saveSubscription() {
    if (this.subscriptionName.trim() === '') {
      alert('Subscription Name is required.');
      return;
    }

    for (const row of this.gridDetail) {
      if (!row.date || !row.startTime || !row.endTime) {
        alert('All fields in the gridDetail are required.');
        return;
      }
    }

    const subscriptionData = {
      subscriptionName: this.subscriptionName,
      gridDetail: this.gridDetail
    };


const storedUserList = JSON.parse(localStorage.getItem('userList') || '[]');
storedUserList.push({ subscriptionName: this.subscriptionName, gridDetail: this.gridDetail });
localStorage.setItem('userList', JSON.stringify(storedUserList));


this.subscriptionSaved.emit({ subscriptionName: this.subscriptionName, gridDetail: this.gridDetail });
  }

  private loadStoredSubscriptions() {
    const storedSubscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
    this.gridDetail = storedSubscriptions;
  }
}
