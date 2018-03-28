import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenChildComponent } from './conten-child/conten-child.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [] )
  ],
  declarations: [ContenChildComponent]
})
export class ContentChildSampleModule { }
