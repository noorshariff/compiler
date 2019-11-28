import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  name : any=[];
  name2:any=[];
  color:any=[];
  isActive;

   constructor(){
    
   }
perl(){
  this.name='PERL';  
   
}
fortran()
{
  this.name='FORTRAN';
  
}
python(){
  this.name='PYTHON';

}
scala(){
  this.name='SCALA';
  
}
cobol(){
  this.name='COBOL';

}
nodejs(){
  this.name='NODEJS';

}
pascal(){
  this.name='PASCAL';
}
closure(){
  this.name='CLOSURE';
}
kotlin(){
  this.name='KOTLIN';
}
smalltalk(){
 this.name='SMALLTALK';
}
groovy(){
  this.name='GROOVY';
}
pike(){
  this.name='PIKE';
}
racket(){
  this.name='RACKET';
}
prolog(){
  this.name='PROLOG';
}
octave(){
  this.name='OCTAVE';
}
coffeescript(){
  this.name='COFFESCRIPT';
}
objectivec(){
  this.name='OBJECTIVEC';
}
clisp(){
this.name='CLISP';
}
elixr(){
  this.name='ELIXR';
}
lolcode(){
  this.name='LOLCODE';
}
rust(){
  this.name='RUST';
}
r(){
  this.name='R'
}
c(){
  this.name='C#';
}
f(){
 this.name='F#';
} 

hide(){

 this.name2='';
this.name=this.name2;

 
 

}
hide1(){
 this.name='C ';
}
hide2(){
this.name='C++';

}
hide3(){
this.name='JAVA';
}
hide4(){
this.name='PYTHON2';
}

hide5(){
this.name='PHP';
}
hide6(){
this.name='RUBY';
}
hide7(){
this.name='Visual Basic.NET';
}


downloadData(){
alert('hjbfvhjf')
// if(name==''){
//   alert('filename connot be blank');
// }
}




ngOnInit(){

}

}
