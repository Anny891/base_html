import { Component, signal} from '@angular/core';



@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
   a = 0;
   b = 0;
  readonly resultado = signal(0);

  sumar() {
    this.resultado.set(this.a + this.b);
  }
}
