import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  public valor1: number=0;
  public valor2: number=0;
  public resultado: number=0;

  sumar(): void {
    this.resultado=Number(this.valor1)+Number(this.valor2);
  }
  restar(): void {

    this.resultado=Number(this.valor1)-Number(this.valor2);
  }

}

// Manuel Martínez Ruiz