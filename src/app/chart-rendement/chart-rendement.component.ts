import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-chart-rendement',
  templateUrl: './chart-rendement.component.html',
  styleUrls: ['./chart-rendement.component.css']
})
export class ChartRendementComponent implements OnInit {

  chart;
  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit() {
   this.productService.getRendement().subscribe( (response) => {

    const RESPONSE = response as Array<any>;
    let Labels = [];
    let Counts = [];

    for (let i = 0; i < RESPONSE.length; i++) {
        Labels.push(RESPONSE[i].t);
        Counts.push(RESPONSE[i].rendement);
    }

     this.chart = new Chart('ChartRendement', {
       type: 'line',
        data: {
           labels: Labels,
            datasets: [{
                label: 'Rendement de la ligne en fonction du temps',
                data: Counts,
                backgroundColor: [
                  
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
          legend: {
            display: true,
            text: 'rendement',
            labels: {
              
                fontColor: 'rgb(255, 99, 132)'
            }},
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
