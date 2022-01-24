import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentCollectionsRoutingModule } from './recent-collections-routing.module';
import { RecentCollectionsComponent } from './recent-collections.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RecentCollectionsComponent
  ],
  imports: [
    CommonModule,
    RecentCollectionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class RecentCollectionsModule { }
