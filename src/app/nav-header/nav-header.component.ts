import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
  host: {ngSkipHydration: 'true'}
})
export class NavHeaderComponent {

  GoTo(location:any) {
    window.location.replace(location)
  }

  Signout() {
    Swal.fire({
      title: "ต้องการออกจากระบบหรือไม่",
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
      icon: "info"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('CardReader')
        window.location.replace('/')
      }
    });
  }

}
