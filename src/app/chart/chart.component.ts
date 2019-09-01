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
    chart: Chart;

    constructor(
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
                    }
                }
            });
        });
    }

}
