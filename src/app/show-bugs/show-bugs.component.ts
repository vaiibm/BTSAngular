import { getNumberOfCurrencyDigits } from '@angular/common';
import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
@Component({
  selector: 'app-show-bugs',
  templateUrl: './show-bugs.component.html',
  styleUrls: ['./show-bugs.component.css']
})
export class ShowBugsComponent implements OnInit {
  title: string = "show bugs";
  bug: Bug = new Bug();
  bugArray: any;
  constructor(private bugService: BugService) { };
  getBugs(name: string) {
    const observable = this.bugService.getBugs(name);
    observable.subscribe(response => {
      console.log(response); this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert("No Resposne for this input");
      }
    });

  }
  getBugsByStatus(status: string) {
    const observable = this.bugService.getBugsByStatus(status);
    observable.subscribe(response => {
      console.log(response); this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert("No Resposne for this input STATUS");
      }
    },
      error => {
        console.log(error);
        if (!error.ok)
          alert("Error !! : " + error.headers.get("error"))
        else {
          alert('..');
        }
      });
  }


  ngOnInit(): void {
    const observable = this.bugService.getBugs('');
    observable.subscribe(response => {
      this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert("No Records available  currently from server");
      }
    });
  }

}


