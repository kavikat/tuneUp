/** tuneUp Chrome Extension**
****@date 03/12/2016
****@author Kavika Tavui
****@email kavikaat@gmail.com
*/
if(document.getElementsByClassName("line1 _navigateNowPlaying")[0].innerHTML != null){
  var query = document.getElementsByClassName("line1 _navigateNowPlaying")[0].innerHTML;

  console.log(query);

  var url = "https://soundcloud.com/search/sounds?q=" + query;
  window.open(url, '_blank');

  }else {
    query = document.getElementsByClassName("line1 _navigateNowPlaying clearfix")[0].innerHTML;
    //
    console.log(query);
    
    var url = "https://soundcloud.com/search/sounds?q=" + query;
    window.open(url, '_blank');
}

/*TODO add query xpath for site url if song metadata isnt present
XPATH for now playing //*[@id="content"]/div[3]/div/div[2]/div[2]/div[2]/ul/li[5]/a[1]
XPATH for ADP    "//*[@id="main"]/div[1]/p/a"
*/
