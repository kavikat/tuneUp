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