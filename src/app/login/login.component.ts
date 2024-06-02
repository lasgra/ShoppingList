import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("leftArm") leftArm: ElementRef<HTMLDivElement>
  @ViewChild("rightArm") rightArm: ElementRef<HTMLDivElement>
  @ViewChild("leftEye") leftEye: ElementRef<HTMLDivElement>
  @ViewChild("rightEye") rightEye: ElementRef<HTMLDivElement>

  onFocus() {
    this.leftArm.nativeElement.classList.add("moveLeft")
    this.rightArm.nativeElement.classList.add("moveRight")
  }

  onFocusOut() {
    this.leftArm.nativeElement.classList.remove("moveLeft")
    this.rightArm.nativeElement.classList.remove("moveRight")
    this.leftEye.nativeElement.style.left = "163px"
    this.rightEye.nativeElement.style.left = "228px"
    this.leftEye.nativeElement.style.top = "100px"
    this.rightEye.nativeElement.style.top = "100px"
  }

  onInput(text: string) {
    this.leftEye.nativeElement.style.top = "103px"
    this.rightEye.nativeElement.style.top = "103px"
    if (text.length >= 26) {
      this.leftEye.nativeElement.style.left = "168px"
      this.rightEye.nativeElement.style.left = "233px"
    }
    else {
      this.leftEye.nativeElement.style.left = `${160 + text.length * 0.3}px`
      this.rightEye.nativeElement.style.left = `${225 + text.length * 0.3}px`
    }

  }
}
