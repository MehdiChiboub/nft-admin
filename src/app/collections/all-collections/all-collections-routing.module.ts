import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCollectionsComponent } from './all-collections.component';

const routes: Routes = [{ path: '', component: AllCollectionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCollectionsRoutingModule { }
