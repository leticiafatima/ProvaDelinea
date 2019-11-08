import { Candidate } from './../../model/candidate';
import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'telefone', 'action'];
  dataSource: Candidate[];
  candidateId;
  candidate;

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.candidateService.list().subscribe( resp => {
      this.dataSource = resp;
    })
  }

  getCandidate(candidate: Candidate) {
    this.candidateId = 22;
    this.candidateService.getCandidateById(this.candidateId).subscribe( resp => {
      this.candidate = resp;
    })
  }

}
