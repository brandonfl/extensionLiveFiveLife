/*
* @Author: Glen McMahon
* @Date:   05/04/2018
*/

// Parametres
var title = 'FiveLife';
var message = 'FiveLife est en live !';
var url_site = 'https://www.twitch.tv/fivelifegta';

// check live status

$.getJSON('https://api.twitch.tv/kraken/streams/fivelifegta?client_id=5gcmf5rxph8zjlif4k1w013pfuvvmp', function(channel) {
	
    if (channel["stream"] == null) { 
	
        $.getJSON('https://lspd-fivelife.fr/api/check_hosting.php?id=1&password=bourlay&id=211293297', function(data) {
			
	if (data["success"] == false) { 
		title = "FiveLife TV Offline";
			chrome.browserAction.setTitle({title: title});
			chrome.browserAction.setIcon({"path":"live_off.png"});
    } else {
		title = "FiveLife TV Hosting";
			chrome.browserAction.setTitle({title: title});
			chrome.browserAction.setIcon({"path":"live_on.png"});
			chrome.notifications.create('notifsky', {type: "basic", title: title, message: message, iconUrl: "live_on.png"})
       
    }
	

});

    } else {

        title = "FiveLife TV Online";
			chrome.browserAction.setTitle({title: title});
			chrome.browserAction.setIcon({"path":"live_on.png"});
			chrome.notifications.create('notifsky', {type: "basic", title: title, message: message, iconUrl: "live_on.png"});
		
    }



});



// Bouton
chrome.browserAction.onClicked.addListener(function(activeTab){
	chrome.tabs.create({popup: popup.html});
});

// Notification
chrome.notifications.onClicked.addListener(function(activeTab){
	chrome.tabs.create({url: url_site});
});

// Debug Icon
chrome.browserAction.setIcon({"path":"live_off.png"});
