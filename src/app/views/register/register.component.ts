import { Candidate } from '../../model/candidate';
import { CandidateService } from './../../service/candidate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  full_name;
  cpf;
  rg;
  birth_date;
  phone;
  username;
  email;
  passowrd;

  constructor(private candidateService: CandidateService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(
    candidate: Candidate,
    messageError: string = 'Erro ao Cadastrar, por favor entre em contato com o suporte.',
    messageSucess: string = 'Candidato cadastrado com Sucesso!',
    action: string = ''
  ) {

    candidate = new Candidate()
    candidate.full_name = this.full_name;
    candidate.cpf = this.cpf;
    candidate.rg = this.rg;
    candidate.birth_date = this.birth_date;
    candidate.phone = this.phone;
    candidate.username = this.username;
    candidate.email = this.email;
    candidate.password = this.passowrd;

    this.candidateService.register(candidate).subscribe(resp => {
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
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      }
    })
  }

}
