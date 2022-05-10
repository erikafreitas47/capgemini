import { Component, OnInit } from '@angular/core';
import { DecodeTokenService } from '../decode-token.service';
import { ServiceAuthenticationService } from '../service-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: ServiceAuthenticationService,
    private decodeToken: DecodeTokenService
    ) { }

  logar(form: any){
    this.auth.logar(form.email, form.senha).subscribe(
      token => {
        localStorage.setItem('token', JSON.stringify(token))
      }    
    )
  }

  verToken(){
    let usuario = this.decodeToken.decodeTokenJWT();
    console.log(usuario);
  }

  ngOnInit(): void {
  }

}
