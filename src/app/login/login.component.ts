import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("leftArm") leftArm: ElementRef
  @ViewChild("rightArm") rightArm: ElementRef
  @ViewChild("leftEye") leftEye: ElementRef
  @ViewChild("rightEye") rightEye: ElementRef
  @ViewChild("monkey") monkey: ElementRef

  @ViewChild("login") loginInput: ElementRef
  @ViewChild("register") registerInput: ElementRef

  @ViewChild("firstBar") firstBar: ElementRef
  @ViewChild("secondBar") secondBar: ElementRef
  @ViewChild("thirdBar") thirdBar: ElementRef
  @ViewChild("fourthBar") fourthBar: ElementRef

  @ViewChild("registerEmailCorrection") registerEmailCorrection: ElementRef
  @ViewChild("registerPasswordCorrection") registerPasswordCorrection: ElementRef
  @ViewChild("registerPasswordConfirmCorrection") registerPasswordConfirmCorrection: ElementRef
  @ViewChild("loginCorrection") loginCorrection: ElementRef

  emailValidatior = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

  onFocus() {
    this.leftArm.nativeElement.classList.add("moveLeft")
    this.rightArm.nativeElement.classList.add("moveRight")
  }

  onFocusOut() {
    this.leftArm.nativeElement.classList.remove("moveLeft")
    this.rightArm.nativeElement.classList.remove("moveRight")
    this.resetEyePosition()
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

  changeType() {
    this.resetEyePosition()
    this.loginInput.nativeElement.classList.add("spin")
    this.registerInput.nativeElement.classList.add("spin")
    this.monkey.nativeElement.classList.add("spin")
    setTimeout(() => {
      this.loginInput.nativeElement.style.zIndex = this.loginInput.nativeElement.style.zIndex == "1" ? "-2" : "1"
      this.registerInput.nativeElement.style.zIndex = this.registerInput.nativeElement.style.zIndex == "1" ? "-2" : "1"
      setTimeout(() => {
        this.loginInput.nativeElement.classList.remove("spin")
        this.registerInput.nativeElement.classList.remove("spin")
        this.monkey.nativeElement.classList.remove("spin")
      }, 500);
    }, 500);
  }

  resetEyePosition() {
    this.leftEye.nativeElement.style.left = "163px"
    this.rightEye.nativeElement.style.left = "228px"
    this.leftEye.nativeElement.style.top = "100px"
    this.rightEye.nativeElement.style.top = "100px"
  }

  passwordInput(input: string) {
    let conditions = 0
    if (input.length >= 8) {
      conditions += 1
    }
    // Check if password contains numbers
    if (/\d/.test(input)) {
      conditions += 1
    }
    // Check if password contains uppercase letters
    if (/[A-Z]/.test(input)) {
      conditions += 1
    }
    // Check if password contains special characters
    if (/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(input)) {
      conditions += 1
    }
    this.lightUpPasswordBar(conditions)
  }

  lightUpPasswordBar(conditions: number) {
    this.firstBar.nativeElement.style.backgroundColor = conditions >= 1 ? "rgb(255, 0, 0)" : "rgb(92, 92, 92)"
    this.secondBar.nativeElement.style.backgroundColor = conditions >= 2 ? "orange" : "rgb(92, 92, 92)"
    this.thirdBar.nativeElement.style.backgroundColor = conditions >= 3 ? "greenyellow" : "rgb(92, 92, 92)"
    this.fourthBar.nativeElement.style.backgroundColor = conditions == 4 ? "green" : "rgb(92, 92, 92)"
  }

  registerAccount(email: string, password: string, confirmPassword: string) {
    if (password.length < 8 ){
      this.registerPasswordCorrection.nativeElement.innerText = "Password must be at least 8 characters long"
    }
    if (confirmPassword != password || confirmPassword == ""){
      this.registerPasswordConfirmCorrection.nativeElement.innerText = "Passwords don't match"
    }
    if (!this.emailValidatior.test(email)){
      this.registerEmailCorrection.nativeElement.innerText = "Not correct email"
    }
    
    setTimeout(() => {
      this.registerPasswordCorrection.nativeElement.innerText = ""
      this.registerPasswordConfirmCorrection.nativeElement.innerText = ""
      this.registerEmailCorrection.nativeElement.innerText =  ""
    }, 1500);
  }

  loginAccount(email: string, password: string){
    if (email == "" || !this.emailValidatior.test(email) || password == "" || password.length < 8){
      this.loginCorrection.nativeElement.innerText = "Invalid login"
    }

    setTimeout(() => {
      this.loginCorrection.nativeElement.innerText = ""
    }, 1500);
  }
}
