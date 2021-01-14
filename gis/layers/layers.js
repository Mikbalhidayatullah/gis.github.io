var wms_layers = [];
var format_ADMINISTRASI_LN_50K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_50K_0 = format_ADMINISTRASI_LN_50K_0.readFeatures(json_ADMINISTRASI_LN_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_50K_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ADMINISTRASI_LN_50K_0.addFeatures(features_ADMINISTRASI_LN_50K_0);var lyr_ADMINISTRASI_LN_50K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_LN_50K_0, 
                style: style_ADMINISTRASI_LN_50K_0,
                title: '<img src="styles/legend/ADMINISTRASI_LN_50K_0.png" /> ADMINISTRASI_LN_50K'
            });var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });var format_AGRIKEBUN_AR_50K_2 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_50K_2 = format_AGRIKEBUN_AR_50K_2.readFeatures(json_AGRIKEBUN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_AR_50K_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AGRIKEBUN_AR_50K_2.addFeatures(features_AGRIKEBUN_AR_50K_2);var lyr_AGRIKEBUN_AR_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRIKEBUN_AR_50K_2, 
                style: style_AGRIKEBUN_AR_50K_2,
                title: '<img src="styles/legend/AGRIKEBUN_AR_50K_2.png" /> AGRIKEBUN_AR_50K'
            });var format_AIRPORT_AR_50K_3 = new ol.format.GeoJSON();
var features_AIRPORT_AR_50K_3 = format_AIRPORT_AR_50K_3.readFeatures(json_AIRPORT_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRPORT_AR_50K_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AIRPORT_AR_50K_3.addFeatures(features_AIRPORT_AR_50K_3);var lyr_AIRPORT_AR_50K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AIRPORT_AR_50K_3, 
                style: style_AIRPORT_AR_50K_3,
                title: '<img src="styles/legend/AIRPORT_AR_50K_3.png" /> AIRPORT_AR_50K'
            });var format_AIRPORT_PT_50K_4 = new ol.format.GeoJSON();
var features_AIRPORT_PT_50K_4 = format_AIRPORT_PT_50K_4.readFeatures(json_AIRPORT_PT_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRPORT_PT_50K_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AIRPORT_PT_50K_4.addFeatures(features_AIRPORT_PT_50K_4);var lyr_AIRPORT_PT_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AIRPORT_PT_50K_4, 
                style: style_AIRPORT_PT_50K_4,
                title: '<img src="styles/legend/AIRPORT_PT_50K_4.png" /> AIRPORT_PT_50K'
            });var format_BANGUNAN_AR_50K_5 = new ol.format.GeoJSON();
var features_BANGUNAN_AR_50K_5 = format_BANGUNAN_AR_50K_5.readFeatures(json_BANGUNAN_AR_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_AR_50K_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BANGUNAN_AR_50K_5.addFeatures(features_BANGUNAN_AR_50K_5);var lyr_BANGUNAN_AR_50K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_AR_50K_5, 
                style: style_BANGUNAN_AR_50K_5,
                title: '<img src="styles/legend/BANGUNAN_AR_50K_5.png" /> BANGUNAN_AR_50K'
            });var format_BANGUNAN_PT_50K_6 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_50K_6 = format_BANGUNAN_PT_50K_6.readFeatures(json_BANGUNAN_PT_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_PT_50K_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BANGUNAN_PT_50K_6.addFeatures(features_BANGUNAN_PT_50K_6);var lyr_BANGUNAN_PT_50K_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_PT_50K_6, 
                style: style_BANGUNAN_PT_50K_6,
                title: '<img src="styles/legend/BANGUNAN_PT_50K_6.png" /> BANGUNAN_PT_50K'
            });var format_CAGARBUDAYA_PT_50K_7 = new ol.format.GeoJSON();
var features_CAGARBUDAYA_PT_50K_7 = format_CAGARBUDAYA_PT_50K_7.readFeatures(json_CAGARBUDAYA_PT_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAGARBUDAYA_PT_50K_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CAGARBUDAYA_PT_50K_7.addFeatures(features_CAGARBUDAYA_PT_50K_7);var lyr_CAGARBUDAYA_PT_50K_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAGARBUDAYA_PT_50K_7, 
                style: style_CAGARBUDAYA_PT_50K_7,
                title: '<img src="styles/legend/CAGARBUDAYA_PT_50K_7.png" /> CAGARBUDAYA_PT_50K'
            });var format_DANAU_AR_50K_8 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_8 = format_DANAU_AR_50K_8.readFeatures(json_DANAU_AR_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_AR_50K_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DANAU_AR_50K_8.addFeatures(features_DANAU_AR_50K_8);var lyr_DANAU_AR_50K_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_8, 
                style: style_DANAU_AR_50K_8,
                title: '<img src="styles/legend/DANAU_AR_50K_8.png" /> DANAU_AR_50K'
            });var format_DERMAGA_PT_50K_9 = new ol.format.GeoJSON();
var features_DERMAGA_PT_50K_9 = format_DERMAGA_PT_50K_9.readFeatures(json_DERMAGA_PT_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERMAGA_PT_50K_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DERMAGA_PT_50K_9.addFeatures(features_DERMAGA_PT_50K_9);var lyr_DERMAGA_PT_50K_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DERMAGA_PT_50K_9, 
                style: style_DERMAGA_PT_50K_9,
                title: '<img src="styles/legend/DERMAGA_PT_50K_9.png" /> DERMAGA_PT_50K'
            });var format_GARISRPANTAI_LN_50K_10 = new ol.format.GeoJSON();
var features_GARISRPANTAI_LN_50K_10 = format_GARISRPANTAI_LN_50K_10.readFeatures(json_GARISRPANTAI_LN_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARISRPANTAI_LN_50K_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GARISRPANTAI_LN_50K_10.addFeatures(features_GARISRPANTAI_LN_50K_10);var lyr_GARISRPANTAI_LN_50K_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GARISRPANTAI_LN_50K_10, 
                style: style_GARISRPANTAI_LN_50K_10,
                title: '<img src="styles/legend/GARISRPANTAI_LN_50K_10.png" /> GARISRPANTAI_LN_50K'
            });var format_JALAN_LN_50K_11 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_11 = format_JALAN_LN_50K_11.readFeatures(json_JALAN_LN_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JALAN_LN_50K_11.addFeatures(features_JALAN_LN_50K_11);var lyr_JALAN_LN_50K_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_11, 
                style: style_JALAN_LN_50K_11,
                title: '<img src="styles/legend/JALAN_LN_50K_11.png" /> JALAN_LN_50K'
            });var format_KESEHATAN_PT_50K_12 = new ol.format.GeoJSON();
var features_KESEHATAN_PT_50K_12 = format_KESEHATAN_PT_50K_12.readFeatures(json_KESEHATAN_PT_50K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESEHATAN_PT_50K_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KESEHATAN_PT_50K_12.addFeatures(features_KESEHATAN_PT_50K_12);var lyr_KESEHATAN_PT_50K_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KESEHATAN_PT_50K_12, 
                style: style_KESEHATAN_PT_50K_12,
                title: '<img src="styles/legend/KESEHATAN_PT_50K_12.png" /> KESEHATAN_PT_50K'
            });var format_KONTUR_LN_50K_13 = new ol.format.GeoJSON();
var features_KONTUR_LN_50K_13 = format_KONTUR_LN_50K_13.readFeatures(json_KONTUR_LN_50K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONTUR_LN_50K_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KONTUR_LN_50K_13.addFeatures(features_KONTUR_LN_50K_13);var lyr_KONTUR_LN_50K_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KONTUR_LN_50K_13, 
                style: style_KONTUR_LN_50K_13,
                title: '<img src="styles/legend/KONTUR_LN_50K_13.png" /> KONTUR_LN_50K'
            });var format_NIAGA_PT_50K_14 = new ol.format.GeoJSON();
var features_NIAGA_PT_50K_14 = format_NIAGA_PT_50K_14.readFeatures(json_NIAGA_PT_50K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NIAGA_PT_50K_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NIAGA_PT_50K_14.addFeatures(features_NIAGA_PT_50K_14);var lyr_NIAGA_PT_50K_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NIAGA_PT_50K_14, 
                style: style_NIAGA_PT_50K_14,
                title: '<img src="styles/legend/NIAGA_PT_50K_14.png" /> NIAGA_PT_50K'
            });var format_PELABUHAN_PT_50K_15 = new ol.format.GeoJSON();
var features_PELABUHAN_PT_50K_15 = format_PELABUHAN_PT_50K_15.readFeatures(json_PELABUHAN_PT_50K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PELABUHAN_PT_50K_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PELABUHAN_PT_50K_15.addFeatures(features_PELABUHAN_PT_50K_15);var lyr_PELABUHAN_PT_50K_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PELABUHAN_PT_50K_15, 
                style: style_PELABUHAN_PT_50K_15,
                title: '<img src="styles/legend/PELABUHAN_PT_50K_15.png" /> PELABUHAN_PT_50K'
            });var format_PEMERINTAHAN_PT_50K_16 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_16 = format_PEMERINTAHAN_PT_50K_16.readFeatures(json_PEMERINTAHAN_PT_50K_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_50K_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PEMERINTAHAN_PT_50K_16.addFeatures(features_PEMERINTAHAN_PT_50K_16);var lyr_PEMERINTAHAN_PT_50K_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_16, 
                style: style_PEMERINTAHAN_PT_50K_16,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_16.png" /> PEMERINTAHAN_PT_50K'
            });var format_PEMUKIMAN_AR_50K_17 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_17 = format_PEMUKIMAN_AR_50K_17.readFeatures(json_PEMUKIMAN_AR_50K_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PEMUKIMAN_AR_50K_17.addFeatures(features_PEMUKIMAN_AR_50K_17);var lyr_PEMUKIMAN_AR_50K_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_17, 
                style: style_PEMUKIMAN_AR_50K_17,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_17.png" /> PEMUKIMAN_AR_50K'
            });var format_PENDIDIKAN_PT_50K_18 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_18 = format_PENDIDIKAN_PT_50K_18.readFeatures(json_PENDIDIKAN_PT_50K_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_50K_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PENDIDIKAN_PT_50K_18.addFeatures(features_PENDIDIKAN_PT_50K_18);var lyr_PENDIDIKAN_PT_50K_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENDIDIKAN_PT_50K_18, 
                style: style_PENDIDIKAN_PT_50K_18,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_18.png" /> PENDIDIKAN_PT_50K'
            });var format_PILARBATAS_PT_50K_19 = new ol.format.GeoJSON();
var features_PILARBATAS_PT_50K_19 = format_PILARBATAS_PT_50K_19.readFeatures(json_PILARBATAS_PT_50K_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PILARBATAS_PT_50K_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PILARBATAS_PT_50K_19.addFeatures(features_PILARBATAS_PT_50K_19);var lyr_PILARBATAS_PT_50K_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PILARBATAS_PT_50K_19, 
                style: style_PILARBATAS_PT_50K_19,
                title: '<img src="styles/legend/PILARBATAS_PT_50K_19.png" /> PILARBATAS_PT_50K'
            });var format_PUSKESMAS_PT_50K_20 = new ol.format.GeoJSON();
var features_PUSKESMAS_PT_50K_20 = format_PUSKESMAS_PT_50K_20.readFeatures(json_PUSKESMAS_PT_50K_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_PT_50K_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PUSKESMAS_PT_50K_20.addFeatures(features_PUSKESMAS_PT_50K_20);var lyr_PUSKESMAS_PT_50K_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUSKESMAS_PT_50K_20, 
                style: style_PUSKESMAS_PT_50K_20,
                title: '<img src="styles/legend/PUSKESMAS_PT_50K_20.png" /> PUSKESMAS_PT_50K'
            });var format_RUMAHSAKIT_PT_50K_21 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_21 = format_RUMAHSAKIT_PT_50K_21.readFeatures(json_RUMAHSAKIT_PT_50K_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RUMAHSAKIT_PT_50K_21.addFeatures(features_RUMAHSAKIT_PT_50K_21);var lyr_RUMAHSAKIT_PT_50K_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAHSAKIT_PT_50K_21, 
                style: style_RUMAHSAKIT_PT_50K_21,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_21.png" /> RUMAHSAKIT_PT_50K'
            });var format_SARANAIBADAH_PT_50K_22 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_50K_22 = format_SARANAIBADAH_PT_50K_22.readFeatures(json_SARANAIBADAH_PT_50K_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_PT_50K_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SARANAIBADAH_PT_50K_22.addFeatures(features_SARANAIBADAH_PT_50K_22);var lyr_SARANAIBADAH_PT_50K_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SARANAIBADAH_PT_50K_22, 
                style: style_SARANAIBADAH_PT_50K_22,
                title: '<img src="styles/legend/SARANAIBADAH_PT_50K_22.png" /> SARANAIBADAH_PT_50K'
            });var format_SUNGAI_AR_50K_23 = new ol.format.GeoJSON();
var features_SUNGAI_AR_50K_23 = format_SUNGAI_AR_50K_23.readFeatures(json_SUNGAI_AR_50K_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_50K_23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SUNGAI_AR_50K_23.addFeatures(features_SUNGAI_AR_50K_23);var lyr_SUNGAI_AR_50K_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_AR_50K_23, 
                style: style_SUNGAI_AR_50K_23,
                title: '<img src="styles/legend/SUNGAI_AR_50K_23.png" /> SUNGAI_AR_50K'
            });var format_SUNGAI_LN_50K_24 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_24 = format_SUNGAI_LN_50K_24.readFeatures(json_SUNGAI_LN_50K_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_50K_24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SUNGAI_LN_50K_24.addFeatures(features_SUNGAI_LN_50K_24);var lyr_SUNGAI_LN_50K_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_24, 
                style: style_SUNGAI_LN_50K_24,
                title: '<img src="styles/legend/SUNGAI_LN_50K_24.png" /> SUNGAI_LN_50K'
            });

lyr_ADMINISTRASI_LN_50K_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_AGRIKEBUN_AR_50K_2.setVisible(true);lyr_AIRPORT_AR_50K_3.setVisible(true);lyr_AIRPORT_PT_50K_4.setVisible(true);lyr_BANGUNAN_AR_50K_5.setVisible(true);lyr_BANGUNAN_PT_50K_6.setVisible(true);lyr_CAGARBUDAYA_PT_50K_7.setVisible(true);lyr_DANAU_AR_50K_8.setVisible(true);lyr_DERMAGA_PT_50K_9.setVisible(true);lyr_GARISRPANTAI_LN_50K_10.setVisible(true);lyr_JALAN_LN_50K_11.setVisible(true);lyr_KESEHATAN_PT_50K_12.setVisible(true);lyr_KONTUR_LN_50K_13.setVisible(true);lyr_NIAGA_PT_50K_14.setVisible(true);lyr_PELABUHAN_PT_50K_15.setVisible(true);lyr_PEMERINTAHAN_PT_50K_16.setVisible(true);lyr_PEMUKIMAN_AR_50K_17.setVisible(true);lyr_PENDIDIKAN_PT_50K_18.setVisible(true);lyr_PILARBATAS_PT_50K_19.setVisible(true);lyr_PUSKESMAS_PT_50K_20.setVisible(true);lyr_RUMAHSAKIT_PT_50K_21.setVisible(true);lyr_SARANAIBADAH_PT_50K_22.setVisible(true);lyr_SUNGAI_AR_50K_23.setVisible(true);lyr_SUNGAI_LN_50K_24.setVisible(true);
var layersList = [lyr_ADMINISTRASI_LN_50K_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_AGRIKEBUN_AR_50K_2,lyr_AIRPORT_AR_50K_3,lyr_AIRPORT_PT_50K_4,lyr_BANGUNAN_AR_50K_5,lyr_BANGUNAN_PT_50K_6,lyr_CAGARBUDAYA_PT_50K_7,lyr_DANAU_AR_50K_8,lyr_DERMAGA_PT_50K_9,lyr_GARISRPANTAI_LN_50K_10,lyr_JALAN_LN_50K_11,lyr_KESEHATAN_PT_50K_12,lyr_KONTUR_LN_50K_13,lyr_NIAGA_PT_50K_14,lyr_PELABUHAN_PT_50K_15,lyr_PEMERINTAHAN_PT_50K_16,lyr_PEMUKIMAN_AR_50K_17,lyr_PENDIDIKAN_PT_50K_18,lyr_PILARBATAS_PT_50K_19,lyr_PUSKESMAS_PT_50K_20,lyr_RUMAHSAKIT_PT_50K_21,lyr_SARANAIBADAH_PT_50K_22,lyr_SUNGAI_AR_50K_23,lyr_SUNGAI_LN_50K_24];
lyr_ADMINISTRASI_LN_50K_0.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AIRPORT_AR_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KOBDMI': 'KOBDMI', 'KDICAO': 'KDICAO', 'KDIATA': 'KDIATA', 'ELEVAS': 'ELEVAS', 'MAVBMI': 'MAVBMI', 'LGTBMI': 'LGTBMI', 'KATBMI': 'KATBMI', 'KLSBMI': 'KLSBMI', 'ADABMI': 'ADABMI', 'ADRBMI': 'ADRBMI', 'REMARK': 'REMARK', 'TIPAIP': 'TIPAIP', 'TIPLOK': 'TIPLOK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'RUNWAY': 'RUNWAY', 'PARK': 'PARK', 'LPG': 'LPG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AIRPORT_PT_50K_4.set('fieldAliases', {'KOBDMI': 'KOBDMI', 'KDICAO': 'KDICAO', 'KDIATA': 'KDIATA', 'ELEVAS': 'ELEVAS', 'MAVBMI': 'MAVBMI', 'LGTBMI': 'LGTBMI', 'KLSBMI': 'KLSBMI', 'ADABMI': 'ADABMI', 'ADRBMI': 'ADRBMI', 'REMARK': 'REMARK', 'TIPAIP': 'TIPAIP', 'TIPLOK': 'TIPLOK', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KATKBM': 'KATKBM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_BANGUNAN_AR_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BANGUNAN_PT_50K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_CAGARBUDAYA_PT_50K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DERMAGA_PT_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'PMLDRM': 'PMLDRM', 'OPRDRM': 'OPRDRM', 'LGTDRM': 'LGTDRM', 'LBRDRM': 'LBRDRM', 'LUAS': 'LUAS', 'KDLDRM': 'KDLDRM', 'KSTDRM': 'KSTDRM', 'STRDRM': 'STRDRM', 'REMARK': 'REMARK', 'FGSDRM': 'FGSDRM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_GARISRPANTAI_LN_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'DTMVER': 'DTMVER', 'KARGPN': 'KARGPN', 'FCODE': 'FCODE', 'KODGPN': 'KODGPN', 'TIPGPN': 'TIPGPN', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_11.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KESEHATAN_PT_50K_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_KONTUR_LN_50K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'VALKNT': 'VALKNT', 'TIPKNT': 'TIPKNT', 'IDXKNT': 'IDXKNT', 'FCODE': 'FCODE', 'JNSKNT': 'JNSKNT', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_NIAGA_PT_50K_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FUNGSI': 'FUNGSI', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FGSKOD': 'FGSKOD', 'JNSPSR': 'JNSPSR', 'JNSTKO': 'JNSTKO', 'JNSKTR': 'JNSKTR', 'PRSTRP': 'PRSTRP', });
lyr_PELABUHAN_PT_50K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ADMPEL': 'ADMPEL', 'JNSPEL': 'JNSPEL', 'FGSPEL': 'FGSPEL', 'PJAPEL': 'PJAPEL', 'LAMPEL': 'LAMPEL', 'STUPEL': 'STUPEL', 'KONKON': 'KONKON', 'LUAS': 'LUAS', 'KMXPEL': 'KMXPEL', 'KMNPEL': 'KMNPEL', 'STPPEL': 'STPPEL', 'SRPPEL': 'SRPPEL', 'ALJPEL': 'ALJPEL', 'REMARK': 'REMARK', 'KLSPEL': 'KLSPEL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KODPEL': 'KODPEL', });
lyr_PEMERINTAHAN_PT_50K_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PEMUKIMAN_AR_50K_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PENDIDIKAN_PT_50K_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_PILARBATAS_PT_50K_19.set('fieldAliases', {'IDENTF': 'IDENTF', 'NAMOBJ': 'NAMOBJ', 'METUKR': 'METUKR', 'AKURAH': 'AKURAH', 'KARKTR': 'KARKTR', 'MONUMN': 'MONUMN', 'TIPHPT': 'TIPHPT', 'LOKASI': 'LOKASI', 'FCODE': 'FCODE', 'AKURAV': 'AKURAV', 'KLSPLR': 'KLSPLR', 'ELEVAS': 'ELEVAS', 'REMARK': 'REMARK', 'KLBADM': 'KLBADM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PUSKESMAS_PT_50K_20.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_RUMAHSAKIT_PT_50K_21.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_SARANAIBADAH_PT_50K_22.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUNGAI_AR_50K_23.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_24.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASI_LN_50K_0.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'TextEdit', 'AQDATE': 'TextEdit', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AIRPORT_AR_50K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'KOBDMI': 'TextEdit', 'KDICAO': 'TextEdit', 'KDIATA': 'TextEdit', 'ELEVAS': 'TextEdit', 'MAVBMI': 'TextEdit', 'LGTBMI': 'TextEdit', 'KATBMI': 'TextEdit', 'KLSBMI': 'TextEdit', 'ADABMI': 'TextEdit', 'ADRBMI': 'TextEdit', 'REMARK': 'TextEdit', 'TIPAIP': 'TextEdit', 'TIPLOK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'RUNWAY': 'TextEdit', 'PARK': 'TextEdit', 'LPG': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AIRPORT_PT_50K_4.set('fieldImages', {'KOBDMI': 'TextEdit', 'KDICAO': 'TextEdit', 'KDIATA': 'TextEdit', 'ELEVAS': 'TextEdit', 'MAVBMI': 'TextEdit', 'LGTBMI': 'TextEdit', 'KLSBMI': 'TextEdit', 'ADABMI': 'TextEdit', 'ADRBMI': 'TextEdit', 'REMARK': 'TextEdit', 'TIPAIP': 'TextEdit', 'TIPLOK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'KATKBM': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_BANGUNAN_AR_50K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BANGUNAN_PT_50K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_CAGARBUDAYA_PT_50K_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_DANAU_AR_50K_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'OTODAN': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'VOLTAP': 'TextEdit', 'DTA': 'TextEdit', 'SEDIMN': 'TextEdit', 'VLCSDN': 'TextEdit', 'QUAAR': 'TextEdit', 'CRH': 'TextEdit', 'KPTS': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'LOKASI': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DERMAGA_PT_50K_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'PMLDRM': 'TextEdit', 'OPRDRM': 'TextEdit', 'LGTDRM': 'TextEdit', 'LBRDRM': 'TextEdit', 'LUAS': 'TextEdit', 'KDLDRM': 'TextEdit', 'KSTDRM': 'TextEdit', 'STRDRM': 'TextEdit', 'REMARK': 'TextEdit', 'FGSDRM': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_GARISRPANTAI_LN_50K_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'DTMVER': 'TextEdit', 'KARGPN': 'TextEdit', 'FCODE': 'TextEdit', 'KODGPN': 'TextEdit', 'TIPGPN': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LN_50K_11.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_KESEHATAN_PT_50K_12.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_KONTUR_LN_50K_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'VALKNT': 'TextEdit', 'TIPKNT': 'TextEdit', 'IDXKNT': 'TextEdit', 'FCODE': 'TextEdit', 'JNSKNT': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_NIAGA_PT_50K_14.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FUNGSI': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FGSKOD': 'TextEdit', 'JNSPSR': 'TextEdit', 'JNSTKO': 'TextEdit', 'JNSKTR': 'TextEdit', 'PRSTRP': 'TextEdit', });
lyr_PELABUHAN_PT_50K_15.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'ADMPEL': 'TextEdit', 'JNSPEL': 'TextEdit', 'FGSPEL': 'TextEdit', 'PJAPEL': 'TextEdit', 'LAMPEL': 'TextEdit', 'STUPEL': 'TextEdit', 'KONKON': 'TextEdit', 'LUAS': 'TextEdit', 'KMXPEL': 'TextEdit', 'KMNPEL': 'TextEdit', 'STPPEL': 'TextEdit', 'SRPPEL': 'TextEdit', 'ALJPEL': 'TextEdit', 'REMARK': 'TextEdit', 'KLSPEL': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KODPEL': 'TextEdit', });
lyr_PEMERINTAHAN_PT_50K_16.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PEMUKIMAN_AR_50K_17.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PENDIDIKAN_PT_50K_18.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_PILARBATAS_PT_50K_19.set('fieldImages', {'IDENTF': 'TextEdit', 'NAMOBJ': 'TextEdit', 'METUKR': 'TextEdit', 'AKURAH': 'TextEdit', 'KARKTR': 'TextEdit', 'MONUMN': 'TextEdit', 'TIPHPT': 'TextEdit', 'LOKASI': 'TextEdit', 'FCODE': 'TextEdit', 'AKURAV': 'TextEdit', 'KLSPLR': 'TextEdit', 'ELEVAS': 'TextEdit', 'REMARK': 'TextEdit', 'KLBADM': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PUSKESMAS_PT_50K_20.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KWKPKM_': 'TextEdit', 'KMPPKM_': 'TextEdit', 'JPLPKM_': 'TextEdit', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'TextEdit', 'PKMLMT_': 'TextEdit', });
lyr_RUMAHSAKIT_PT_50K_21.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', });
lyr_SARANAIBADAH_PT_50K_22.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_SUNGAI_AR_50K_23.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_LN_50K_24.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ADMINISTRASI_LN_50K_0.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AIRPORT_AR_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'KOBDMI': 'no label', 'KDICAO': 'no label', 'KDIATA': 'no label', 'ELEVAS': 'no label', 'MAVBMI': 'no label', 'LGTBMI': 'no label', 'KATBMI': 'no label', 'KLSBMI': 'no label', 'ADABMI': 'no label', 'ADRBMI': 'no label', 'REMARK': 'no label', 'TIPAIP': 'no label', 'TIPLOK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'RUNWAY': 'no label', 'PARK': 'no label', 'LPG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AIRPORT_PT_50K_4.set('fieldLabels', {'KOBDMI': 'no label', 'KDICAO': 'no label', 'KDIATA': 'no label', 'ELEVAS': 'no label', 'MAVBMI': 'no label', 'LGTBMI': 'no label', 'KLSBMI': 'no label', 'ADABMI': 'no label', 'ADRBMI': 'no label', 'REMARK': 'no label', 'TIPAIP': 'no label', 'TIPLOK': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'KATKBM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_BANGUNAN_AR_50K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BANGUNAN_PT_50K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_CAGARBUDAYA_PT_50K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_DANAU_AR_50K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DERMAGA_PT_50K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'PMLDRM': 'no label', 'OPRDRM': 'no label', 'LGTDRM': 'no label', 'LBRDRM': 'no label', 'LUAS': 'no label', 'KDLDRM': 'no label', 'KSTDRM': 'no label', 'STRDRM': 'no label', 'REMARK': 'no label', 'FGSDRM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_GARISRPANTAI_LN_50K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'DTMVER': 'no label', 'KARGPN': 'no label', 'FCODE': 'no label', 'KODGPN': 'no label', 'TIPGPN': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_50K_11.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KESEHATAN_PT_50K_12.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_KONTUR_LN_50K_13.set('fieldLabels', {'NAMOBJ': 'no label', 'VALKNT': 'no label', 'TIPKNT': 'no label', 'IDXKNT': 'no label', 'FCODE': 'no label', 'JNSKNT': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_NIAGA_PT_50K_14.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FUNGSI': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FGSKOD': 'no label', 'JNSPSR': 'no label', 'JNSTKO': 'no label', 'JNSKTR': 'no label', 'PRSTRP': 'no label', });
lyr_PELABUHAN_PT_50K_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ADMPEL': 'no label', 'JNSPEL': 'no label', 'FGSPEL': 'no label', 'PJAPEL': 'no label', 'LAMPEL': 'no label', 'STUPEL': 'no label', 'KONKON': 'no label', 'LUAS': 'no label', 'KMXPEL': 'no label', 'KMNPEL': 'no label', 'STPPEL': 'no label', 'SRPPEL': 'no label', 'ALJPEL': 'no label', 'REMARK': 'no label', 'KLSPEL': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KODPEL': 'no label', });
lyr_PEMERINTAHAN_PT_50K_16.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMUKIMAN_AR_50K_17.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PENDIDIKAN_PT_50K_18.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_PILARBATAS_PT_50K_19.set('fieldLabels', {'IDENTF': 'no label', 'NAMOBJ': 'no label', 'METUKR': 'no label', 'AKURAH': 'no label', 'KARKTR': 'no label', 'MONUMN': 'no label', 'TIPHPT': 'no label', 'LOKASI': 'no label', 'FCODE': 'no label', 'AKURAV': 'no label', 'KLSPLR': 'no label', 'ELEVAS': 'no label', 'REMARK': 'no label', 'KLBADM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PUSKESMAS_PT_50K_20.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_RUMAHSAKIT_PT_50K_21.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_SARANAIBADAH_PT_50K_22.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SUNGAI_AR_50K_23.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_LN_50K_24.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_50K_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});