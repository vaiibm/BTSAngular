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
    const observable = this.bugService.partialSearch(name);
    observable.subscribe(response => {
      console.log(response); this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert("No Record found for given name");
      }
    },
      error => {
        console.log(error);
        if (error.statusText !== 'OK')
          alert("Error not able to get record.  ")
        else {
          alert('Error not able to get record.');
        }
      });
  }

  showDescription(description: string) {
    document.getElementById('showDescription').innerHTML = description;
    return document.getElementById('temp').click();
  }

  showSynopsis(synopsis: string) {
    document.getElementById('showSynopsis').innerHTML = synopsis;
    return document.getElementById('synopsisButton').click();
  }

  getBugByNameAndStatus(name: string, status: string) {
    const observable = this.bugService.getBugByNameAndStatus(name, status);
    observable.subscribe(response => {
      console.log(response); this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert("No Record found for given Name and Status");
      }
    },
      error => {
        console.log(error);
        if (error.status != 200)
          alert("Error not able to get record. ")
        else {
          alert('Record not loaded successfully');
        }
      });
  }

  getBug(name: string, status: string) {
    if (name.length > 50) {
      return alert("Error : Name should be minimum 1 and maximum 50)");
    }
    if (name && status) {
      this.getBugByNameAndStatus(name, status);
    }
    else if (name && !status) {
      this.getBugs(name);
    }
    else if (!name && status) {
      this.getBugsByStatus(status);
    }
    else {
      this.getBugs('');
    }
  }
  deleteBug(bugId: string, name: string) {
    var r = confirm("Press a button to Delete this Bug - " + name);
    if (r == true) {
      const observable = this.bugService.deleteBug(bugId);
      observable.subscribe(response => {
        console.log(response);
        alert("Bug Deleted Successfully");
        return this.getBugs('');
      },
        error => {
          console.log(error);
          if (error.status != 200)
            alert("Error Not able to delete Bug")
          else {
            alert('deleted Bug successfully');
            this.getBugs('');
          }
        });
    }
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
        if (error.status != 200)
          alert("Error not able to get record.")
        else {
          alert('Error not able to get record.');
        }
      });
  }

  ngOnInit(): void {
    this.bug.status = '';
    this.bug.name = '';
    const observable = this.bugService.getBugs('');
    observable.subscribe(response => {
      this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert("No Records available  currently from server");
      }
    },
      error => {
        if (error.statusText !== 'OK')
          return alert("Unable to fetch records from server");
      });
  }
}


