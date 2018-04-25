import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculatorComponent } from '../../modules/calculator/calculator.component';
import { CalculatorService } from '../../core/services/calculator.service';
import { HeaderComponent } from '../../modules/header/header.component';
import { FooterComponent } from '../../modules/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CalculatorComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    CalculatorComponent,
    HeaderComponent,
    FooterComponent,
    FormsModule
  ],
  providers: [
    CalculatorService
  ]
})
export class CoreModule { }
