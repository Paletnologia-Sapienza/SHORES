var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_MascheraReg_1 = new ol.format.GeoJSON();
var features_MascheraReg_1 = format_MascheraReg_1.readFeatures(json_MascheraReg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MascheraReg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MascheraReg_1.addFeatures(features_MascheraReg_1);
var lyr_MascheraReg_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MascheraReg_1, 
                style: style_MascheraReg_1,
                popuplayertitle: 'MascheraReg',
                interactive: false,
                title: '<img src="styles/legend/MascheraReg_1.png" /> MascheraReg'
            });
var format_Sitilagunari_2 = new ol.format.GeoJSON();
var features_Sitilagunari_2 = format_Sitilagunari_2.readFeatures(json_Sitilagunari_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitilagunari_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitilagunari_2.addFeatures(features_Sitilagunari_2);
var lyr_Sitilagunari_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitilagunari_2, 
                style: style_Sitilagunari_2,
                popuplayertitle: 'Siti lagunari',
                interactive: true,
                title: '<img src="styles/legend/Sitilagunari_2.png" /> Siti lagunari'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_MascheraReg_1.setVisible(true);lyr_Sitilagunari_2.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_MascheraReg_1,lyr_Sitilagunari_2];
lyr_MascheraReg_1.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'DEN_REG': 'DEN_REG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sitilagunari_2.set('fieldAliases', {'ID': 'ID', '_Name': '_Name', '_Type': '_Type', '_Method': '_Method', '_Facies': '_Facies', '_Chronology': '_Chronology', '_EBA (20th-18th c. BCE)': '_EBA (20th-18th c. BCE)', '_MBA1-2 (17th-16th c. BCE)': '_MBA1-2 (17th-16th c. BCE)', '_MBA2-3 (15th-14th c. BCE)': '_MBA2-3 (15th-14th c. BCE)', '_RBA (13th-12th c. BCE)': '_RBA (13th-12th c. BCE)', '_FBA (11th-10th c. BCE)': '_FBA (11th-10th c. BCE)', '_EIA (9th-8th c. BCE)': '_EIA (9th-8th c. BCE)', '_BA nd': '_BA nd', '_General Bibliography': '_General Bibliography', '_Absolute Chronology': '_Absolute Chronology', '_Botanical analyses': '_Botanical analyses', '_Faunal remains analyses': '_Faunal remains analyses', '_Human Remains analysis': '_Human Remains analysis', '_Core drillings': '_Core drillings', '_Pollen analyses': '_Pollen analyses', '_Biomolecular analyses on human remains': '_Biomolecular analyses on human remains', '_Biomolecular analyses on zoological remains': '_Biomolecular analyses on zoological remains', '_ORA': '_ORA', '_Petrographic analyses on pottery': '_Petrographic analyses on pottery', '_NOTE': '_NOTE', });
lyr_MascheraReg_1.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'DEN_REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sitilagunari_2.set('fieldImages', {'ID': 'Range', '_Name': 'TextEdit', '_Type': 'TextEdit', '_Method': 'TextEdit', '_Facies': 'TextEdit', '_Chronology': 'TextEdit', '_EBA (20th-18th c. BCE)': 'TextEdit', '_MBA1-2 (17th-16th c. BCE)': 'TextEdit', '_MBA2-3 (15th-14th c. BCE)': 'TextEdit', '_RBA (13th-12th c. BCE)': 'TextEdit', '_FBA (11th-10th c. BCE)': 'TextEdit', '_EIA (9th-8th c. BCE)': 'TextEdit', '_BA nd': 'TextEdit', '_General Bibliography': 'TextEdit', '_Absolute Chronology': 'TextEdit', '_Botanical analyses': 'TextEdit', '_Faunal remains analyses': 'TextEdit', '_Human Remains analysis': 'TextEdit', '_Core drillings': 'TextEdit', '_Pollen analyses': 'TextEdit', '_Biomolecular analyses on human remains': 'TextEdit', '_Biomolecular analyses on zoological remains': 'TextEdit', '_ORA': 'TextEdit', '_Petrographic analyses on pottery': 'TextEdit', '_NOTE': 'TextEdit', });
lyr_MascheraReg_1.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'DEN_REG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sitilagunari_2.set('fieldLabels', {'ID': 'inline label - always visible', '_Name': 'inline label - visible with data', '_Type': 'inline label - visible with data', '_Method': 'inline label - visible with data', '_Facies': 'hidden field', '_Chronology': 'hidden field', '_EBA (20th-18th c. BCE)': 'inline label - visible with data', '_MBA1-2 (17th-16th c. BCE)': 'inline label - visible with data', '_MBA2-3 (15th-14th c. BCE)': 'inline label - visible with data', '_RBA (13th-12th c. BCE)': 'inline label - visible with data', '_FBA (11th-10th c. BCE)': 'inline label - visible with data', '_EIA (9th-8th c. BCE)': 'inline label - visible with data', '_BA nd': 'inline label - visible with data', '_General Bibliography': 'inline label - visible with data', '_Absolute Chronology': 'inline label - visible with data', '_Botanical analyses': 'inline label - visible with data', '_Faunal remains analyses': 'inline label - visible with data', '_Human Remains analysis': 'inline label - visible with data', '_Core drillings': 'inline label - visible with data', '_Pollen analyses': 'inline label - visible with data', '_Biomolecular analyses on human remains': 'inline label - visible with data', '_Biomolecular analyses on zoological remains': 'inline label - visible with data', '_ORA': 'inline label - visible with data', '_Petrographic analyses on pottery': 'inline label - visible with data', '_NOTE': 'hidden field', });
lyr_Sitilagunari_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});