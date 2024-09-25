var wmsSource = new ol.source.TileWMS({
    url: "https://ahocevar.com/geoserver/wms",
    // url: "https://basemap.nationalmap.gov:443/arcgis/services/USGSTNMBlank/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=11",
    // url: "https://www.mrlc.gov/geoserver/ows?service=WMS&version=1.3.0&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=NLCD_Land_Cover",
    params: { LAYERS: "ne:ne", TILED: true },
    serverType: "geoserver",
    crossOrigin: "anonymous"
});

var wmsLayer = new ol.layer.Tile({
  source: wmsSource
});

var map = new ol.Map({
    target: "map", 
    layers: [wmsLayer], 
    view: new ol.View({
        center: [-11721159.665362068, 4833266.172528265],
        // center: [-105.4, 40], 
        zoom: 5
    })
});