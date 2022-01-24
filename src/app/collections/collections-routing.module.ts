import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent,
    children: [
      {
        path: 'all-collections',
        loadChildren: () =>
          import('./all-collections/all-collections.module').then(
            (m) => m.AllCollectionsModule
          ),
      },
      {
        path: 'recent-collections',
        loadChildren: () =>
          import('./recent-collections/recent-collections.module').then(
            (m) => m.RecentCollectionsModule
          ),
      },
      {
        path: 'top-collections',
        loadChildren: () =>
          import('./top-collections/top-collections.module').then(
            (m) => m.TopCollectionsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
