import { Component } from '@angular/core';
import { URIProvider } from "./static/uri-provider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = URIProvider;
}
