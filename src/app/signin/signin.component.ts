import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiResult, ListForm } from './../services/services.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  host: {ngSkipHydration: 'true'},
  providers: [
    ApiResult,
    ListForm
  ]
})
export class SigninComponent implements OnInit {

  signin:any = null

  formSignin = this.FormBuilder.group({
    text: '',
    user: ['', Validators.required],
    pass: ['', Validators.required]
  })

  constructor(
    private FormBuilder:FormBuilder,
    private ApiResult:ApiResult
  ){}

  ngOnInit(): void {
    try {
      this.signin = localStorage.getItem('CardReader')
      if (this.signin != null) {
        window.location.replace('/addform')
      }
    } catch (error) {

    }
  }

  Signin() {
    this.ApiResult.postResult('signin.php',this.formSignin.value).subscribe({
      next:(result:any)=> {
        if (result == 'true') {
          localStorage.setItem('CardReader',result)
          window.location.replace('/addform')
        } else {
          this.AlertFalse()
        }
      }
    })
  }

  AlertFalse() {
    Swal.fire({
      title: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
      icon: "question",
      confirmButtonText: "ปิด",
    });
  }
}
