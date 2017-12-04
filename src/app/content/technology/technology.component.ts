import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../../technology.service';
import { Technology } from '../../techology';
import { retry } from 'rxjs/operators/retry';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  providers: [TechnologyService]
})
export class TechnologyComponent implements OnInit {

tech : Technology = new Technology();
 technologies: Technology[];
 //technologyName = "";
 output: string = "";

 isEdit: boolean = false;
  
  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {
    this.GetTechnology();
  }

  GetTechnology()
  {
    this.technologyService.ReadTechnologies().subscribe(
      data => this.technologies = data
    );
  }

  AddTechnology()
  {
    this.technologyService.CreateTechnology(this.tech).subscribe
    (
      (technology: Technology) => this.technologies.push(technology)
    );
   this.tech = new Technology();
  }

  DeleteTechnology(id)
  {
    //alert(id);
    this.technologyService.DeleteTechnology(id).subscribe(
      (technology: Technology) => this.technologies = this.technologies.filter(
        function(t)
        {
          return t["Id"] != technology.Id;
        })
    );
  }
}
