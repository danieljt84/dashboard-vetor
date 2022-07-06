import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userName: FormControl;
  password: FormControl;
  showModal = false;

  constructor(private route: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userName = new FormControl('');
    this.password = new FormControl('');

  }

  login(): void {
    if (this.userName.value == "usuario" && this.password.value == "1234") {
      this.route.navigate(['main']);
    } else {
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.body = 'Usuário e/ou senha incorretos';
    }
  }
}
