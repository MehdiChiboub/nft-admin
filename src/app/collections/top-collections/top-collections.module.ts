import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopCollectionsRoutingModule } from './top-collections-routing.module';
import { TopCollectionsComponent } from './top-collections.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TopCollectionsComponent
  ],
  imports: [
    CommonModule,
    TopCollectionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class TopCollectionsModule { }
