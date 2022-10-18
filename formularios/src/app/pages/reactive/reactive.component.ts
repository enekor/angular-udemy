import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {


  forma:FormGroup

  constructor(private fb:FormBuilder,private validar:ValidadoresService) { 
    this.forma = this.crearFormulario()
    this.crearListeners()

  }

  ngOnInit(): void {
  }

  get nombreNoValido(){ return this.forma.get('nombre')!.invalid && this.forma.get('nombre')!.touched}
  get apellidoNoValido(){ return this.forma.get('apellido')!.invalid && this.forma.get('apellido')!.touched}
  get correoNoValido(){ return this.forma.get('correo')!.invalid && this.forma.get('correo')!.touched}
  get ciudadNoValido(){ return this.forma.get('nacionalidad.ciudad')!.invalid && this.forma.get('nacionalidad.ciudad')!.touched}
  get distritoNoValido(){ return this.forma.get('nacionalidad.distrito')!.invalid && this.forma.get('nacionalidad.distrito')!.touched}
  get pasatiempos(){return this.forma.get('pasatiempos') as FormArray}
  get pass1NoValido(){ return this.forma.get('pass1')!.invalid && this.forma.get('pass1')!.touched}
  get pass2NoValido(){ return !(this.forma.get('pass1')!.value === this.forma.get('pass2')!.value)}


  crearFormulario(){
    return this.fb.group({
      //nombre:['','validado sincrono','validado async'],
      nombre:['', [Validators.required,Validators.minLength(5)]],
      apellido:['', [Validators.required,Validators.minLength(5),this.validar.noHerrera]],
      correo:['', [Validators.required,Validators.email]],
      pass1:['',[Validators.required, Validators.minLength(5)]],
      pass2:['',[Validators.required, Validators.minLength(5)]],
      nacionalidad:this.fb.group({
        'ciudad':['',Validators.required],
        'distrito':['',Validators.required]
      }),
      pasatiempos:this.fb.array([])
    },{
      Validators: this.validar.passwordsIguales('pass1','pass2')
    })
  }

  crearListeners(){
    //this.forma.valueChanges.subscribe( valor => console.log(valor))
    //this.forma.statusChanges.subscribe( valor => console.log(valor))
    //this.forma.get('correo')!.valueChanges.subscribe( valor => console.log(valor))
  }

  guardar(){

    if(this.forma.invalid || this.pass2NoValido){
      return Object.values(this.forma.controls).forEach(control=>{
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control2=>control2.markAsTouched())
        }
        control.markAsTouched()
      })

    }

    console.log(this.forma.value);

    this.forma.reset()
    
  }

  agregarPasatiempo(){
    this.pasatiempos.push(this.fb.control('',Validators.required))
  }

  borrarPasatiempo(index:number){
    this.pasatiempos.removeAt(index)
  }
}
