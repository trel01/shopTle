import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'] // แก้ styleUrl เป็น styleUrls
})
export class ProfilComponent implements OnInit {

  array = { // ใช้วงเล็บปีกกา {} ไม่ใช่ []
    name: "tle",
    gender: "man",
    age: 21,
    Email: "akada.tan@gmail.com ",
    phone: "065-362-7229",
    address: "House No. 48/16, Nong Saeng VillageKhwao Rai Sub-district, Na Chueak DistrictMaha Sarakham Province, 44170"
  }
  // resultComponent(event:any){
  //   console.log(event)
  //   this.array.name = event.name
  // }
  

  constructor() { }

  ngOnInit(): void {
  }

  getProfile() {
    return this.array;
  }
}