class Formatter {
  static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\s-' ]/g, "");
  }
  static titleize(string) {
    let smallWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = string.split(" ")

    let newArr = [this.capitalize(words[0])]

    for (let i = 1; i<words.length; i++) { 
      
            if (smallWords.includes(words[i])) {
            newArr.push(words[i])
            } else {
            newArr.push(this.capitalize(words[i]))
            }
      }
      return  newArr.join(" ")
    
  }
  
  
 }

      
       
      