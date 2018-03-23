import {
  AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren,
  ViewContainerRef
} from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserItemComponent } from '../user-item/user-item.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild ( UserHeaderComponent )
  header: UserHeaderComponent;

  @ViewChildren ( UserItemComponent )
  userItems: QueryList<UserItemComponent>;
  private subscription: Subscription;

  items: number[] = [ 1,
                      2,
                      3,
                      4,
                      5
  ];

  constructor () {} 

  ngOnInit () {
  }

  ngAfterViewInit (): void {
    console.log ( this.header );
    this.logItems();
    this.subscription = this.userItems.changes.subscribe( () => this.logItems() );
  }

  ngOnDestroy (): void {
    this.subscription.unsubscribe();
    this.subscription = undefined;
  }

  delItem () {
    this.items.pop();
  }

  private logItems () {
    console.log ( this.userItems.toArray() );
  }

}
