var map;
var infowindow;

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var current = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var map = new google.maps.Map(document.getElementById('map'), {
                center: current,
                zoom: 15
            });

            var currentMarker = new google.maps.Marker({
                position: current,
                title: 'Vị trí hiện tại',
                draggable: false,
                animation: google.maps.Animation.DROP,
                icon: '../imgs/current-location.png',
                map: map
            });

            var currentInfo = new google.maps.InfoWindow({
                content: '<strong>Vị trí hiện tại của bạn</strong>'
            });


            infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location: current,
                radius: 500,
                type: ['restaurant']
            }, callback);

            toggleInfo(currentMarker, currentInfo);

            function callback(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                }
            }

            function createMarker(place) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: '../imgs/large.png'
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent(place.name);
                    infowindow.open(map, this);
                });
            }
        });
    }

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 16.056302, lng: 108.223697},
        zoom: 15
    });

    var aptechMarker = new google.maps.Marker({
        position: {lat: 16.056302, lng: 108.223697},
        title: 'Aptech Đà Nẵng',
        map: map
    });

    var aptechInfo = new google.maps.InfoWindow({
        content: '<strong>HỆ THỐNG ĐÀO TẠO CNTT<br>QUỐC TẾ SOFTECH APTECH</strong>'
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: {lat: 16.056302, lng: 108.223697},
        radius: 1000,
        type: ['restaurant']
    }, callback);

    toggleInfo(aptechMarker, aptechInfo);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: '../imgs/large.png'
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }
}

function toggleInfo(marker, infoMarker) {
    marker.addListener('click', function () {
        infoMarker.open(map, this);
        setTimeout(function () {
            infoMarker.close();
        }, 4000);
    });
}

