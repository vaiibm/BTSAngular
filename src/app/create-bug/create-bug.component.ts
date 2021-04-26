import { Component, Input, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css', './style.css']
})

export class CreateBugComponent implements OnInit {
  title: string = "CreateBug";
  bug: Bug = new Bug();
  bugchild: Bug = new Bug();
  bugArray: Bug[] = [];

  constructor(private bugService: BugService) { }

  postBugParent(bugTemp: Bug) {
    bugTemp.eta = new Date(bugTemp.etaString);
    if (!this.bugService.validateBug(bugTemp))
      return;
    const promise = this.bugService.postBug(bugTemp);
    promise.subscribe(response => {
      console.log(response);
      alert('bug created..')
    },
      error => {
        console.log(error);
        if (error.status != 201)
          alert("Error !! : " + error.headers.get("error"))
        else {
          alert('bug created..');
        }
      });
  }

  ngOnInit(): void {
    document.getElementById('searchbutton').className = 'btn btn-primary';
    document.getElementById('createbutton').className = 'btn btn-link';
    document.getElementById('buttonSave').innerHTML = 'Create Bug'
    document.getElementById('createbutton').style.border = "2px solid #2196F3";
  }

}
