import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import Vector from 'ol/layer';
import VectorLayer from 'ol/layer/Vector';
import VectorSource, { VectorSourceEvent } from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import Circle from 'ol/geom/Circle';
import {Fill, Stroke, Style} from 'ol/style';
import Feature from 'ol/Feature';

const calPoly = [-120.658, 35.299];
const calPolyWM = fromLonLat(calPoly);

const chiTown = [-87.732043, 41.833751];
const chiTownWM = fromLonLat(chiTown);

const oc = [-117.769390, 33.641360];
const ocWM = fromLonLat(oc);

const sj = [-121.843700, 37.317752];
const sjWM = fromLonLat(sj);

// var circle = new ol.geom.Circle(calPolyWM, 300);
// var circleFeature = new ol.Feature(circle);


var map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }) 
   ],
  view: new View({
    center: calPolyWM,
    zoom: 6.5
  })
});

var layer1 = new VectorLayer({
  source: new VectorSource({
    projection: 'EPSG:4326',
    // radius = 4000 meters
    features: [new Feature(new Circle(calPolyWM, 60000))]
  }),
  style: [
    new Style({
      stroke: new Stroke({
        color: 'purple',
        width: 3
      }),
      fill: new Fill({
        color: 'rgba(0, 0, 255, 0.1)'
      })
    })
  ]
});

var layer2 = new VectorLayer({
  source: new VectorSource({
    projection: 'EPSG:4326',
    // radius = 4000 meters
    features: [new Feature(new Circle(chiTownWM, 20000))]
  }),
  style: [
    new Style({
      stroke: new Stroke({
        color: 'red',
        width: 3
      }),
      fill: new Fill({
        color: 'rgba(0, 0, 255, 0.1)'
      })
    })
  ]
});

var layer3 = new VectorLayer({
  source: new VectorSource({
    projection: 'EPSG:4326',
    features: [new Feature(new Circle(sjWM, 20000))]
  }),
  style: [
    new Style({
      stroke: new Stroke({
        color: 'yellow',
        width: 3
      }),
      fill: new Fill({
        color: 'rgba(0, 0, 255, 0.1)'
      })
    })
  ]
});

var layer4 = new VectorLayer({
  source: new VectorSource({
    projection: 'EPSG:4326',
    // radius = 4000 meters
    features: [new Feature(new Circle(ocWM, 20000))]
  }),
  style: [
    new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 3
      }),
      fill: new Fill({
        color: 'rgba(0, 0, 255, 0.1)'
      })
    })
  ]
});

map.addLayer(layer1);
map.addLayer(layer2);
map.addLayer(layer3);
map.addLayer(layer4);