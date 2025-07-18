ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32633").setExtent([348036.713664, 4400968.551715, 918438.606091, 4667788.563765]);
var wms_layers = [];

var lyr_TINItaly_Hillshade_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://tinitaly.pi.ingv.it/TINItaly_1_1/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "tinitaly_hshd",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'TINItaly_Hillshade',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TINItaly_Hillshade_0, 0]);
var lyr_TINItaly_HSV_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://tinitaly.pi.ingv.it/TINItaly_1_1/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "tinitaly_hsv",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'TINItaly_HSV',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TINItaly_HSV_1, 0]);

        var lyr_EsriOcean_2 = new ol.layer.Tile({
            'title': 'Esri Ocean',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_EsriSatellite_3 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_South_Italy_Regions_4 = new ol.format.GeoJSON();
var features_South_Italy_Regions_4 = format_South_Italy_Regions_4.readFeatures(json_South_Italy_Regions_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_South_Italy_Regions_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_South_Italy_Regions_4.addFeatures(features_South_Italy_Regions_4);
var lyr_South_Italy_Regions_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_South_Italy_Regions_4, 
                style: style_South_Italy_Regions_4,
                popuplayertitle: 'South_Italy_Regions',
                interactive: false,
                title: '<img src="styles/legend/South_Italy_Regions_4.png" /> South_Italy_Regions'
            });
var format_EIA_sites_5 = new ol.format.GeoJSON();
var features_EIA_sites_5 = format_EIA_sites_5.readFeatures(json_EIA_sites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_EIA_sites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EIA_sites_5.addFeatures(features_EIA_sites_5);
var lyr_EIA_sites_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EIA_sites_5, 
                style: style_EIA_sites_5,
                popuplayertitle: 'EIA_sites',
                interactive: true,
                title: '<img src="styles/legend/EIA_sites_5.png" /> EIA_sites'
            });
var format_BAnd_sites_6 = new ol.format.GeoJSON();
var features_BAnd_sites_6 = format_BAnd_sites_6.readFeatures(json_BAnd_sites_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_BAnd_sites_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAnd_sites_6.addFeatures(features_BAnd_sites_6);
var lyr_BAnd_sites_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAnd_sites_6, 
                style: style_BAnd_sites_6,
                popuplayertitle: 'BAnd_sites',
                interactive: true,
                title: '<img src="styles/legend/BAnd_sites_6.png" /> BAnd_sites'
            });
var format_FBA_sites_7 = new ol.format.GeoJSON();
var features_FBA_sites_7 = format_FBA_sites_7.readFeatures(json_FBA_sites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_FBA_sites_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBA_sites_7.addFeatures(features_FBA_sites_7);
var lyr_FBA_sites_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBA_sites_7, 
                style: style_FBA_sites_7,
                popuplayertitle: 'FBA_sites',
                interactive: true,
                title: '<img src="styles/legend/FBA_sites_7.png" /> FBA_sites'
            });
var format_RBA_sites_8 = new ol.format.GeoJSON();
var features_RBA_sites_8 = format_RBA_sites_8.readFeatures(json_RBA_sites_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_RBA_sites_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBA_sites_8.addFeatures(features_RBA_sites_8);
var lyr_RBA_sites_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBA_sites_8, 
                style: style_RBA_sites_8,
                popuplayertitle: 'RBA_sites',
                interactive: true,
                title: '<img src="styles/legend/RBA_sites_8.png" /> RBA_sites'
            });
var format_MBA23_sites_9 = new ol.format.GeoJSON();
var features_MBA23_sites_9 = format_MBA23_sites_9.readFeatures(json_MBA23_sites_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_MBA23_sites_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBA23_sites_9.addFeatures(features_MBA23_sites_9);
var lyr_MBA23_sites_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBA23_sites_9, 
                style: style_MBA23_sites_9,
                popuplayertitle: 'MBA2-3_sites',
                interactive: true,
                title: '<img src="styles/legend/MBA23_sites_9.png" /> MBA2-3_sites'
            });
var format_MBA12_sites_10 = new ol.format.GeoJSON();
var features_MBA12_sites_10 = format_MBA12_sites_10.readFeatures(json_MBA12_sites_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_MBA12_sites_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBA12_sites_10.addFeatures(features_MBA12_sites_10);
var lyr_MBA12_sites_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBA12_sites_10, 
                style: style_MBA12_sites_10,
                popuplayertitle: 'MBA1-2_sites',
                interactive: true,
                title: '<img src="styles/legend/MBA12_sites_10.png" /> MBA1-2_sites'
            });
var format_EBA_sites_11 = new ol.format.GeoJSON();
var features_EBA_sites_11 = format_EBA_sites_11.readFeatures(json_EBA_sites_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_EBA_sites_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EBA_sites_11.addFeatures(features_EBA_sites_11);
var lyr_EBA_sites_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EBA_sites_11, 
                style: style_EBA_sites_11,
                popuplayertitle: 'EBA_sites',
                interactive: true,
                title: '<img src="styles/legend/EBA_sites_11.png" /> EBA_sites'
            });
var format_Sites_Typology_12 = new ol.format.GeoJSON();
var features_Sites_Typology_12 = format_Sites_Typology_12.readFeatures(json_Sites_Typology_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Sites_Typology_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sites_Typology_12.addFeatures(features_Sites_Typology_12);
var lyr_Sites_Typology_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sites_Typology_12, 
                style: style_Sites_Typology_12,
                popuplayertitle: 'Sites_Typology',
                interactive: true,
    title: 'Sites_Typology<br />\
    <img src="styles/legend/Sites_Typology_12_0.png" /> Cave<br />\
    <img src="styles/legend/Sites_Typology_12_1.png" /> Dolmen<br />\
    <img src="styles/legend/Sites_Typology_12_2.png" /> Fortified settlement<br />\
    <img src="styles/legend/Sites_Typology_12_3.png" /> Funerary site<br />\
    <img src="styles/legend/Sites_Typology_12_4.png" /> Hoard<br />\
    <img src="styles/legend/Sites_Typology_12_5.png" /> Productive site<br />\
    <img src="styles/legend/Sites_Typology_12_6.png" /> Ritual and Funerary site<br />\
    <img src="styles/legend/Sites_Typology_12_7.png" /> Ritual site<br />\
    <img src="styles/legend/Sites_Typology_12_8.png" /> Settlement<br />\
    <img src="styles/legend/Sites_Typology_12_9.png" /> Specchia<br />'
        });
var format_Sites_general_13 = new ol.format.GeoJSON();
var features_Sites_general_13 = format_Sites_general_13.readFeatures(json_Sites_general_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Sites_general_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sites_general_13.addFeatures(features_Sites_general_13);
var lyr_Sites_general_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sites_general_13, 
                style: style_Sites_general_13,
                popuplayertitle: 'Sites_general',
                interactive: true,
                title: '<img src="styles/legend/Sites_general_13.png" /> Sites_general'
            });

lyr_TINItaly_Hillshade_0.setVisible(true);lyr_TINItaly_HSV_1.setVisible(true);lyr_EsriOcean_2.setVisible(true);lyr_EsriSatellite_3.setVisible(true);lyr_South_Italy_Regions_4.setVisible(true);lyr_EIA_sites_5.setVisible(true);lyr_BAnd_sites_6.setVisible(true);lyr_FBA_sites_7.setVisible(true);lyr_RBA_sites_8.setVisible(true);lyr_MBA23_sites_9.setVisible(true);lyr_MBA12_sites_10.setVisible(true);lyr_EBA_sites_11.setVisible(true);lyr_Sites_Typology_12.setVisible(true);lyr_Sites_general_13.setVisible(true);
var layersList = [lyr_TINItaly_Hillshade_0,lyr_TINItaly_HSV_1,lyr_EsriOcean_2,lyr_EsriSatellite_3,lyr_South_Italy_Regions_4,lyr_EIA_sites_5,lyr_BAnd_sites_6,lyr_FBA_sites_7,lyr_RBA_sites_8,lyr_MBA23_sites_9,lyr_MBA12_sites_10,lyr_EBA_sites_11,lyr_Sites_Typology_12,lyr_Sites_general_13];
lyr_South_Italy_Regions_4.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'DEN_REG': 'DEN_REG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_EIA_sites_5.set('fieldAliases', {'uid': 'uid', 'ID': 'ID', '_Name': '_Name', '_Type': '_Type', '_Method': '_Method', '_Facies': '_Facies', '_Chronolog': '_Chronolog', '_EBA (20th': '_EBA (20th', '_MBA1-2 (1': '_MBA1-2 (1', '_MBA2-3 (1': '_MBA2-3 (1', '_RBA (13th': '_RBA (13th', '_FBA (11th': '_FBA (11th', '_EIA (9th-': '_EIA (9th-', '_BA nd': '_BA nd', '_General B': '_General B', '_Absolute': '_Absolute', '_Botanical': '_Botanical', '_Faunal re': '_Faunal re', '_Human Rem': '_Human Rem', '_Core dril': '_Core dril', '_Pollen an': '_Pollen an', '_Biomolecu': '_Biomolecu', '_Biomole_1': '_Biomole_1', '_ORA': '_ORA', '_Petrograp': '_Petrograp', '_NOTE': '_NOTE', });
lyr_BAnd_sites_6.set('fieldAliases', {'uid': 'uid', 'ID': 'ID', '_Name': '_Name', '_Type': '_Type', '_Method': '_Method', '_Facies': '_Facies', '_Chronolog': '_Chronolog', '_EBA (20th': '_EBA (20th', '_MBA1-2 (1': '_MBA1-2 (1', '_MBA2-3 (1': '_MBA2-3 (1', '_RBA (13th': '_RBA (13th', '_FBA (11th': '_FBA (11th', '_EIA (9th-': '_EIA (9th-', '_BA nd': '_BA nd', '_General B': '_General B', '_Absolute': '_Absolute', '_Botanical': '_Botanical', '_Faunal re': '_Faunal re', '_Human Rem': '_Human Rem', '_Core dril': '_Core dril', '_Pollen an': '_Pollen an', '_Biomolecu': '_Biomolecu', '_Biomole_1': '_Biomole_1', '_ORA': '_ORA', '_Petrograp': '_Petrograp', '_NOTE': '_NOTE', });
lyr_FBA_sites_7.set('fieldAliases', {'uid': 'uid', 'ID': 'ID', '_Name': '_Name', '_Type': '_Type', '_Method': '_Method', '_Facies': '_Facies', '_Chronolog': '_Chronolog', '_EBA (20th': '_EBA (20th', '_MBA1-2 (1': '_MBA1-2 (1', '_MBA2-3 (1': '_MBA2-3 (1', '_RBA (13th': '_RBA (13th', '_FBA (11th': '_FBA (11th', '_EIA (9th-': '_EIA (9th-', '_BA nd': '_BA nd', '_General B': '_General B', '_Absolute': '_Absolute', '_Botanical': '_Botanical', '_Faunal re': '_Faunal re', '_Human Rem': '_Human Rem', '_Core dril': '_Core dril', '_Pollen an': '_Pollen an', '_Biomolecu': '_Biomolecu', '_Biomole_1': '_Biomole_1', '_ORA': '_ORA', '_Petrograp': '_Petrograp', '_NOTE': '_NOTE', });
lyr_RBA_sites_8.set('fieldAliases', {'uid': 'uid', 'ID': 'ID', '_Name': '_Name', '_Type': '_Type', '_Method': '_Method', '_Facies': '_Facies', '_Chronolog': '_Chronolog', '_EBA (20th': '_EBA (20th', '_MBA1-2 (1': '_MBA1-2 (1', '_MBA2-3 (1': '_MBA2-3 (1', '_RBA (13th': '_RBA (13th', '_FBA (11th': '_FBA (11th', '_EIA (9th-': '_EIA (9th-', '_BA nd': '_BA nd', '_General B': '_General B', '_Absolute': '_Absolute', '_Botanical': '_Botanical', '_Faunal re': '_Faunal re', '_Human Rem': '_Human Rem', '_Core dril': '_Core dril', '_Pollen an': '_Pollen an', '_Biomolecu': '_Biomolecu', '_Biomole_1': '_Biomole_1', '_ORA': '_ORA', '_Petrograp': '_Petrograp', '_NOTE': '_NOTE', });
lyr_MBA23_sites_9.set('fieldAliases', {'uid': 'uid', 'ID': 'ID', '_Name': '_Name', '_Type': '_Type', '_Method': '_Method', '_Facies': '_Facies', '_Chronolog': '_Chronolog', '_EBA (20th': '_EBA (20th', '_MBA1-2 (1': '_MBA1-2 (1', '_MBA2-3 (1': '_MBA2-3 (1', '_RBA (13th': '_RBA (13th', '_FBA (11th': '_FBA (11th', '_EIA (9th-': '_EIA (9th-', '_BA nd': '_BA nd', '_General B': '_General B', '_Absolute': '_Absolute', '_Botanical': '_Botanical', '_Faunal re': '_Faunal re', '_Human Rem': '_Human Rem', '_Core dril': '_Core dril', '_Pollen an': '_Pollen an', '_Biomolecu': '_Biomolecu', '_Biomole_1': '_Biomole_1', '_ORA': '_ORA', '_Petrograp': '_Petrograp', '_NOTE': '_NOTE', });
lyr_MBA12_sites_10.set('fieldAliases', {'uid': 'uid', 'ID': 'ID', '_Name': '_Name', '_Type': '_Type', '_Method': '_Method', '_Facies': '_Facies', '_Chronolog': '_Chronolog', '_EBA (20th': '_EBA (20th', '_MBA1-2 (1': '_MBA1-2 (1', '_MBA2-3 (1': '_MBA2-3 (1', '_RBA (13th': '_RBA (13th', '_FBA (11th': '_FBA (11th', '_EIA (9th-': '_EIA (9th-', '_BA nd': '_BA nd', '_General B': '_General B', '_Absolute': '_Absolute', '_Botanical': '_Botanical', '_Faunal re': '_Faunal re', '_Human Rem': '_Human Rem', '_Core dril': '_Core dril', '_Pollen an': '_Pollen an', '_Biomolecu': '_Biomolecu', '_Biomole_1': '_Biomole_1', '_ORA': '_ORA', '_Petrograp': '_Petrograp', '_NOTE': '_NOTE', });
lyr_EBA_sites_11.set('fieldAliases', {'uid': 'uid', 'ID': 'ID', '_Name': '_Name', '_Type': '_Type', '_Method': '_Method', '_Facies': '_Facies', '_Chronolog': '_Chronolog', '_EBA (20th': '_EBA (20th', '_MBA1-2 (1': '_MBA1-2 (1', '_MBA2-3 (1': '_MBA2-3 (1', '_RBA (13th': '_RBA (13th', '_FBA (11th': '_FBA (11th', '_EIA (9th-': '_EIA (9th-', '_BA nd': '_BA nd', '_General B': '_General B', '_Absolute': '_Absolute', '_Botanical': '_Botanical', '_Faunal re': '_Faunal re', '_Human Rem': '_Human Rem', '_Core dril': '_Core dril', '_Pollen an': '_Pollen an', '_Biomolecu': '_Biomolecu', '_Biomole_1': '_Biomole_1', '_ORA': '_ORA', '_Petrograp': '_Petrograp', '_NOTE': '_NOTE', });
lyr_Sites_Typology_12.set('fieldAliases', {'uid': 'uid', 'ID': 'ID', '_Name': '_Name', '_Type': '_Type', '_Method': '_Method', '_Facies': '_Facies', '_Chronolog': '_Chronolog', '_EBA (20th': '_EBA (20th', '_MBA1-2 (1': '_MBA1-2 (1', '_MBA2-3 (1': '_MBA2-3 (1', '_RBA (13th': '_RBA (13th', '_FBA (11th': '_FBA (11th', '_EIA (9th-': '_EIA (9th-', '_BA nd': '_BA nd', '_General B': '_General B', '_Absolute': '_Absolute', '_Botanical': '_Botanical', '_Faunal re': '_Faunal re', '_Human Rem': '_Human Rem', '_Core dril': '_Core dril', '_Pollen an': '_Pollen an', '_Biomolecu': '_Biomolecu', '_Biomole_1': '_Biomole_1', '_ORA': '_ORA', '_Petrograp': '_Petrograp', '_NOTE': '_NOTE', });
lyr_Sites_general_13.set('fieldAliases', {'ID': 'ID', '_Name': '_Name', '_Type': '_Type', '_Method': '_Method', '_Facies': '_Facies', '_Chronology': '_Chronology', '_EBA (20th-18th c. BCE)': '_EBA (20th-18th c. BCE)', '_MBA1-2 (17th-16th c. BCE)': '_MBA1-2 (17th-16th c. BCE)', '_MBA2-3 (15th-14th c. BCE)': '_MBA2-3 (15th-14th c. BCE)', '_RBA (13th-12th c. BCE)': '_RBA (13th-12th c. BCE)', '_FBA (11th-10th c. BCE)': '_FBA (11th-10th c. BCE)', '_EIA (9th-8th c. BCE)': '_EIA (9th-8th c. BCE)', '_BA nd': '_BA nd', '_General Bibliography': '_General Bibliography', '_Absolute Chronology': '_Absolute Chronology', '_Botanical analyses': '_Botanical analyses', '_Faunal remains analyses': '_Faunal remains analyses', '_Human Remains analysis': '_Human Remains analysis', '_Core drillings': '_Core drillings', '_Pollen analyses': '_Pollen analyses', '_Biomolecular analyses on human remains': '_Biomolecular analyses on human remains', '_Biomolecular analyses on zoological remains': '_Biomolecular analyses on zoological remains', '_ORA': '_ORA', '_Petrographic analyses on pottery': '_Petrographic analyses on pottery', '_NOTE': '_NOTE', });
lyr_South_Italy_Regions_4.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'DEN_REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EIA_sites_5.set('fieldImages', {'uid': 'TextEdit', 'ID': 'TextEdit', '_Name': 'TextEdit', '_Type': 'TextEdit', '_Method': 'TextEdit', '_Facies': 'TextEdit', '_Chronolog': 'TextEdit', '_EBA (20th': 'TextEdit', '_MBA1-2 (1': 'TextEdit', '_MBA2-3 (1': 'TextEdit', '_RBA (13th': 'TextEdit', '_FBA (11th': 'TextEdit', '_EIA (9th-': 'TextEdit', '_BA nd': 'TextEdit', '_General B': 'TextEdit', '_Absolute': 'TextEdit', '_Botanical': 'TextEdit', '_Faunal re': 'TextEdit', '_Human Rem': 'TextEdit', '_Core dril': 'TextEdit', '_Pollen an': 'TextEdit', '_Biomolecu': 'TextEdit', '_Biomole_1': 'TextEdit', '_ORA': 'TextEdit', '_Petrograp': 'TextEdit', '_NOTE': 'TextEdit', });
lyr_BAnd_sites_6.set('fieldImages', {'uid': 'TextEdit', 'ID': 'TextEdit', '_Name': 'TextEdit', '_Type': 'TextEdit', '_Method': 'TextEdit', '_Facies': 'TextEdit', '_Chronolog': 'TextEdit', '_EBA (20th': 'TextEdit', '_MBA1-2 (1': 'TextEdit', '_MBA2-3 (1': 'TextEdit', '_RBA (13th': 'TextEdit', '_FBA (11th': 'TextEdit', '_EIA (9th-': 'TextEdit', '_BA nd': 'TextEdit', '_General B': 'TextEdit', '_Absolute': 'TextEdit', '_Botanical': 'TextEdit', '_Faunal re': 'TextEdit', '_Human Rem': 'TextEdit', '_Core dril': 'TextEdit', '_Pollen an': 'TextEdit', '_Biomolecu': 'TextEdit', '_Biomole_1': 'TextEdit', '_ORA': 'TextEdit', '_Petrograp': 'TextEdit', '_NOTE': 'TextEdit', });
lyr_FBA_sites_7.set('fieldImages', {'uid': 'TextEdit', 'ID': 'TextEdit', '_Name': 'TextEdit', '_Type': 'TextEdit', '_Method': 'TextEdit', '_Facies': 'TextEdit', '_Chronolog': 'TextEdit', '_EBA (20th': 'TextEdit', '_MBA1-2 (1': 'TextEdit', '_MBA2-3 (1': 'TextEdit', '_RBA (13th': 'TextEdit', '_FBA (11th': 'TextEdit', '_EIA (9th-': 'TextEdit', '_BA nd': 'TextEdit', '_General B': 'TextEdit', '_Absolute': 'TextEdit', '_Botanical': 'TextEdit', '_Faunal re': 'TextEdit', '_Human Rem': 'TextEdit', '_Core dril': 'TextEdit', '_Pollen an': 'TextEdit', '_Biomolecu': 'TextEdit', '_Biomole_1': 'TextEdit', '_ORA': 'TextEdit', '_Petrograp': 'TextEdit', '_NOTE': 'TextEdit', });
lyr_RBA_sites_8.set('fieldImages', {'uid': 'TextEdit', 'ID': 'TextEdit', '_Name': 'TextEdit', '_Type': 'TextEdit', '_Method': 'TextEdit', '_Facies': 'TextEdit', '_Chronolog': 'TextEdit', '_EBA (20th': 'TextEdit', '_MBA1-2 (1': 'TextEdit', '_MBA2-3 (1': 'TextEdit', '_RBA (13th': 'TextEdit', '_FBA (11th': 'TextEdit', '_EIA (9th-': 'TextEdit', '_BA nd': 'TextEdit', '_General B': 'TextEdit', '_Absolute': 'TextEdit', '_Botanical': 'TextEdit', '_Faunal re': 'TextEdit', '_Human Rem': 'TextEdit', '_Core dril': 'TextEdit', '_Pollen an': 'TextEdit', '_Biomolecu': 'TextEdit', '_Biomole_1': 'TextEdit', '_ORA': 'TextEdit', '_Petrograp': 'TextEdit', '_NOTE': 'TextEdit', });
lyr_MBA23_sites_9.set('fieldImages', {'uid': 'TextEdit', 'ID': 'TextEdit', '_Name': 'TextEdit', '_Type': 'TextEdit', '_Method': 'TextEdit', '_Facies': 'TextEdit', '_Chronolog': 'TextEdit', '_EBA (20th': 'TextEdit', '_MBA1-2 (1': 'TextEdit', '_MBA2-3 (1': 'TextEdit', '_RBA (13th': 'TextEdit', '_FBA (11th': 'TextEdit', '_EIA (9th-': 'TextEdit', '_BA nd': 'TextEdit', '_General B': 'TextEdit', '_Absolute': 'TextEdit', '_Botanical': 'TextEdit', '_Faunal re': 'TextEdit', '_Human Rem': 'TextEdit', '_Core dril': 'TextEdit', '_Pollen an': 'TextEdit', '_Biomolecu': 'TextEdit', '_Biomole_1': 'TextEdit', '_ORA': 'TextEdit', '_Petrograp': 'TextEdit', '_NOTE': 'TextEdit', });
lyr_MBA12_sites_10.set('fieldImages', {'uid': 'TextEdit', 'ID': 'TextEdit', '_Name': 'TextEdit', '_Type': 'TextEdit', '_Method': 'TextEdit', '_Facies': 'TextEdit', '_Chronolog': 'TextEdit', '_EBA (20th': 'TextEdit', '_MBA1-2 (1': 'TextEdit', '_MBA2-3 (1': 'TextEdit', '_RBA (13th': 'TextEdit', '_FBA (11th': 'TextEdit', '_EIA (9th-': 'TextEdit', '_BA nd': 'TextEdit', '_General B': 'TextEdit', '_Absolute': 'TextEdit', '_Botanical': 'TextEdit', '_Faunal re': 'TextEdit', '_Human Rem': 'TextEdit', '_Core dril': 'TextEdit', '_Pollen an': 'TextEdit', '_Biomolecu': 'TextEdit', '_Biomole_1': 'TextEdit', '_ORA': 'TextEdit', '_Petrograp': 'TextEdit', '_NOTE': 'TextEdit', });
lyr_EBA_sites_11.set('fieldImages', {'uid': 'TextEdit', 'ID': 'TextEdit', '_Name': 'TextEdit', '_Type': 'TextEdit', '_Method': 'TextEdit', '_Facies': 'TextEdit', '_Chronolog': 'TextEdit', '_EBA (20th': 'TextEdit', '_MBA1-2 (1': 'TextEdit', '_MBA2-3 (1': 'TextEdit', '_RBA (13th': 'TextEdit', '_FBA (11th': 'TextEdit', '_EIA (9th-': 'TextEdit', '_BA nd': 'TextEdit', '_General B': 'TextEdit', '_Absolute': 'TextEdit', '_Botanical': 'TextEdit', '_Faunal re': 'TextEdit', '_Human Rem': 'TextEdit', '_Core dril': 'TextEdit', '_Pollen an': 'TextEdit', '_Biomolecu': 'TextEdit', '_Biomole_1': 'TextEdit', '_ORA': 'TextEdit', '_Petrograp': 'TextEdit', '_NOTE': 'TextEdit', });
lyr_Sites_Typology_12.set('fieldImages', {'uid': 'TextEdit', 'ID': 'Range', '_Name': 'TextEdit', '_Type': 'TextEdit', '_Method': 'TextEdit', '_Facies': 'TextEdit', '_Chronolog': '', '_EBA (20th': '', '_MBA1-2 (1': '', '_MBA2-3 (1': '', '_RBA (13th': '', '_FBA (11th': '', '_EIA (9th-': '', '_BA nd': 'TextEdit', '_General B': '', '_Absolute': '', '_Botanical': '', '_Faunal re': '', '_Human Rem': '', '_Core dril': '', '_Pollen an': '', '_Biomolecu': '', '_Biomole_1': '', '_ORA': 'TextEdit', '_Petrograp': '', '_NOTE': 'TextEdit', });
lyr_Sites_general_13.set('fieldImages', {'ID': 'Range', '_Name': 'TextEdit', '_Type': 'TextEdit', '_Method': 'TextEdit', '_Facies': 'TextEdit', '_Chronology': 'TextEdit', '_EBA (20th-18th c. BCE)': 'TextEdit', '_MBA1-2 (17th-16th c. BCE)': 'TextEdit', '_MBA2-3 (15th-14th c. BCE)': 'TextEdit', '_RBA (13th-12th c. BCE)': 'TextEdit', '_FBA (11th-10th c. BCE)': 'TextEdit', '_EIA (9th-8th c. BCE)': 'TextEdit', '_BA nd': 'TextEdit', '_General Bibliography': 'TextEdit', '_Absolute Chronology': 'TextEdit', '_Botanical analyses': 'TextEdit', '_Faunal remains analyses': 'TextEdit', '_Human Remains analysis': 'TextEdit', '_Core drillings': 'TextEdit', '_Pollen analyses': 'TextEdit', '_Biomolecular analyses on human remains': 'TextEdit', '_Biomolecular analyses on zoological remains': 'TextEdit', '_ORA': 'TextEdit', '_Petrographic analyses on pottery': 'TextEdit', '_NOTE': 'TextEdit', });
lyr_South_Italy_Regions_4.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'DEN_REG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_EIA_sites_5.set('fieldLabels', {'uid': 'hidden field', 'ID': 'header label - always visible', '_Name': 'header label - visible with data', '_Type': 'inline label - visible with data', '_Method': 'inline label - visible with data', '_Facies': 'hidden field', '_Chronolog': 'hidden field', '_EBA (20th': 'inline label - visible with data', '_MBA1-2 (1': 'inline label - visible with data', '_MBA2-3 (1': 'inline label - visible with data', '_RBA (13th': 'inline label - visible with data', '_FBA (11th': 'inline label - visible with data', '_EIA (9th-': 'inline label - visible with data', '_BA nd': 'inline label - visible with data', '_General B': 'inline label - visible with data', '_Absolute': 'inline label - visible with data', '_Botanical': 'inline label - visible with data', '_Faunal re': 'inline label - visible with data', '_Human Rem': 'inline label - visible with data', '_Core dril': 'inline label - visible with data', '_Pollen an': 'inline label - visible with data', '_Biomolecu': 'inline label - visible with data', '_Biomole_1': 'inline label - visible with data', '_ORA': 'inline label - visible with data', '_Petrograp': 'inline label - visible with data', '_NOTE': 'hidden field', });
lyr_BAnd_sites_6.set('fieldLabels', {'uid': 'hidden field', 'ID': 'header label - always visible', '_Name': 'header label - visible with data', '_Type': 'inline label - visible with data', '_Method': 'inline label - visible with data', '_Facies': 'hidden field', '_Chronolog': 'hidden field', '_EBA (20th': 'inline label - visible with data', '_MBA1-2 (1': 'inline label - visible with data', '_MBA2-3 (1': 'inline label - visible with data', '_RBA (13th': 'inline label - visible with data', '_FBA (11th': 'inline label - visible with data', '_EIA (9th-': 'inline label - visible with data', '_BA nd': 'inline label - visible with data', '_General B': 'inline label - visible with data', '_Absolute': 'inline label - visible with data', '_Botanical': 'inline label - visible with data', '_Faunal re': 'inline label - visible with data', '_Human Rem': 'inline label - visible with data', '_Core dril': 'inline label - visible with data', '_Pollen an': 'inline label - visible with data', '_Biomolecu': 'inline label - visible with data', '_Biomole_1': 'inline label - visible with data', '_ORA': 'inline label - visible with data', '_Petrograp': 'inline label - visible with data', '_NOTE': 'hidden field', });
lyr_FBA_sites_7.set('fieldLabels', {'uid': 'hidden field', 'ID': 'header label - always visible', '_Name': 'header label - visible with data', '_Type': 'inline label - visible with data', '_Method': 'inline label - visible with data', '_Facies': 'hidden field', '_Chronolog': 'hidden field', '_EBA (20th': 'inline label - visible with data', '_MBA1-2 (1': 'inline label - visible with data', '_MBA2-3 (1': 'inline label - visible with data', '_RBA (13th': 'inline label - visible with data', '_FBA (11th': 'inline label - visible with data', '_EIA (9th-': 'inline label - visible with data', '_BA nd': 'inline label - visible with data', '_General B': 'inline label - visible with data', '_Absolute': 'inline label - visible with data', '_Botanical': 'inline label - visible with data', '_Faunal re': 'inline label - visible with data', '_Human Rem': 'inline label - visible with data', '_Core dril': 'inline label - visible with data', '_Pollen an': 'inline label - visible with data', '_Biomolecu': 'inline label - visible with data', '_Biomole_1': 'inline label - visible with data', '_ORA': 'inline label - visible with data', '_Petrograp': 'inline label - visible with data', '_NOTE': 'hidden field', });
lyr_RBA_sites_8.set('fieldLabels', {'uid': 'hidden field', 'ID': 'header label - always visible', '_Name': 'header label - visible with data', '_Type': 'inline label - visible with data', '_Method': 'inline label - visible with data', '_Facies': 'hidden field', '_Chronolog': 'hidden field', '_EBA (20th': 'inline label - visible with data', '_MBA1-2 (1': 'inline label - visible with data', '_MBA2-3 (1': 'inline label - visible with data', '_RBA (13th': 'inline label - visible with data', '_FBA (11th': 'inline label - visible with data', '_EIA (9th-': 'inline label - visible with data', '_BA nd': 'inline label - visible with data', '_General B': 'inline label - visible with data', '_Absolute': 'inline label - visible with data', '_Botanical': 'inline label - visible with data', '_Faunal re': 'inline label - visible with data', '_Human Rem': 'inline label - visible with data', '_Core dril': 'inline label - visible with data', '_Pollen an': 'inline label - visible with data', '_Biomolecu': 'inline label - visible with data', '_Biomole_1': 'inline label - visible with data', '_ORA': 'inline label - visible with data', '_Petrograp': 'inline label - visible with data', '_NOTE': 'hidden field', });
lyr_MBA23_sites_9.set('fieldLabels', {'uid': 'hidden field', 'ID': 'header label - always visible', '_Name': 'header label - always visible', '_Type': 'inline label - visible with data', '_Method': 'inline label - visible with data', '_Facies': 'hidden field', '_Chronolog': 'hidden field', '_EBA (20th': 'inline label - visible with data', '_MBA1-2 (1': 'inline label - visible with data', '_MBA2-3 (1': 'inline label - visible with data', '_RBA (13th': 'inline label - visible with data', '_FBA (11th': 'inline label - visible with data', '_EIA (9th-': 'inline label - visible with data', '_BA nd': 'inline label - visible with data', '_General B': 'inline label - visible with data', '_Absolute': 'inline label - visible with data', '_Botanical': 'inline label - visible with data', '_Faunal re': 'inline label - visible with data', '_Human Rem': 'inline label - visible with data', '_Core dril': 'inline label - visible with data', '_Pollen an': 'inline label - visible with data', '_Biomolecu': 'inline label - visible with data', '_Biomole_1': 'inline label - visible with data', '_ORA': 'inline label - visible with data', '_Petrograp': 'inline label - visible with data', '_NOTE': 'hidden field', });
lyr_MBA12_sites_10.set('fieldLabels', {'uid': 'hidden field', 'ID': 'header label - always visible', '_Name': 'header label - visible with data', '_Type': 'inline label - visible with data', '_Method': 'inline label - visible with data', '_Facies': 'hidden field', '_Chronolog': 'hidden field', '_EBA (20th': 'inline label - visible with data', '_MBA1-2 (1': 'inline label - visible with data', '_MBA2-3 (1': 'inline label - visible with data', '_RBA (13th': 'inline label - visible with data', '_FBA (11th': 'inline label - visible with data', '_EIA (9th-': 'inline label - visible with data', '_BA nd': 'inline label - visible with data', '_General B': 'inline label - visible with data', '_Absolute': 'inline label - visible with data', '_Botanical': 'inline label - visible with data', '_Faunal re': 'inline label - visible with data', '_Human Rem': 'inline label - visible with data', '_Core dril': 'inline label - visible with data', '_Pollen an': 'inline label - visible with data', '_Biomolecu': 'inline label - visible with data', '_Biomole_1': 'inline label - visible with data', '_ORA': 'inline label - visible with data', '_Petrograp': 'inline label - visible with data', '_NOTE': 'hidden field', });
lyr_EBA_sites_11.set('fieldLabels', {'uid': 'hidden field', 'ID': 'header label - always visible', '_Name': 'header label - visible with data', '_Type': 'inline label - visible with data', '_Method': 'inline label - visible with data', '_Facies': 'hidden field', '_Chronolog': 'hidden field', '_EBA (20th': 'inline label - visible with data', '_MBA1-2 (1': 'inline label - visible with data', '_MBA2-3 (1': 'inline label - visible with data', '_RBA (13th': 'inline label - visible with data', '_FBA (11th': 'inline label - visible with data', '_EIA (9th-': 'inline label - visible with data', '_BA nd': 'inline label - visible with data', '_General B': 'inline label - visible with data', '_Absolute': 'inline label - visible with data', '_Botanical': 'inline label - visible with data', '_Faunal re': 'inline label - visible with data', '_Human Rem': 'inline label - visible with data', '_Core dril': 'inline label - visible with data', '_Pollen an': 'inline label - visible with data', '_Biomolecu': 'inline label - visible with data', '_Biomole_1': 'inline label - visible with data', '_ORA': 'inline label - visible with data', '_Petrograp': 'inline label - visible with data', '_NOTE': 'hidden field', });
lyr_Sites_Typology_12.set('fieldLabels', {'uid': 'hidden field', 'ID': 'header label - always visible', '_Name': 'header label - visible with data', '_Type': 'inline label - visible with data', '_Method': 'inline label - visible with data', '_Facies': 'hidden field', '_Chronolog': 'hidden field', '_EBA (20th': 'inline label - visible with data', '_MBA1-2 (1': 'inline label - visible with data', '_MBA2-3 (1': 'inline label - visible with data', '_RBA (13th': 'inline label - visible with data', '_FBA (11th': 'inline label - visible with data', '_EIA (9th-': 'inline label - visible with data', '_BA nd': 'inline label - visible with data', '_General B': 'inline label - visible with data', '_Absolute': 'inline label - visible with data', '_Botanical': 'inline label - visible with data', '_Faunal re': 'inline label - visible with data', '_Human Rem': 'inline label - visible with data', '_Core dril': 'inline label - visible with data', '_Pollen an': 'inline label - visible with data', '_Biomolecu': 'inline label - visible with data', '_Biomole_1': 'inline label - visible with data', '_ORA': 'inline label - visible with data', '_Petrograp': 'inline label - visible with data', '_NOTE': 'hidden field', });
lyr_Sites_general_13.set('fieldLabels', {'ID': 'header label - always visible', '_Name': 'header label - always visible', '_Type': 'inline label - visible with data', '_Method': 'inline label - visible with data', '_Facies': 'hidden field', '_Chronology': 'hidden field', '_EBA (20th-18th c. BCE)': 'inline label - visible with data', '_MBA1-2 (17th-16th c. BCE)': 'inline label - visible with data', '_MBA2-3 (15th-14th c. BCE)': 'inline label - visible with data', '_RBA (13th-12th c. BCE)': 'inline label - visible with data', '_FBA (11th-10th c. BCE)': 'inline label - visible with data', '_EIA (9th-8th c. BCE)': 'inline label - visible with data', '_BA nd': 'inline label - visible with data', '_General Bibliography': 'inline label - visible with data', '_Absolute Chronology': 'inline label - visible with data', '_Botanical analyses': 'inline label - visible with data', '_Faunal remains analyses': 'inline label - visible with data', '_Human Remains analysis': 'inline label - visible with data', '_Core drillings': 'inline label - visible with data', '_Pollen analyses': 'inline label - visible with data', '_Biomolecular analyses on human remains': 'inline label - visible with data', '_Biomolecular analyses on zoological remains': 'inline label - visible with data', '_ORA': 'inline label - visible with data', '_Petrographic analyses on pottery': 'inline label - visible with data', '_NOTE': 'hidden field', });
lyr_Sites_general_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});