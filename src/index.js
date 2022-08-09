module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let stack = [];
  let bracketsList = {};
  let sameBrackets = [];
  
  for(let i = 0; i < bracketsConfig.length; i++){
    openBrackets.push(bracketsConfig[i][0]);
    bracketsList[bracketsConfig[i][1]] = bracketsConfig[i][0];
    if(bracketsConfig[i][0] = bracketsConfig[i][1]){
      sameBrackets.push(bracketsConfig[i][0])
    }
  }
  
 
  
  for(let i = 0; i < str.length; i++){
    let currentBrackets = str[i];
    // if(openBrackets.indexOf(currentBrackets) != -1) {
    if(openBrackets.includes(currentBrackets)){
      stack.push(currentBrackets);
      if(sameBrackets.includes(currentBrackets) && currentBrackets === stack[stack.length - 2]){
        // if(sameBrackets.indexOf(currentBrackets) != -1 && currentBrackets === stack[stack.length - 2]){
        stack.pop()
        stack.pop()
      }
    }else{
      if(stack.length === 0){
        return false;
      }
      let lastBrackets = stack[stack.length - 1];
      if(bracketsList[currentBrackets] === lastBrackets){
        stack.pop()
      }else{
        return false;
      }
    }
  }
 return stack.length === 0;
}
