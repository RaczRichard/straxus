import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/common/login/login.component';
import {RegisterComponent} from './components/common/register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoggedOutGuard} from './guards/logged-out.guard';
import {ProfileComponent} from './components/common/profile/profile.component';
import {LoggedInGuard} from './guards/logged-in.guard';
import {MessagesComponent} from './components/common/messages/messages.component';
import {ChatComponent} from './components/common/chat/chat.component';
import {SearchComponent} from './components/common/search/search.component';
import {TokenInterceptor} from './utils/token.interceptor';
import {UsersComponent} from './components/admin/users/users.component';
// import {SettingsComponent} from './components/common/setting/setting.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggedOutGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoggedOutGuard]
    },
    {
        path: 'admin/users',
        component: UsersComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: 'search',
        component: SearchComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: 'chat-groups',
        component: MessagesComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: 'chat',
        component: ChatComponent,
        canActivate: [LoggedInGuard]
    },
    // {
    //     path: 'setting',
    //     component: SettingComponent,
    //     canActivate: [LoggedInGuard]
    // },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MessagesComponent,
    ChatComponent,
    SearchComponent,
    UsersComponent,
    // SettingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
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
