import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { requiredTrim } from '../../index'

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <form [formGroup]="exampleForm">
        <div class="row" style="font-weight: bold;">
          <div class="col-xs-4">
          </div>
          <div class="col-xs-4">
            Validator
          </div>
          <div class="col-xs-4">
            Current state
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-4">
            <input class="form-control" formControlName="name">
          </div>
          <div class="col-xs-4">
            requiredTrim
          </div>
          <div class="col-xs-4">
            {{exampleForm.controls['name'].errors | json}}
          </div>
        </div>
      </form>
    </div>
  `
})
export class AppComponent {

  public exampleForm = this.formBuilder.group({
    name: ['', requiredTrim]
  })

  constructor (private formBuilder: FormBuilder) { }
}
