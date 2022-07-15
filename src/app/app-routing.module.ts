import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { UpdateComponent } from './update/update.component';
import { RegisterComponent } from './register/register.component';
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
import { MarketologComponent } from './marketolog/marketolog.component';
import { DefaultUserComponent } from './default-user/default-user.component';
import { EquipmentComponent } from './finance/equipment/equipment.component';
import { SalaryComponent } from './finance/salary/salary.component';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminComponent, canActivate:[AuthGuard],data:{roles:['ADMIN']}},
  {path:'forbidden', component: ForbiddenComponent},
  {path:'update/:userName',component: UpdateComponent, canActivate:[AuthGuard],data:{roles:['ADMIN']}},
  {path:'register',component:RegisterComponent},
  {path:'manager',component:ManagerComponent,canActivate:[AuthGuard],data:{roles:['MANAGER']}},
  {path:'update-manager/:userName',component:UpdateManagerComponent,canActivate:[AuthGuard],data:{roles:['MANAGER']}},
  {path:'hr',component:HrComponent,canActivate:[AuthGuard],data:{roles:['HR']}},
  {path:'update-hr/:userName',component:UpdateHrComponent,canActivate:[AuthGuard],data:{roles:['HR']}},
  {path:'task-employee/:userName',component:TasksComponent},
  {path:'user/:userName',component:UserComponent},
  {path:'user-data/:userName',component:UserDataComponent},
  {path:'branches',component:BranchesComponent},
  {path:'add-location/:locationName/:region',component:AddLocationComponent},
  {path:'finance',component:FinanceComponent},
  {path:'marketing',component:MarketingComponent, canActivate:[AuthGuard],data:{roles:['ADMIN']}},
  {path:'marketolog',component:MarketologComponent},
  {path:'equipment',component:EquipmentComponent},
  {path:'default-user',component:DefaultUserComponent},
  {path:'salary',component:SalaryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
