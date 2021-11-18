export class Student{
   stdid:number; 
    stdname:string; 
    stdclass:any;
    constructor(data?:any){
        this.stdid=data.stdid || 1234;
        this.stdname=data.stdname || 'Sarayu';
        this.stdclass=data.stdclass || 'btech';   
    }  
   }