import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CatalogosService } from '../../services/catalogos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private catalogService: CatalogosService, private router: Router) { }

  user: string = "";
  password: string = "";
  ngOnInit(): void {
  }

  LogIn() {

    this.catalogService.Login(this.user, this.password)
    .subscribe(
      (res:any) => {
        console.log(res);
        //localStorage.setItem('token', res.token);
        //localStorage.setItem('tokenid', res['tokenid']);
        localStorage.setItem('tokenid', res);

        //this.user_inter[] = [];

        

        //console.log("this.user_inter", this.user_inter)
        /*console.log("this.user_in.tokenid", this.user_inter.tokenid);
        console.log("this.user_in.tipouser", this.user_inter.tipouser);*/
        
        this.router.navigate(['/principal']);
      },
      err => {
        console.log(err.error)
        alert(err.error)
      }
    )

  }

}
