import { Component, OnInit } from '@angular/core';
import { NavHeaderComponent } from "../nav-header/nav-header.component";
import { ApiResult, ListForm } from './../services/services.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavFooterComponent } from "../nav-footer/nav-footer.component";

@Component({
    selector: 'app-addform',
    standalone: true,
    templateUrl: './addform.component.html',
    styleUrl: './addform.component.scss',
    providers: [
        ApiResult,
        ListForm
    ],
    imports: [
        NavHeaderComponent,
        FormsModule,
        ReactiveFormsModule,
        NavFooterComponent
    ]
})
export class AddformComponent implements OnInit {

  no:any
  birth:any
  gender:any
  title:any
  fname:any
  lname:any
  address:any

  formGetData = this.FormBuilder.group({
    text: ''
  })

  formAddData = this.FormBuilder.group({
    text: '',
    no: ['',Validators.required],
    birth: ['',Validators.required],
    gender: ['',Validators.required],
    title: ['',Validators.required],
    fname: ['',Validators.required],
    lname: ['',Validators.required],
    address: ['',Validators.required],
    disease: ['',Validators.required],
    allergy: ['',Validators.required],
    pressure: ['',Validators.required],
    weight: ['',Validators.required],
    treatment: ['',Validators.required]
  })

  constructor (
    private FormBuilder:FormBuilder,
    private ApiResult:ApiResult,
    private ListForm:ListForm
  ) {}

  ngOnInit(): void {

  }

  LoadData() {
    this.formGetData.reset()
    this.formAddData.reset()
    this.formGetData.get('text')?.setValue('getData')
    this.ApiResult.postResult('data.php',this.formGetData.value).subscribe({
      next:(result:any)=>{
        let no = result.no.replace(/[^a-zA-Z0-9 ]/g, '');
        this.no = no
        this.birth = result.date
        this.gender = result.gender
        this.title = result.title
        this.fname = result.fname
        this.lname = result.lname
        this.address = result.address
        this.formAddData.get('text')?.setValue('addData')
        this.formAddData.get('no')?.setValue(this.no)
        this.formAddData.get('birth')?.setValue(this.birth)
        this.formAddData.get('gender')?.setValue(this.gender)
        this.formAddData.get('title')?.setValue(this.title)
        this.formAddData.get('fname')?.setValue(this.fname)
        this.formAddData.get('lname')?.setValue(this.lname)
        this.formAddData.get('address')?.setValue(this.address)
      }
    })
  }

  AddData() {
    this.formAddData.get('text')?.setValue('addData')
    this.ApiResult.postResult('addform.php',this.formAddData.value).subscribe({
      next:(result:any)=>{
        this.AlertAddData()
        this.formAddData.reset()
      }
    })
  }

  AlertAddData() {
    Swal.fire({
      title: "บันทึกข้อมูลสำเร็จ",
      icon: "success",
      confirmButtonText: "ปิด",
    });
  }
}
