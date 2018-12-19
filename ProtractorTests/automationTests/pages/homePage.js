module.exports = {

  getText: function() {
    return element(by.xpath('/html/body/div[3]/div/div/div/p[1]')).getText()
  }  
}  
  