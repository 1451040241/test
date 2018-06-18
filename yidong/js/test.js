// var lilie = {
//   sname:'lilei',
//   age:11,
//   intrseif:function(){
//     console.log('this is lilei')
//   }
// }
// alert(lilie.sname);

// var hmm = {
//   sname:'hanmeimei',
//   age:12,
//   intrseif:function(){
//     console.log('this is hanmeimei')
//   }

// }
// alert(hmm.sname);


function student(gg,sname,age,info){
  this.sname=sname;
  this.age=age;
  this.info=info;
}
var lilei = new student("lilei",12);
var hmm = new student("hanmeimei",13);

delete lilei.lilei;
console.log(lilei);
console.log(hmm);

student.prototype.money=100;

var F= function () {};
var f=new F();
Object.getPrototypeOf(f) ===F.prototype  //true

Object.getPrototypeOf({})===Object.prototype //true

Object.getPrototypeOf(Object.prototype) === null //true

Object.getPrototypeOf(f)===Functjion.prototype //true

