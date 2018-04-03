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
        title = "Arkalys";
			chrome.browserAction.setTitle({title: title});
			chrome.browserAction.setIcon({"path":"live_off.png"});

    } else {

        title = "Arkalys WebTV Online";
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
