/*
* @Author: Xelotimer
* @Date:   04/03/2016 22:31
* @Last Modified by:   Xelotimer
* @Last Modified time: 04/03/2016 23:55
*/

// Parametres
var title = 'Arkalys';
var message = 'Arkalys est en live !';
var url_site = 'http://www.twitch.tv/arkalysfr';

// check live status

$.getJSON('https://api.twitch.tv/kraken/streams/nvidiafrance', function(channel) {

    if (channel["stream"] == null) { 
            } else {
	    var html = '<p>test</p>';
    
    $(function(){

			var jsonObj = $.parseJSON('1');
			$.each(jsonObj, function(value){
				html});
			html ;

			$('div').html(html);
		});
    }



});