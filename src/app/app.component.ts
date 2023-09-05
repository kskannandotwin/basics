import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Hello World</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  // styles: ['']
})

export class AppComponent {
  name = 'luis';

  getName() {
    return this.name;
  }
}