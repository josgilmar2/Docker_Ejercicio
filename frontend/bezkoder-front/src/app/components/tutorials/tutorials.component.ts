import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/dto/tutorial.dto';
import { TutorialResponse } from 'src/app/interfaces/tutorial.interface';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  tutoriales: TutorialResponse[] = [];
  title: string = '';
  description: string = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.tutorialService.getAllTutorials().subscribe(res => {
      this.tutoriales = res
    })
  }

  createTutorial() {
    let tutorial = new Tutorial();
    tutorial.title = this.title;
    tutorial.description = this.description;
    this.tutorialService.createTutorial(tutorial).subscribe(res => {
      if(this.title != '') {
        alert('Se ha creado tu tutorial');
      }
    })
    location.reload();
  }

}
