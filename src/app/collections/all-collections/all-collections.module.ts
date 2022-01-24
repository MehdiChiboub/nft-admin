import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCollectionsRoutingModule } from './all-collections-routing.module';
import { AllCollectionsComponent } from './all-collections.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AllCollectionsComponent],
  imports: [
    CommonModule,
    AllCollectionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
})
export class AllCollectionsModule {}
