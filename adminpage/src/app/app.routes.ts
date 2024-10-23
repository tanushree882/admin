import { NgModule } from '@angular/core';
import { AddComponent } from '../admin/add/add.component';
import { DeleteComponent } from '../admin/delete/delete.component';
import { UpdateComponent } from '../admin/update/update.component';
import { ListComponent } from '../admin/list/list.component';
import { RewardComponent } from '../admin/rewards/rewards.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'add', component:AddComponent },
  { path: 'delete', component: DeleteComponent},
  { path: 'update/:id', component: UpdateComponent },
  { path: 'list', component: ListComponent },
  { path: 'rewards', component: RewardComponent },
  { path: '', redirectTo: '/list ', pathMatch: 'full' }
];

//  @NgModule({
//    imports: [RouterModule.forRoot(routes)],
//    exports: [RouterModule]
//  })
//  export class AppRoutingModule {}
