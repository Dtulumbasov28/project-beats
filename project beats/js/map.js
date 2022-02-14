let myMap;

const init = () => {
myMap = new ymaps.Map("map", {
  center: [57.152985,65.541227],
  zoom: 12,
  // controls: []
})

const coords = [
  [57.1460, 65.5224],
  [57.1444, 65.5599],
  [57.1110, 65.5912],
  [57.1753, 65.6570]
];

  const myCollection = new ymaps.GeoObjectCollection({},{
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "../img/marker.svg",
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  coords.forEach(coord => {
    myCollection.add( new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');

}

ymaps.ready(init);