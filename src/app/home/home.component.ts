import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { DataService } from '../data.service';
=======
import { analyzeAndValidateNgModules } from '@angular/compiler';
>>>>>>> 9126ec2f008f4587517b2441fc824f842db4417d



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
<<<<<<< HEAD
  constructor(private route:ActivatedRoute, private router:Router, private dataService:DataService) {
    this.goals = this.dataService.getGoal();
   }

  ngOnInit() {
=======
  constructor() {}
    

  ngOnInit() {
    this.addItem();
>>>>>>> 9126ec2f008f4587517b2441fc824f842db4417d
    this.itemCount = this.goals.length;
   
  }
 addItem(){
  this.dataService.goals.push(this.goalText);
  this.goalText = '';
<<<<<<< HEAD
  //this.itemCount = this.goals.length;
  this.itemCount = this.dataService.goals.length;
=======
  this.itemCount = this.goals.length;

>>>>>>> 9126ec2f008f4587517b2441fc824f842db4417d
  }

}
