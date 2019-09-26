import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProductsService } from '../services/products.service';

<<<<<<< HEAD:src/app/charts/charts.component.ts
=======
export interface Categorie {
  Type_intervention: string;
}
export interface Counts {
  Compte: number;
}
>>>>>>> 81d57bb32b184558e804248d76e31f166d4a0b3c:src/app/chart/chart.component.ts
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
<<<<<<< HEAD:src/app/charts/charts.component.ts
export class ChartsComponent implements OnInit {
  chart;
  constructor(
=======
export class ChartComponent implements OnInit {
    chart: Chart;

    constructor(
>>>>>>> 81d57bb32b184558e804248d76e31f166d4a0b3c:src/app/chart/chart.component.ts
    private productService: ProductsService,
    ) { }

    ngOnInit() {
        this.productService.getInterventionCategorie().subscribe( (response) => {

            const RESPONSE = response as Array<any>;
            const Labels = [];
            const Counts = [];

            for (let i = 0; i < RESPONSE.length; i++) {
                Labels.push(RESPONSE[i].Type_intervention);
                Counts.push(RESPONSE[i].Compte);
            }

<<<<<<< HEAD:src/app/charts/charts.component.ts
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
=======
            console.log(RESPONSE);
            console.log(Counts);
            console.log(Labels);

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
>>>>>>> 81d57bb32b184558e804248d76e31f166d4a0b3c:src/app/chart/chart.component.ts
                    }
                }
            });
        });
    }

 

}

