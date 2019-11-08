import { Candidate } from './../../model/candidate';
import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  full_name;
  cpf;
  rg;
  birth_date;
  phone;
  username;
  email;
  passowrd;

  constructor(private candidateService: CandidateService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.candidateService.list().subscribe(resp => {
      this.dataSource = resp;
    })
  }

  getCandidate(candidate: Candidate) {
    this.candidateId = 22;
    this.candidateService.getCandidateById(this.candidateId).subscribe(resp => {
      this.candidate = resp;
    })
  }

  editCandidate(
    candidate: Candidate,
    messageError: string = 'Erro ao Editar, por favor entre em contato com o suporte.',
    messageSucess: string = 'Candidato editado com Sucesso!',
    action: string = ''
  ) {

    candidate = new Candidate()
    candidate.full_name = this.candidate.full_name;
    candidate.cpf = this.candidate.cpf;
    candidate.rg = this.candidate.rg;
    candidate.birth_date = this.candidate.birth_date;
    candidate.phone = this.candidate.phone;
    candidate.username = this.candidate.username;
    candidate.email = this.candidate.email;
    candidate.password = this.candidate.password;

    console.log(candidate.full_name)
    console.log(candidate.cpf)


    this.candidateService.editCandidate(this.candidateId, candidate).subscribe(resp => {
      if (!resp) {
        this.snackBar.open(messageError, action, {
          duration: 4000,
          panelClass: ['error-class']
        });
      } else {
        this.snackBar.open(messageSucess, action, {
          duration: 3000,
          panelClass: ['success-class']
        });
      }
    })
  }

}
