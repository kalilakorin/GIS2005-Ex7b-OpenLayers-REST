var wmsSource = new ol.source.TileWMS({
    url: "https://manifold.net/ims9/wms",
    params: { LAYERS: "map", TILED: true },
    ratio: 1,
    transition: 0
});

var wmsLayer = new ol.layer.Tile({
  source: wmsSource
});

var map = new ol.Map({
    target: "map", 
    layers: [wmsLayer], 
    view: new ol.View({
        center: [-11721159.665362068, 4833266.172528265],
        zoom: 5
    })
});