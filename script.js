var wmsSource = new ol.source.TileWMS({
    // url: "https://ahocevar.com/geoserver/wms",
    // url: "https://basemap.nationalmap.gov:443/arcgis/services/USGSTNMBlank/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=11",
    // url: "https://basemap.nationalmap.gov:443/arcgis/services/USGSTNMBlank/MapServer/WmsServer",
    // url: "https://www.mrlc.gov/geoserver/ows?service=WMS&version=1.3.0&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=NLCD_Land_Cover",
    // url: "https://www.mrlc.gov/geoserver/wms",
    // url: "https://www.mrlc.gov/geoserver/schemas/wms",
    // url: "http://www.esri.com/wms",
    // url: "http://www.opengis.net/wms",
    // url: "https://basemap.nationalmap.gov:443/arcgis/services/USGSTNMBlank/MapServer/WmsServer?version=1.3.0%26service=WMS%26request=GetSchemaExtension",
    // url: "https://basemap.nationalmap.gov:443/arcgis/services/USGSTNMBlank/MapServer/WmsServer",
    // url: "http://gisserver.domain.com:6080/arcgis/services/folder/service/MapServer/WMSServer",
    // url: "http://gisserver.domain.com:6080/arcgis/services/folder/service/MapServer/WMSServer?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&LAYERS=0&STYLES=&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:4326&BBOX=17.9995833333334,-161.000416666667,23.0004166666666",
    // url: "http://sampleserver1.arcgisonline.com/ArcGIS/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/WMSServer?version=1.3.0&request=GetMap&CRS=CRS:84&bbox=-178.217598,18.924782,-66.969271,71.406235&width=760&height=360&layers=0&styles=default&format=image/png",
    // url: "https://wms.gebco.net/mapserv",
    // url: "https://apps.nationalmap.gov/services/",
    // url: "https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    url: "https://manifold.net/ims9/wms",
    // params: { LAYERS: "ne:ne", TILED: true },
    // serverType: "geoserver",
    // crossOrigin: "anonymous"
});

var wmsLayer = new ol.layer.Tile({
  source: wmsSource
});

var map = new ol.Map({
    target: "map", 
    layers: [wmsLayer], 
    view: new ol.View({
        // center: [-11721159.665362068, 4833266.172528265],
        // center: [-105.4, 40], 
        center: ol.proj.fromLonLat([-98.5795, 39.8283]),
        zoom: 5
    })
});