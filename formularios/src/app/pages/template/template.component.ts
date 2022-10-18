import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { PaisService } from 'src/app/services/pais.service';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido:'',
    correo: '',
    pais:'',
    genero:''
  }

  paises:any[] = []
  

  constructor(private pService:PaisService) { }

  ngOnInit(): void {
    this.paises = this.pService.getPaises();
    
  }

  guardar( forma:NgForm ){
    
    if(forma.invalid){

      Object.values(forma.controls).forEach(control =>{
        control.markAsTouched()
        
      })

      return
    }
    console.log(forma.value);
    
  }

}
