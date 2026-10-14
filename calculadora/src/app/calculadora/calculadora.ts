import { Component, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule],
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
