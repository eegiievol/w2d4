//Exercise 1
String.prototype.filter = function(word){
  
    return this.valueOf().split(" ")
      .filter(s => s!=word)
      .join(" ")
    ;    
  };

  //Exercise 2
  Array.prototype.bubbleSort = function(word){
    
      var arr = this.valueOf();
      var i, j;
      var len = arr.length;
      var isSwapped = false;
      for(i =0; i < len; i++){
        isSwapped = false;
        for(j = 0; j < len; j++){
            if(arr[j] > arr[j + 1]){
              var temp = arr[j]
              arr[j] = arr[j+1];
              arr[j+1] = temp;
              isSwapped = true;
            }
        }
        if(!isSwapped){
          break;
        }
      }
      return arr;
  };
  
  
  //Exercise 3 
  function Person(){
  }
  
  Person.prototype.setName = function(_name){
    this.name=_name;
  }
  
  function Teacher(){
  }
  Teacher.prototype = new Person();
  
  Teacher.prototype.teach = function(subject){
    return this.name + ' is now teaching ' + subject;
  };
  

