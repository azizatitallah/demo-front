import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProductsService } from '../services/products.service';


export interface Categorie {
  Type_intervention: string;
}
export interface Counts {
  Compte: number;
}
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart;
  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit() {
   this.productService.getInterventionCategorie().subscribe( (response) => {
     console.log(response);
     const Label = response as Array<Categorie>;     
     const Counts = response as Array<Counts>;
     this.chart = new Chart('myChart', {
       type: 'bar',
        data: {
           labels: Label,
            datasets: [{
                label: Label,
                data: Counts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
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
