import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  validateForm!: FormGroup;
  submitForm(value: { title: string }): void {
    for (const k in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(k)) {
        this.validateForm.controls[k].markAsDirty();
        this.validateForm.controls[k].updateValueAndValidity();
      }
    }
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
    });
  }
}
