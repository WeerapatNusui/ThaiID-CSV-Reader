import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenGuard: CanActivateFn = (route, state) => {
  let authen;
  try {
    authen = localStorage.getItem('CardReader');
  } catch (error) {
    authen = 'false';
  }
  if (authen == 'true') {
    return true
  } else {
    inject(Router).navigateByUrl("/");
    return false;
  }
};
