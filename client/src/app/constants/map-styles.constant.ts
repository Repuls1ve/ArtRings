export interface MapTypeStyle {
  elementType?: 'all' | 'geometry' | 'geometry.fill' | 'geometry.stroke' | 'labels' | 'labels.icon' |
      'labels.text' | 'labels.text.fill' | 'labels.text.stroke'
  featureType?: 'administrative' | 'administrative.country'|'administrative.land_parcel' |
      'administrative.locality' | 'administrative.neighborhood' | 'administrative.province'|'all' |
      'landscape' | 'landscape.man_made' | 'landscape.natural' | 'landscape.natural.landcover' |
      'landscape.natural.terrain' | 'poi' | 'poi.attraction' | 'poi.business'|'poi.government' |
      'poi.medical' | 'poi.park' | 'poi.place_of_worship' | 'poi.school' | 'poi.sports_complex' | 'road' |
      'road.arterial' | 'road.highway' | 'road.highway.controlled_access' | 'road.local' | 'transit' |
      'transit.line' | 'transit.station' | 'transit.station.airport' | 'transit.station.bus' |
      'transit.station.rail' | 'water'
  stylers: MapTypeStyler[]
}

export interface MapTypeStyler {
  color?: string;
  gamma?: number;
  hue?: string;
  invert_lightness?: boolean;
  lightness?: number;
  saturation?: number;
  visibility?: string;
  weight?: number;
}

export const MapStyles: MapTypeStyle[] = [
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e9e9e9"
      },
      {
        "lightness": 17
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 17
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 29
      },
      {
        "weight": 0.2
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 18
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 21
        }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dedede"
      },
      {
        "lightness": 21
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#ffffff"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "saturation": 36
      },
      {
        "color": "#333333"
      },
      {
        "lightness": 40
      }
    ]
  },
  {
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f2f2f2"
      },
      {
        "lightness": 19
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#fefefe"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#fefefe"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
    ]
  }
]