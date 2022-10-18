import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control:FormControl){
    
    if(control.value?.toLowerCase()==='herrera'){

      return {
        noHerrera:true
      }
    }
    return null
  }

  passwordsIguales(pass1Name:string,pass2Name:string){
    return (fg:FormGroup) => {
      const pass1 = fg.controls[pass1Name]
      const pass2 = fg.controls[pass2Name]

      if(pass1.value === pass2.value){
        pass2.setErrors(null)

      }else{
        pass2.setErrors({
          noEsIgual:true
        })
      }
    }
  }
}
