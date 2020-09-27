import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxCaptchaModule} from 'ngx-captcha';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/common/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoggedOutGuard} from './guards/logged-out.guard';
import {LoggedInGuard} from './guards/logged-in.guard';
import {TokenInterceptor} from './utils/token.interceptor';
import {AdminComponent} from './components/common/admin/admin.component';
import {UserComponent} from './components/common/user/user.component';
import {EditorComponent} from './components/common/editor/editor.component';
import {DashboardComponent} from './components/common/dashboard/dashboard.component';
import {BotDetectCaptchaModule} from 'angular-captcha';
import {RoleGuard} from "./guards/role.guard";


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggedOutGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [LoggedInGuard, RoleGuard],
        data: {role: ['admin']}
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [LoggedInGuard, RoleGuard],
        data: {role: ['user']}
    },
    {
        path: 'editor',
        component: EditorComponent,
        canActivate: [LoggedInGuard, RoleGuard],
        data: {role: ['editor']}
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [LoggedInGuard]
    },
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AdminComponent,
        UserComponent,
        EditorComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        NgxCaptchaModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        BotDetectCaptchaModule
    ],
    exports: [RouterModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
