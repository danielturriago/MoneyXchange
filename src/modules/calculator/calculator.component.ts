import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../core/services/calculator.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {

  public calcInput: string;
  public calcResult: string;
  public errorMessage: boolean = false;

  private keepRate: boolean = false;
  private changeRate: number; 

  constructor( private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  public calculateChangeRate(price: string): void {
    if (!isNullOrUndefined(price))  {
      const _numberPrice = Number(this.calcInput.replace(/[^0-9\.-]+/g,""));

      if (isNullOrUndefined(this.changeRate) && !this.keepRate) {
        this.calculatorService.fetchChangeRate()
          .subscribe( data => {
            this.changeRate = data.rates['EUR'];
            this.keepRate = true;
            this.calcResult = this.calcChange(_numberPrice);
            setTimeout(() => {
              this.keepRate = false;
            }, 600000);
        });
      } else
          this.calcResult = this.calcChange(_numberPrice);
    } else {
      this.errorMessage = true;

      setTimeout(() => {
        this.errorMessage = false;
      }, 2000);
    }

  }

  public focusOut(): void {
    this.calcInput = Number(this.calcInput.replace(/[^0-9\.-]+/g,"")).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  private calcChange(price: number): string {
    return (price * this.changeRate).toLocaleString('en-US', { style: 'currency', currency: 'EUR' })
  }

}
