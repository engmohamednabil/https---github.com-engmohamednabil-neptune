import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-motor',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './motor.component.html',
  styleUrl: './motor.component.scss'
})
export class MotorComponent {
  chartData = [
    { name: 'January', value: 35 },
    { name: 'February', value: 59 },
    { name: 'March', value: 39 },
    { name: 'April', value: 49 },
    { name: 'May', value: 56 },
    { name: 'June', value: 55 },
    { name: 'July', value: 40 },
    { name: 'August', value: 50 },
    { name: 'September', value: 73 },
    { name: 'October', value: 82 },
    { name: 'November', value: 46 },
    { name: 'December', value: 66 },
  ];
}
