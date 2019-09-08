import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-chart-atente-vsintervention',
  templateUrl: './chart-atente-vsintervention.component.html',
  styleUrls: ['./chart-atente-vsintervention.component.css']
})
export class ChartAtenteVSInterventionComponent implements OnInit {

  chart;
  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit() {
   this.productService.getInterventionAttente().subscribe( (response) => {

    const RESPONSE = response as Array<any>;
    let Labels = [];
    let Counts = [];
    let attente =[];
    for (let i = 0; i < RESPONSE.length; i++) {
        Labels.push(RESPONSE[i].Attente);
        Counts.push(RESPONSE[i].Intervention);

        attente=[Labels, Counts]
    }

     this.chart = new Chart('ChartAttente', {
       type: 'pie',
        data: {
           labels: ['Durée d\'attente', 'Durée d\'intervention'],
            datasets: [{
                label: 'Durée d\'attente VS Durée d\'intervention',
                data: attente,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
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
