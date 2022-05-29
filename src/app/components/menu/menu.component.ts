import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(name: string, password: string) {
    if (name === "alejandro" && password == "2694") {
      console.log("Contraseña correcta");
    } else {
      console.log("Contraseña incorrecta");
    }
  }

}
