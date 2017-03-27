function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = '2G telephone network';
    states[Connection.CELL_3G]  = '3G telephone network';
    states[Connection.CELL_4G]  = '4G telephone network';
    states[Connection.CELL]     = 'Telephone network';
    states[Connection.NONE]     = 'No connection';

    navigator.notification.alert('Connection type: ' + states[networkState]);
}
}