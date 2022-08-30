import  {  Component,  Output,  EventEmitter  }  from  '@angular/core';

@Component({
    selector:  'app-usernname',
    templateUrl:  './usernname.component.html',
    styleUrls:  ['./usernname.component.scss']
})
export  class  UsernnameComponent  {
    @Output()  userNameEvent  =  new  EventEmitter<string>();
    userName :any ='';
    name:any = () =>{
    this.userName = prompt("Enter Name");
    this.setUserName();
    }


    constructor()  {  }
    ngOnInit() :void {
        this.name();
    }

    setUserName():  void  {
        this.userNameEvent.emit(this.userName);
    }

}
