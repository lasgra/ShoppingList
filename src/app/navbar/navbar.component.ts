import { Component } from '@angular/core';
import { ListComponent } from '../components/list/list.component';
import { ComponentList } from '../listComponent';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  myList: ComponentList = {
    name: "My Lists: ",
    imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-checkmark-1767470-1502540.png",
    entries: ["Fajna lista", "Capaty cap", "Too bad"]
  }
}
