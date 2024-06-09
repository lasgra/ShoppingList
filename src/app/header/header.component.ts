import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild("loginPopUp") loginPopUp : LoginComponent
  lastCall = 0

  showLogin(){
    let now = new Date().getTime()
    if (now - this.lastCall >= 1000){
      this.lastCall = now
      // Only able to call this part once a second
      let isOnScreen = this.loginPopUp.monkey.nativeElement.classList.contains("appear")
      if (isOnScreen){
        this.loginPopUp.hide()
      }
      else{
        this.loginPopUp.appear()
      }
    }
  }
}
