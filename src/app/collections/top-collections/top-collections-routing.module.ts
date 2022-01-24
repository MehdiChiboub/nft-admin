import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopCollectionsComponent } from './top-collections.component';

const routes: Routes = [{ path: '', component: TopCollectionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopCollectionsRoutingModule { }
