import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from 'src/app/search-request.service';
import {Repository} from 'src/app/repository';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  providers: [SearchRequestService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repository: Repository | undefined;
    public searchRepo!: string;
    public resultCount = 12;

    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;
        this.getDataFunction();

    }

    constructor(public gitRepoRequest: SearchRequestService ) { }

  ngOnInit() {
        this.resultCount = 5;
      this.gitRepoRequest.gitRepos(this.searchRepo);
  }


      getDataFunction() {
          this.gitRepoRequest.gitRepos(this.searchRepo);

      }

}
