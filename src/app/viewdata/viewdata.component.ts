import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiResult, ListForm } from './../services/services.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgFor, NgIf } from '@angular/common';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ngxCsv } from 'ngx-csv';
import { NavFooterComponent } from "../nav-footer/nav-footer.component";

@Component({
    selector: 'app-viewdata',
    standalone: true,
    templateUrl: './viewdata.component.html',
    styleUrl: './viewdata.component.scss',
    providers: [
        ApiResult,
        ListForm
    ],
    imports: [
        NavHeaderComponent,
        NgIf,
        NgFor,
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
        NavFooterComponent
    ]
})
export class ViewdataComponent implements OnInit {

  length:number = 0
  lengthSearch:number = 0
  page: number = 1;
  itemsPerPage: number = 10;
  data:any
  dataCSV:any

  formViewData = this.FormBuilder.group({
    text: 'viewData'
  })

  formViewDataOne = this.FormBuilder.group({
    text: 'viewDataOne',
    data: ''
  })

  formDelData = this.FormBuilder.group({
    text: 'delData',
    data: ''
  })

  formEditData = this.FormBuilder.group({
    text: '',
    paper: '',
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

  formGetCSV = this.FormBuilder.group({
    text: 'getCSV'
  })

  formSearchNo = this.FormBuilder.group({
    text: 'searchNo',
    dataNo: ['',Validators.required]
  })

  formSearchDate = this.FormBuilder.group({
    text: 'getCSV',
    startDate: ['',Validators.required],
    endDate: ['',Validators.required]
  })

  constructor(
    private FormBuilder:FormBuilder,
    private ApiResult:ApiResult,
    private ListForm:ListForm
  ){}

  ngOnInit(): void {
    this.GetData()
  }

  GetData() {
    this.ApiResult.postResult('viewdata.php',this.formViewData.value).subscribe({
      next:(result:any)=>{
        this.length = result.length
        this.data = result
      }
    })
  }

  GetAge(data:any) {
    let date = new Date();
    let currentYear = date.getFullYear();
    let age = data.substring(0, data.length - 6);
    age = currentYear - parseInt(age)
    return age
  }

  DelData(data:any) {
    Swal.fire({
      title: "ต้องการลบข้อมูลนี้หรือไม่",
      showCancelButton: true,
      confirmButtonText: "ลบ",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6680ba",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        this.DelSubmit(data)
        Swal.fire({
          title: "ลบข้อมูลสำเร็จ",
          icon: "success",
          confirmButtonText: "ปิด",
        });
      }
    });
  }

  DelSubmit(data:any) {
    this.formDelData.get('text')?.setValue('delData')
    this.formDelData.get('data')?.setValue(data)
    this.ApiResult.postResult('viewdata.php',this.formDelData.value).subscribe({
      next:(result:any)=>{
        this.GetData()
      }
    })
  }

  EditSumit() {
    this.ApiResult.postResult('viewdata.php',this.formEditData.value).subscribe({
      next:(result:any)=>{
        this.AlertEditData()
        this.formEditData.reset()
        this.ListForm.hideForm('boxEdit')
      }
    })
  }

  EditOpen(data:any) {
    this.ListForm.showForm('boxEdit')
    this.formViewDataOne.get('text')?.setValue('viewDataOne')
    this.formViewDataOne.get('data')?.setValue(data)
    this.ApiResult.postResult('viewdata.php',this.formViewDataOne.value).subscribe({
      next:(result:any)=>{
        this.formEditData.get('text')?.setValue('editData')
        this.formEditData.get('paper')?.setValue(result.pPaper + '')
        this.formEditData.get('no')?.setValue(result.pNo)
        this.formEditData.get('birth')?.setValue(result.pBirth)
        this.formEditData.get('gender')?.setValue(result.pGender)
        this.formEditData.get('title')?.setValue(result.pTitle)
        this.formEditData.get('fname')?.setValue(result.pFName)
        this.formEditData.get('lname')?.setValue(result.pLName)
        this.formEditData.get('address')?.setValue(result.pAddress)
        this.formEditData.get('disease')?.setValue(result.pDisease)
        this.formEditData.get('allergy')?.setValue(result.pAllergy)
        this.formEditData.get('pressure')?.setValue(result.pPressure + '')
        this.formEditData.get('weight')?.setValue(result.pWeight + '')
        this.formEditData.get('treatment')?.setValue(result.pTreatment)
      }
    })
  }

  EditClose() {
    this.ListForm.hideForm('boxEdit')
  }

  AlertEditData() {
    Swal.fire({
      title: "บันทึกข้อมูลสำเร็จ",
      icon: "success",
      confirmButtonText: "ปิด",
    });
  }

  GetCSV() {
    this.formGetCSV.get('text')?.setValue('getCSV')
    this.ApiResult.postResult('viewdata.php',this.formGetCSV.value).subscribe({
      next:(result:any)=>{
        this.dataCSV = result
        let options = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          useBom: true,
          headers: [
            "เลขรายการ",
            "วันที่บันทึก",
            "เลขบัตรประชาชน",
            "วันเดือนปีเกิด",
            "เพศ",
            "คำนำหน้า",
            "ชื่อ",
            "สกุล",
            "ที่อยู่",
            "โรคประจำตัว",
            "ประวัติแพ้ยา/อาหาร",
            "ความดันโลหิต",
            "น้ำหนัก",
            "การรักษาของแพทย์"
          ]
        };
        let date = new Date().toISOString().split('T')[0];
        let fileName:string = "CardReader["+date+"]";
        new ngxCsv(this.dataCSV, fileName, options);
      }
    })
  }

  SearchDate() {
    this.formSearchDate.get('text')?.setValue('searchDate')
    this.ApiResult.postResult('viewdata.php',this.formSearchDate.value).subscribe({
      next:(result:any)=>{
        this.lengthSearch = result.length
        this.data = result
      }
    })
  }

  SearchNo() {
    this.formSearchNo.get('text')?.setValue('searchNo')
    this.ApiResult.postResult('viewdata.php',this.formSearchNo.value).subscribe({
      next:(result:any)=>{
        this.lengthSearch = result.length
        this.data = result
      }
    })
  }

  viewOne(data:any) {
    localStorage.setItem('viewOne',data)
    window.open(this.ApiResult.viewOneURL,'_blank')
  }
}
