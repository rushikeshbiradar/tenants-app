import { Component } from '@angular/core';

@Component({
  templateUrl: './user.component.html',
})

export class UserComponent {

  showAdd: boolean = false;

  toggleShowAdd(flag: boolean) {
    this.showAdd = flag;
  }

}
