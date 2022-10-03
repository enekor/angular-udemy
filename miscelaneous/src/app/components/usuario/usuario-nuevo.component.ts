import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {

    this.ar.parent!.params.subscribe(params=>{
      console.log("ruta hija usuario nuevo");
      console.log(params['id']);
    })

  }

}
