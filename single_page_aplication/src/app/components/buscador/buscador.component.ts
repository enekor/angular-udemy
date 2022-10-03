import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  nombreBuscado:string = "";

  constructor(private activatedRoute:ActivatedRoute,private heroeService:HeroesService,private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{

      this.nombreBuscado = params['termino'];
      
      this.heroes = this.heroeService.buscarHeroes(params['termino']);
      console.log(this.heroes);
      

    })
  }

  verHeroe(id:Number){
    this.router.navigate(['/heroe',id]);
  }

}
