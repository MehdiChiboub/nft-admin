import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentCollectionsComponent } from './recent-collections.component';

const routes: Routes = [{ path: '', component: RecentCollectionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentCollectionsRoutingModule { }
