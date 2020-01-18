import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals = [];
  constructor(private route:ActivatedRoute, private router:Router, private dataService:DataService) {
    this.goals = this.dataService.getGoal();
   }

  ngOnInit() {
    this.itemCount = this.goals.length;
   
  }
 addItem(){
  this.dataService.goals.push(this.goalText);
  this.goalText = '';
  //this.itemCount = this.goals.length;
  this.itemCount = this.dataService.goals.length;
  }

}
