function mySet( arregloarray ){
 this.size = 0;
 this.set = {};
 
 if ( arregloarray  )
   for ( var i = 0 ; i < arregloarray.length; i++ ){
     this.add( arregloarray[i] );
   }
 
}

var setA = new mySet();
var setB = new mySet();

setA.intersection( setB );


mySet.prototype.intersection = function( setB ){
   
   var intersection = [];
   for ( var item in setB.set ){
     if ( this.has( item ) )
       intersection.push(item);
       //intersection.add( item );
   }
 return intersection;
}

mySet.prototype.add = function( value ){
   if ( !this.has( value ) ){
      this.set[value] = value;
      this.size++;
   }

}

mySet.prototype.delete = function( value ){
 var hasvalue = this.has(value);
 if ( hasvalue ){
   delete this.set[value];
   this.size--;
 }
 return hasvalue;
}

mySet.prototype.has = function( value ){
 return this.set.hasOwnProperty( value );
}

mySet.prototype.clear = function(){
 this.set = {};
 this.size = 0;
 return "esta limpio";
}

var ms = new mySet([1,2,3]);
ms;

var set1 = new mySet([1,2,3,5]);
set1;

var set2 = new mySet([2,3,6,7]);
set2;

set1.intersection( set2 );