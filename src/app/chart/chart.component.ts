import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProductsService } from '../services/products.service';

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
   this.productService.getAffectation().subscribe( (response) => {
     const products = response as Array<any>;
     this.chart = new Chart('myChart', {
       type: 'bar',
        data: {
           labels: ['PullOver', 'Blue'],
            datasets: [{
                label: 'Stock',
                data: [products[0]['stock'], products[1]['stock']],
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
