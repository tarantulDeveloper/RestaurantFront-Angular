import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthServiceService } from './services/auth-service.service';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './guards/auth.interceptor';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AlreadyExistsComponent } from './already-exists/already-exists.component';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderService } from './loader/loader.service';
import { InterceptorService } from './loader/interceptor.service';
import { WrongCredentialsComponent } from './wrong-credentials/wrong-credentials.component';
import { ManagerComponent } from './manager/manager.component';
import { UpdateManagerComponent } from './manager/update-manager/update-manager.component';
import { HrComponent } from './hr/hr.component';
import { UpdateHrComponent } from './hr/update-hr/update-hr.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserDataComponent } from './user/user-data/user-data.component';
import { BranchesComponent } from './branches/branches.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { FinanceComponent } from './finance/finance.component';
import { MarketingComponent } from './finance/marketing/marketing.component';

import { EquipmentComponent } from './finance/equipment/equipment.component';
import { NotEnoughComponent } from './finance/not-enough/not-enough.component';
import { MarketologComponent } from './marketolog/marketolog.component';
import { DefaultUserComponent } from './default-user/default-user.component';
import {MatSortModule} from '@angular/material/sort';
import { SalaryComponent } from './finance/salary/salary.component'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    ForbiddenComponent,
    UpdateComponent,
    AlreadyExistsComponent,
    WrongCredentialsComponent,
    ManagerComponent,
    UpdateManagerComponent,
    HrComponent,
    UpdateHrComponent,
    TasksComponent,
    UserDataComponent,
    BranchesComponent,
    AddLocationComponent,
    FinanceComponent,
    MarketingComponent,
    EquipmentComponent,
    NotEnoughComponent,
    MarketologComponent,
    DefaultUserComponent,
    SalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSortModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    AuthServiceService,
    EmployeeService,
    LoaderService,
    InterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
