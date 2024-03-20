import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { ApiResult, ListForm } from '../services/services.service';

@Component({
  selector: 'app-viewone',
  standalone: true,
  templateUrl: './viewone.component.html',
  styleUrl: './viewone.component.scss',
  imports: [
    NavHeaderComponent,
    NgIf,
    NgFor,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiResult,
    ListForm
  ]
})
export class ViewoneComponent implements OnInit {

  pDate:any
  pNo:any
  pBirth:any
  pGender:any
  pTitle:any
  pFName:any
  pLName:any
  pAddress:any
  pDisease:any
  pAllergy:any
  pPressure:any
  pWeight:any
  pTreatment:any

  constructor(
    private FormBuilder:FormBuilder,
    private ApiResult:ApiResult,
    private ListForm:ListForm
  ){}

  formGetData = this.FormBuilder.group({
    text: '',
    data: ''
  })

  ngOnInit(): void {
    this.GetData()
  }

  GetData() {
    let paper = localStorage.getItem('viewOne')
    this.formGetData.get('text')?.setValue('getOne')
    this.formGetData.get('data')?.setValue(paper)
    this.ApiResult.postResult('viewone.php',this.formGetData.value).subscribe({
      next:(result:any)=>{
        this.pDate = result.pDate
        this.pNo = result.pNo
        this.pBirth = result.pBirth
        this.pGender = result.pGender
        this.pTitle = result.pTitle
        this.pFName = result.pFName
        this.pLName = result.pLName
        this.pAddress = result.pAddress
        this.pDisease = result.pDisease
        this.pAllergy = result.pAllergy
        this.pPressure = result.pPressure
        this.pWeight = result.pWeight
        this.pTreatment = result.pTreatment
      }
    })
  }
}
