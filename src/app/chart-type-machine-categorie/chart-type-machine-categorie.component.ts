import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-chart-type-machine-categorie',
  templateUrl: './chart-type-machine-categorie.component.html',
  styleUrls: ['./chart-type-machine-categorie.component.css']
})
export class ChartTypeMachineCategorieComponent implements OnInit {

  chart;
  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit() {
   this.productService.getInterventionMachineCategorie().subscribe( (response) => {

    const RESPONSE = response as Array<any>;
  
    let Labels2 = [];
    let Counts = [];
    let Labels = [];

  for (let i = 0; i < RESPONSE.length; i++) {
        Labels.push(RESPONSE[i].TypeMachine);
        Labels2.push(RESPONSE[i].Type_intervention);
        Counts.push(RESPONSE[i].Compte);
    }

     this.chart = new Chart('ChartMachineCategorie', {
       type: 'bar',
        data: {
           labels: Labels,
            datasets: [{
                label: 'Intervention',
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
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)', 
                  'rgba(47, 132, 71, 0.8)',
                  'rgba(59, 89, 152,1)',
                ],
                borderWidth: 1
               
            },       
                   
            
          ]
        },
        
        options: {
          layout: {
            padding: {
                left: 500,
                right: 500,
                top: 500,
                bottom: 500
            }},
          legend: {
            display: true,
            labels: {
                fontColor: ['rgba(255, 99, 132, 0.2)',
               ]
            },
            scales: {
                yAxes: [{
                  type: 'myScale',
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
      }
    });
  });
  }

}
