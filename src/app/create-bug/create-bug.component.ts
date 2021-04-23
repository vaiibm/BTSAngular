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

  createBug(bug: Bug) {
    alert("in parent")
    if (!this.bugService.validateBug(bug))
      return;
    const promise = this.bugService.postBug(bug);
    promise.subscribe(response => {
      console.log(response);
      alert('bug added..')
    },
      error => {
        console.log(error);
        if (error.statusText !== 'OK')
          alert("Error !! : " + error.headers.get("error"))
        else {
          alert('bug added..');
        }
      });
  }

  ngOnInit(): void {
    document.getElementById('searchbutton').className = 'btn btn-primary';
    document.getElementById('createbutton').className = 'btn btn-link';
    document.getElementById('buttonSave').innerHTML = 'Create Bug'
  }

}
