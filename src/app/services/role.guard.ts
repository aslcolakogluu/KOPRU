import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // Giriş yapılmamışsa returnUrl ile login'e yönlendir
    if (!authService.isLoggedIn()) {
        return router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    }

    const expectedRole = route.data['role'];
    const user = authService.currentUser();

    if (user && user.role === expectedRole) {
        return true;
    }

    // Rol uyuşmuyorsa kayıt sayfasına yönlendir
    return router.navigate(['/register']);
};
