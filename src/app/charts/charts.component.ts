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
                    // 'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    // 'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
               
            }]
        },
        options: {
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

