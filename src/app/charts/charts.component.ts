import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  chart;
  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit() {
   this.productService.getInterventionCategorie().subscribe( (response) => {

    const RESPONSE = response as Array<any>;
    let Labels = [];
    let Counts = [];

    for (let i = 0; i < RESPONSE.length; i++) {
        Labels.push(RESPONSE[i].Type_intervention);
        Counts.push(RESPONSE[i].Compte);
    }

     this.chart = new Chart('myChart', {
       type: 'bar',
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
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 0.2)'
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

