import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

   @Input() name: string = '';


    show = true;
  username = 'Sagar';

 
  toggleComponent() {
    this.show = !this.show;
  }
  constructor() {
    console.log('Constructor called');
  }
  
  courseName = "Angular Full course"

  changeCourse(name:string){
    this.courseName= name;
    alert(this.courseName)
    
  }


  ngOnChanges() {
    console.log('ngOnChanges called - Input changed:', this.name);
  }

  ngOnInit() {
    console.log('ngOnInit called - Component initialized');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called - Component destroyed');
  }


  
}
