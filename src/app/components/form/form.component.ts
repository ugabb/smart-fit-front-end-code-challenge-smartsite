import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  horarios = [
    {
      periodo: 'Manhã',
      hora: '06:00 às 12:00',
    },
    {
      periodo: 'Tarde',
      hora: '12:01 às 18:00',
    },
    {
      periodo: 'Noite',
      hora: '18:01 às 23:00',
    },
  ];

  constructor(private fb: FormBuilder) {}

  form: FormGroup = this.fb.group({
    periodo: '',
    situacao: false,
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
