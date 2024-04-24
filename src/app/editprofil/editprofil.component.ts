import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.component.html',
  styleUrls: ['./editprofil.component.scss']
})
export class EditprofilComponent implements OnInit {
  @Input() array: any = null;

  constructor() { }

  ngOnInit(): void {
  }
}