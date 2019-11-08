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
  dataCandidate

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.candidateService.list().subscribe( resp => {
      this.dataSource = resp;
      this.dataCandidate = resp
      console.log(resp)
    })
  }

  getCandidate(candidate: Candidate) {
    console.log(candidate)
    console.log(this.dataCandidate)
    /* this.candidateService.getCandidateById(candidate['id']).subscribe( resp => {
      this.dataCandidate = resp;
    }) */
  }

}
