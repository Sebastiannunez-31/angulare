import { Component } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
 selector:'exe-app',
 templateUrl:'./executives.component.html',
 styleUrls:['./executives.component.css']



})

export class ExecutivesComponent{
    isChecked = true;
    formGroup: FormGroup;


}