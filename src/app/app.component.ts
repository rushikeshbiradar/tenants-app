import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  menuWidth: string = "0%";

  public toggleMenu(flag: boolean) {
    this.menuWidth = flag ? "100%" : "0%";
  }

}
