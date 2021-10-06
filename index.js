class Formatter {
  static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\s-' ]/g, "");
  }
  static titleize(string) {
    let words = string.toLowerCase().split(" ")
    
  for (let i=0; i<words.length; i++) {
      
       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
     
         
    }
     return words.join(" ");
  }
 }

      
       
      