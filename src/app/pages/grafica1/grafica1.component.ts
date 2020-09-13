import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public labels1: string[] = ['Data 1', 'Data 2', 'Data 3'];
  public data1 = [[350, 450, 200]];
}
