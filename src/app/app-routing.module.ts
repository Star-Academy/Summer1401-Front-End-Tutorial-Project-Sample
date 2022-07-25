import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
