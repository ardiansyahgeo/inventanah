var wms_layers = [];


        var lyr_SatelitdanMaps_0 = new ol.layer.Tile({
            'title': 'Satelit dan Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Satelit_1 = new ol.layer.Tile({
            'title': 'Satelit',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LOKASIPRIORITAS_2 = new ol.format.GeoJSON();
var features_LOKASIPRIORITAS_2 = format_LOKASIPRIORITAS_2.readFeatures(json_LOKASIPRIORITAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOKASIPRIORITAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOKASIPRIORITAS_2.addFeatures(features_LOKASIPRIORITAS_2);
var lyr_LOKASIPRIORITAS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOKASIPRIORITAS_2, 
                style: style_LOKASIPRIORITAS_2,
                interactive: true,
                title: '<img src="styles/legend/LOKASIPRIORITAS_2.png" /> LOKASI PRIORITAS'
            });
var format_BatasRT_3 = new ol.format.GeoJSON();
var features_BatasRT_3 = format_BatasRT_3.readFeatures(json_BatasRT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRT_3.addFeatures(features_BatasRT_3);
var lyr_BatasRT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasRT_3,
maxResolution:1.4002233076130983,
 
                style: style_BatasRT_3,
                interactive: true,
                title: '<img src="styles/legend/BatasRT_3.png" /> Batas RT'
            });
var format_HakAtasTanah_4 = new ol.format.GeoJSON();
var features_HakAtasTanah_4 = format_HakAtasTanah_4.readFeatures(json_HakAtasTanah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HakAtasTanah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HakAtasTanah_4.addFeatures(features_HakAtasTanah_4);
var lyr_HakAtasTanah_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HakAtasTanah_4,
maxResolution:1.4002233076130983,
 
                style: style_HakAtasTanah_4,
                interactive: true,
    title: 'Hak Atas Tanah<br />\
    <img src="styles/legend/HakAtasTanah_4_0.png" /> Belum Terdaftar<br />\
    <img src="styles/legend/HakAtasTanah_4_1.png" /> Terdaftar<br />'
        });
var format_BangunanIndikatif_5 = new ol.format.GeoJSON();
var features_BangunanIndikatif_5 = format_BangunanIndikatif_5.readFeatures(json_BangunanIndikatif_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanIndikatif_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanIndikatif_5.addFeatures(features_BangunanIndikatif_5);
var lyr_BangunanIndikatif_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BangunanIndikatif_5,
maxResolution:1.4002233076130983,
 
                style: style_BangunanIndikatif_5,
                interactive: true,
                title: '<img src="styles/legend/BangunanIndikatif_5.png" /> Bangunan Indikatif'
            });

lyr_SatelitdanMaps_0.setVisible(false);lyr_Satelit_1.setVisible(true);lyr_LOKASIPRIORITAS_2.setVisible(true);lyr_BatasRT_3.setVisible(true);lyr_HakAtasTanah_4.setVisible(false);lyr_BangunanIndikatif_5.setVisible(false);
var layersList = [lyr_SatelitdanMaps_0,lyr_Satelit_1,lyr_LOKASIPRIORITAS_2,lyr_BatasRT_3,lyr_HakAtasTanah_4,lyr_BangunanIndikatif_5];
lyr_LOKASIPRIORITAS_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'INSIDE_X': 'INSIDE_X', 'INSIDE_Y': 'INSIDE_Y', 'koordinat': 'koordinat', 'arah': 'arah', });
lyr_BatasRT_3.set('fieldAliases', {'WADMRW': 'WADMRW', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'CATATAN': 'CATATAN', 'WADMRT': 'WADMRT', 'tim': 'tim', });
lyr_HakAtasTanah_4.set('fieldAliases', {'nib': 'nib', 'nomorhak': 'nomorhak', 'HAK': 'HAK', 'HAT': 'HAT', });
lyr_BangunanIndikatif_5.set('fieldAliases', {'HAK': 'HAK', 'HAT': 'HAT', 'NAMAPDUP': 'NAMAPDUP', 'LUASHA': 'LUASHA', 'WADMRW_1': 'WADMRW_1', 'WADMKD_1': 'WADMKD_1', 'WADMKC_1': 'WADMKC_1', 'WADMKK_1': 'WADMKK_1', 'CATATAN': 'CATATAN', 'WADMRT': 'WADMRT', });
lyr_LOKASIPRIORITAS_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'INSIDE_X': 'TextEdit', 'INSIDE_Y': 'TextEdit', 'koordinat': 'TextEdit', 'arah': 'TextEdit', });
lyr_BatasRT_3.set('fieldImages', {'WADMRW': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'CATATAN': 'TextEdit', 'WADMRT': 'TextEdit', 'tim': 'TextEdit', });
lyr_HakAtasTanah_4.set('fieldImages', {'nib': 'TextEdit', 'nomorhak': 'TextEdit', 'HAK': 'TextEdit', 'HAT': 'TextEdit', });
lyr_BangunanIndikatif_5.set('fieldImages', {'HAK': 'TextEdit', 'HAT': 'TextEdit', 'NAMAPDUP': 'TextEdit', 'LUASHA': 'TextEdit', 'WADMRW_1': 'TextEdit', 'WADMKD_1': 'TextEdit', 'WADMKC_1': 'TextEdit', 'WADMKK_1': 'TextEdit', 'CATATAN': 'TextEdit', 'WADMRT': 'TextEdit', });
lyr_LOKASIPRIORITAS_2.set('fieldLabels', {'OBJECTID': 'inline label', 'WADMKD': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'INSIDE_X': 'inline label', 'INSIDE_Y': 'inline label', 'koordinat': 'inline label', 'arah': 'inline label', });
lyr_BatasRT_3.set('fieldLabels', {'WADMRW': 'inline label', 'WADMKD': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'CATATAN': 'inline label', 'WADMRT': 'inline label', 'tim': 'inline label', });
lyr_HakAtasTanah_4.set('fieldLabels', {'nib': 'inline label', 'nomorhak': 'inline label', 'HAK': 'inline label', 'HAT': 'inline label', });
lyr_BangunanIndikatif_5.set('fieldLabels', {'HAK': 'inline label', 'HAT': 'inline label', 'NAMAPDUP': 'inline label', 'LUASHA': 'inline label', 'WADMRW_1': 'inline label', 'WADMKD_1': 'inline label', 'WADMKC_1': 'inline label', 'WADMKK_1': 'inline label', 'CATATAN': 'inline label', 'WADMRT': 'inline label', });
lyr_BangunanIndikatif_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});