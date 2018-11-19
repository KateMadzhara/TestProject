var homePage = function() {

    this.text = element(by.xpath('/html/body/div[3]/div/div/div/p[1]')).getText();
    
}
  
  module.exports = new homePage();