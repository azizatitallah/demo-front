import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-chart-type-machine',
  templateUrl: './chart-type-machine.component.html',
  styleUrls: ['./chart-type-machine.component.css']
})
export class ChartTypeMachineComponent implements OnInit {

  chart;
  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit() {
   this.productService.getInterventionTypeMachine().subscribe( (response) => {

    const RESPONSE = response as Array<any>;
    let Labels = [];
    let Counts = [];

    for (let i = 0; i < RESPONSE.length; i++) {
        Labels.push(RESPONSE[i].TypeMachine);
        Counts.push(RESPONSE[i].Compte);
    }

     this.chart = new Chart('ChartMachine', {
       type: 'doughnut',
        data: {
           labels: Labels,
            datasets: [{
                label: 'Nombre d\'interventions',
                data: Counts,
                backgroundColor: [
                    
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)', 
                  'rgba(47, 132, 71, 0.8)',
                  'rgba(59, 89, 152,1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    // 'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
               
            }]
        },
        options: {
          layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }},
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  });
  }

 


}
