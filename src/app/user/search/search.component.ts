import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from 'src/app/search-request.service';
import {Repository} from 'src/app/repository';
import {User} from 'src/app/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchMe = 'PeterAnami';
    public githubUser!: string;

    users!: User;
    repository!: Repository;
    public searchRepo!: string;
    public resultCount = 12;


    findUser(username: string) {
        this.githubUser = '';
        this.searchMe  = username;
        this.ngOnInit();
    }

    constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService) { }

    ngOnInit() {
        this.githubUserRequest.githubUser(this.searchMe);
        this.users = this.githubUserRequest.users;
        this.userRepos.gitUserRepos(this.searchMe);
        console.log(this.userRepos);
    }
  
  
      searchRepos() {
          this.searchRepo = '';
          this.resultCount = 10;
  
      }
  }
