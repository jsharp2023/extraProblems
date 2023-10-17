function isEvenlyDivisible(num1, num2) {
    if(num1 % num2 === 0) {
      return true
    }else{
    return false
    }
    }



function halfSquare(num) {
  if((num * num) /2 ){
    return(num * num)/2
  }
}

function isLong(str) {
    return str.length >= 15;
  
  }


function exclaim(str) {
  if(!str .endsWith('!')){
    return str + '!';
  }else if(str.endsWith('!!!!!!')){
    return str.replace('!!!!!!', '!')
  }else if(str.endsWith('!!')){
    return str.replace('!!','!')
  }
  return str;
}

function countWords(str) {
  let count = 0
  for(let i = 0; i < str.length; i++){
    if(str[i] === true){
      count++
    }
  }
  return count
}

function containsDigit(str) {
      if(str = ['a-z']){
        return true
        if(str = ['0-9']){
          return true
        }
      }
        
      
    
  }


  


function containsLowerCase(str) {
  return /[a-z]/.test(str)
}

function containsUpperCase(str) {
  return /[A-Z]/.test(str)
}

function containsNonAlphanumeric(str) {
  return /[^a-zA-Z0-9]/.test(str);
}

function containsSpace(str) {
  return str.includes(' ')
}

function digits(num) {
  return Array.from(String(num), Number)
}

function truncate(title) {
  return title.length > 15 ? title.slice(0, 8) + '...' : title;
}

function isValidPassword(password) {
  if(password.length >= 8 ){
    if(password !== password.toUpperCase()&& password !== password.toLowerCase())
    return true
  }else{
    return false
  }
  
}

function onlyPunchy(titles ) {
    if(titles.lenght <= 15){
      if(!titles.endsWith('!')){
        titles =+'!'
      }else{
        titles = titles.replace(/!=/g, '!')
      }
    }
  }



module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
