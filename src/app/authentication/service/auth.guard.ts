import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthGuard  {
    constructor(
        private authService: AuthenticationService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var isAuthenticated = this.authService.isAuthenticated();
        if (!isAuthenticated) {
            this.router.navigate(['/authentication'], { queryParams: { returnUrl: state.url } });
        }
        return isAuthenticated;
    }
}