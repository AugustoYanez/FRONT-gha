import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicar',
  standalone: true,
  imports: [],
  templateUrl: './multiplicar.component.html',
  styleUrl: './multiplicar.component.css'
})
export class MultiplicarComponent {

  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }

}
