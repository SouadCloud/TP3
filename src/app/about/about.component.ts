import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { DataService } from '../data.service';
=======
>>>>>>> 9126ec2f008f4587517b2441fc824f842db4417d

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {

<<<<<<< HEAD
  goals = [];
  constructor(private route:ActivatedRoute, private router:Router, private dataService:DataService) {
    this.goals = this.dataService.getGoal();
=======
 
  constructor() {
    
>>>>>>> 9126ec2f008f4587517b2441fc824f842db4417d
   }

  ngOnInit() {
  }

}
