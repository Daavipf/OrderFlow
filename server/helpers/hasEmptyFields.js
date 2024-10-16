module.exports = function hasEmptyFields(object){
  for(const field in object){
    if(object[field] == "" || object[field] == null){
      return true
    }
    return false
  }
}