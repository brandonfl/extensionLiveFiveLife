/*
* @Author: Knonn
* @Date:   2015-09-06 17:51:22
* @Last Modified by:   Knonn
* @Last Modified time: 2015-09-13 14:22:24
*/

// Parameters
var YOUR_CHANNEL_NAME = 'ubisoft';
var key_skyyart = 'x2m6m14';
var title = 'Skyyart - Offline';
var message = 'Skyyart est en live !';
var url_site = 'http://skyyart.fr/';
var count = 0;
var ct = 60000;
var live = false;

// Core function check live status
function checkLive() {
	var statuslink = 'https://api.twitch.tv/kraken/streams/' + YOUR_CHANNEL_NAME, function(channel) {
	$.getJSON(statuslink, function (json) {
		live = json.onair;
		console.log(live);
	});
	setTimeout(livechange, 2000);
};

function livechange() {
	if (live) {
		if (count < 1) {
			title = "Skyyart - Online";
			chrome.browserAction.setTitle({title: title});
			chrome.browserAction.setIcon({"path":"live_on.png"});
			chrome.notifications.create('notifsky', {type: "basic", title: title, message: message, iconUrl: "live_on.png"});
			count = 1;
		};
		if (ct != 300000) {
			ct = 300000;
			clearInterval(interval);
			interval = setInterval(checkLive, ct);
		};
	} else {
		if (count == 1){
			title = "Skyyart - Offline";
			chrome.browserAction.setTitle({title: title});
			chrome.browserAction.setIcon({"path":"live_off.png"});
			count = 0;
		}
		if (ct != 60000) {
			ct = 60000;
			clearInterval(interval);
			interval = setInterval(checkLive, ct);
		}
	}
};

// Listener on the button
chrome.browserAction.onClicked.addListener(function(activeTab){
	chrome.tabs.create({url: url_site});
});

// Listener on the notification
chrome.notifications.onClicked.addListener(function(activeTab){
	chrome.tabs.create({url: url_site});
});

// Fix icon bug on some chrome versions
chrome.browserAction.setIcon({"path":"live_off.png"});

// Start app
checkLive();
var interval = setInterval(checkLive, ct);