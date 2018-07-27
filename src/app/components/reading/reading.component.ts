import { Component } from '@angular/core';

@Component({
  templateUrl: './reading.component.html',
})

export class ReadingComponent {

  showAdd: boolean = false;

  toggleShowAdd(flag: boolean) {
    this.showAdd = flag;
  }

}
