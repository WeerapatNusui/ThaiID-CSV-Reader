import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-footer',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-footer.component.html',
  styleUrl: './nav-footer.component.scss'
})
export class NavFooterComponent {

  GoTo(location:any) {
    window.location.href = location
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
