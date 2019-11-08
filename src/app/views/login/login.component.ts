import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';
import { Candidate } from 'src/app/model/candidate';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
