import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm:FormGroup;
  listData:any;
  
constructor(private fb:FormBuilder  ){

    this.listData = [];

    this.userForm = this.fb.group({
      name : ['', Validators.required],
      surname : ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
      
    })
  }

  addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
  reset(){
    this.userForm.reset();
  }
  removeItems(element:any){
    this.listData.forEach((value:any,dex:any) => {
      if(value == element){
        this.listData.splice(dex,1)
      }
    });
  }
  ngOnInit(): void {
  }
}

  



