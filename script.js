var wmsSource = new ol.source.TileWMS({
    // url: "https://ahocevar.com/geoserver/wms",
    url: "https://manifold.net/ims9/wms",
    params: { LAYERS: "map", TILED: true },
    // serverType: "geoserver",
    // crossOrigin: "anonymous"
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
        // center: ol.proj.fromLonLat([-105.4, 40]), 
        // center: ol.proj.fromLonLat([-98.5795, 39.8283]),
        zoom: 5
    })
});