import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {

    this.ar.params.subscribe(params=>{
      console.log("ruta padre");
      console.log(params['id']);
    })

  }

}
