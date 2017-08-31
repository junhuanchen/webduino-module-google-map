+(function (window, document, $, gmaps) {

  'use strict';

  var geocoder = new gmaps.Geocoder();

  function createMap(options) {
    var div = document.createElement('div'),
      map = new gmaps.Map(div, options);

    document.body.appendChild(div);
    $(div).height('300px');

    gmaps.event.addDomListener(window, 'resize', function () {
      var center = map.getCenter();
      gmaps.event.trigger(map, 'resize');
      map.setCenter(center);
    });

    return map;
  }

  function createMarker(map, location) {
    var marker = new gmaps.Marker({
      position: location,
      map: map
    });

    map.infoWindow = map.infoWindow || new gmaps.InfoWindow();
    marker.addListener('click', function () {
      showInfo(marker);
    });

    return marker;
  }

  function showInfo(marker) {
    if (marker.infoContent) {
      var map = marker.getMap();
      map.infoWindow.setContent(marker.infoContent);
      map.infoWindow.open(map, marker);
    }
  }

  function hideInfo(marker) {
    marker.getMap().infoWindow.close();
  }

  function geocode(address) {
    return new Promise(function (resolve) {
      geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
          resolve(results[0].geometry.location);
        } else {
          resolve({
            lat: -1,
            lng: -1,
            reason: status
          });
        }
      })
    });
  }

  function reverseGeocode(location) {
    return new Promise(function (resolve) {
      geocoder.geocode({ 'location': location }, function (results, status) {
        if (status === 'OK') {
          if (results[1]) {
            resolve(results[1].formatted_address);
          } else {
            resolve({
              address: '',
              reason: 'No results found'
            });
          }
        } else {
          resolve({
            address: '',
            reason: status
          })
        }
      })
    });
  }

  function getCurrentPosition() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve({ lat: position.coords.latitude, lng: position.coords.longitude });
      }, function () {
        console && console.log('Cannot get current position!');
        reject();
      }, {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      });
    });
  }

  window.createMap = createMap;
  window.createMarker = createMarker;
  window.showInfo = showInfo;
  window.hideInfo = hideInfo;
  window.geocode = geocode;
  window.reverseGeocode = reverseGeocode;
  window.getCurrentPosition = getCurrentPosition;

}(window, window.document, window.jQuery, window.google.maps));
