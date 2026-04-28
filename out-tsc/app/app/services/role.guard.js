import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
export const roleGuard = (route) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    // First check if logged in
    if (!authService.isLoggedIn()) {
        return router.navigate(['/login']);
    }
    const expectedRole = route.data['role'];
    const user = authService.currentUser();
    if (user && user.role === expectedRole) {
        return true;
    }
    // If wrong role, redirect to home
    return router.navigate(['/']);
};
//# sourceMappingURL=role.guard.js.map