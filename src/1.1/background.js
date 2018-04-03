/*
* @Author: Glen McMahon
* @Date:   03/04/2018
*/

// Parametres
var title = 'FiveLife';
var message = 'FiveLife est en live !';
var url_site = 'https://www.twitch.tv/fivelifegta';

// check live status

$.getJSON('https://api.twitch.tv/kraken/streams/Amouranth', function(channel) {

    if (channel["stream"] == null) { 
        title = "FiveLife";
			chrome.browserAction.setTitle({title: title});
			chrome.browserAction.setIcon({"path":"live_off.png"});

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
