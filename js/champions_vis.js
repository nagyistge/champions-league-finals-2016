'use strict';

(function () {
    window.champions = window.champions || {};

    window.champions.vis = {
        "title": "Final Champions League 2016",
        "description": "Real Madrid vs. Atlético de Madrid. Powered by CartoDB.",
        "user": {
            "fullname": "Real Madrid",
            "avatar_url": "img/real_madrid.png"
        },
        "updated_at": "2016-05-23T11:50:30+00:00",
        "widgets": [
            {
                "type": "formula",
                "title": "Total conversación",
                "layer_id": "e487cc62-45a0-4cbe-860c-2c6a14752755",
                "operation": "sum",
                "column": "cartodb_id"
            },
            {
                "type": "category",
                "title": "Jugadores",
                "layer_id": "e487cc62-45a0-4cbe-860c-2c6a14752755",
                "options": {
                    "type": "aggregation",
                    "column": "jugador",
                    "aggregation": "count",
                    "aggregationColumn": "cartodb_id",
                    "sync": true,
                },
            },
            {
                "layer_id": "e487cc62-45a0-4cbe-860c-2c6a14752755",
                "type": "time-series",
                "columnType": "number",
                "column": "postedtime",
                "options": {
                    "bins": 256,
                    "start": 1454885167, //1454672461,
                    "end": 1454903093
                }
            }
        ],
        "datasource": {
            "type": "public_map",
            "user_name": "realmadridweb",
            "maps_api_template": "https://{user}.cartodb.com",
            "stat_tag": "cadf276c-2122-11e6-ba6e-0e3ff518bd15",
        },
        "id": "8ecf42c6-ce29-11e5-83dc-0ea31932ec1d",
        "version": "0.1.0",
        "likes": 0,
        "scrollwheel": true,
        "legends": true,
        "url": null,
        "map_provider": "leaflet",
        "bounds":null,
        "center": "[15.199386048560008, 9.580078125]",
        "zoom": 3,
        "updated_at": "2016-05-23T13:40:50+00:00",
        "layers": [
            {
                "options": {
                    "visible": true,
                    "type": "Tiled",
                    "name": "Dark matter (lite)",
                    "className": "dark_matter_lite_rainbow",
                    "base_type": "default",
                    "urlTemplate": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png",
                    "minZoom": "0",
                    "maxZoom": "18",
                    "attribution": "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"http://cartodb.com/attributions\">CartoDB</a>",
                    "subdomains": "abcd",
                    "style": null,
                    "read_only": true,
                    "category": "CartoDB",
                    "order": 0,
                    "id": "90654225-5b6d-4be6-be89-1987a91fe824"
                },
                "infowindow": null,
                "tooltip": null,
                "id": "e326cfa4-5854-47eb-8e5a-9d6fd61b1c96",
                "order": 0,
                "type": "tiled"
            },
            {
                "id": "e487cc62-45a0-4cbe-860c-2c6a14752755",
                "type": "torque",
                "order": 2,
                "legend": null,
                "options": {
                    "stat_tag": "8ecf42c6-ce29-11e5-83dc-0ea31932ec1d",
                    "maps_api_template": "https://{user}.cartodb.com:443",
                    "sql_api_template": "https://{user}.cartodb.com:443",
                    "tiler_protocol": "http",
                    "tiler_domain": "cartodb.com",
                    "tiler_port": "80",
                    "sql_api_protocol": "http",
                    "sql_api_domain": "cartodb.com",
                    "sql_api_endpoint": "/api/v2/sql",
                    "sql_api_port": 80,
                    "layer_name": "final_champions_2016",
                    "cartocss": '/** torque_cat visualization \n@hala: #FFFFFF;\n@undecima: #FFFFFF;\n@zidane: #B2DF8A;\n@bale: #33A02C;\n@ramos: #FB9A99;\n@cristiano: #E31A1C;\n@keylor #FDBF6F;\n@pepe: #FF7F00;\n@modric: #CAB2D6;\n@lucas: #B2DF8A;\n@casemiro: #33A02C;\n@james: #FB9A99;\n@kross: #E31A1C;\n@benzema: #FDBF6F;\n@bale: #FF7F00;\n@isco: #CAB2D6:\n@carvajal: #B2DF8A;\n@marcelo: #33A02C;\n@varane: #FB9A99;\n@nacho: #E31A1C;\n@casilla: #FDBF6F;\n@yanez: #FF7F00;\n@kovacic: #CAB2D6;\n@jese: #6A3D9A;\n@arbeloa: #FF7F00;*/\n\n@category1: #FFFFFF;\n@category2: #FFFFFF;\n@category3: #B2DF8A;\n@category4: #33A02C;\n@category5: #FB9A99;\n@category6: #E31A1C;\n@category7: #FDBF6F;\n@category8: #FF7F00;\n@category9: #CAB2D6;\n@category10: #B2DF8A;\n@category11: #33A02C;\n@category12: #FB9A99;\n@category13: #E31A1C;\n@category14: #FDBF6F;\n@category15: #FF7F00;\n@category16: #CAB2D6;\n@category17: #B2DF8A;\n@category18: #33A02C;\n@category19: #FB9A99;\n@category20: #E31A1C;\n@category21: #FDBF6F;\n@category22: #FF7F00;\n@category23: #CAB2D6;\n@category24: #6A3D9A;\n@category25: #FF7F00;\n\nMap {\n-torque-frame-count:1024;\n-torque-animation-duration:30;\n-torque-time-attribute:\"postedtime\";\n-torque-aggregation-function:\"CDB_Math_Mode(torque_category)\";\n-torque-resolution:8;\n-torque-data-aggregation:linear;\n}\n\n#final_champions_2016{\n comp-op: screen;\n marker-fill-opacity: 0.2;\n marker-line-opacity: 0;\n marker-type: ellipse;\n marker-width: 3;\n [value=1] {\n  marker-fill: @category1;\n  }\n [value=2] {\n  marker-fill: @category2;\n  }\n [value=3] {\n  marker-fill: @category3;\n  }\n [value=4] {\n  marker-fill: @category4;\n  }\n [value=5] {\n  marker-fill: @category5;\n  }\n [value=6] {\n  marker-fill: @category6;\n  }\n [value=7] {\n  marker-fill: @category7;\n  }\n [value=8] {\n  marker-fill: @category8;\n  }\n [value=9] {\n  marker-fill: @category9;\n  }  \n [value=10] {\n  marker-fill: @category10;\n  }  \n [value=11] {\n  marker-fill: @category11;\n  }\n [value=12] {\n  marker-fill: @category12;\n  }\n [value=13] {\n  marker-fill: @category13;\n  }\n [value=14] {\n  marker-fill: @category14;\n  }  \n [value=15] {\n  marker-fill: @category15;\n  }  \n [value=16] {\n  marker-fill: @category16;\n  }\n [value=17] {\n  marker-fill: @category17;\n  }  \n [value=18] {\n  marker-fill: @category18;\n  }  \n [value=19] {\n  marker-fill: @category19;\n  }\n [value=20] {\n  marker-fill: @category20;\n  }  \n [value=21] {\n  marker-fill: @category21;\n  }  \n [value=22] {\n  marker-fill: @category22;\n  }\n [value=23] {\n  marker-fill: @category23;\n  }  \n [value=24] {\n  marker-fill: @category24;\n  }  \n [value=25] {\n  marker-fill: @category25;\n  }\n}\n\n\n#final_champions_2016[frame-offset=1] {\nmarker-width:4; \n marker-fill-opacity: 0.18;\n\n}\n#final_champions_2016[frame-offset=2] {\nmarker-width:4.5; \n marker-fill-opacity: 0.17;\n\n}\n#final_champions_2016[frame-offset=3] {\nmarker-width:5;\n marker-fill-opacity: 0.16;\n\n}\n#final_champions_2016[frame-offset=4] {\nmarker-width:5.5;\n marker-fill-opacity: 0.15;\n\n}\n#final_champions_2016[frame-offset=5] {\nmarker-width:6;\n marker-fill-opacity: 0.14;\n\n}\n\n#final_champions_2016[frame-offset=6] {\nmarker-width:6.5;\n marker-fill-opacity: 0.13;\n\n}\n#final_champions_2016[frame-offset=7] {\nmarker-width:7;\n marker-fill-opacity: 0.12;\n\n}\n#final_champions_2016[frame-offset=8] {\nmarker-width:7.5;\n marker-fill-opacity: 0.11;\n\n}\n#final_champions_2016[frame-offset=9] {\nmarker-width:8;\n marker-fill-opacity: 0.10;\n}\n\n\n#final_champions_2016::point{\n comp-op: screen;\n marker-fill-opacity: 1;\n marker-line-color: transparent;\n marker-type: ellipse;\n marker-fill: #0255a5 ;\n [value=1] {\n  marker-fill: @category1;\n  }\n [value=2] {\n  marker-fill: @category2;\n  }\n [value=3] {\n  marker-fill: @category3;\n  }\n [value=4] {\n  marker-fill: @category4;\n  }\n [value=5] {\n  marker-fill: @category5;\n  }\n [value=6] {\n  marker-fill: @category6;\n  }\n [value=7] {\n  marker-fill: @category7;\n  }\n [value=8] {\n  marker-fill: @category8;\n  }\n [value=9] {\n  marker-fill: @category9;\n  }  \n [value=10] {\n  marker-fill: @category10;\n  }  \n [value=11] {\n  marker-fill: @category11;\n  }\n [value=12] {\n  marker-fill: @category12;\n  }\n [value=13] {\n  marker-fill: @category13;\n  }\n [value=14] {\n  marker-fill: @category14;\n  }  \n [value=15] {\n  marker-fill: @category15;\n  }  \n [value=16] {\n  marker-fill: @category16;\n  }\n [value=17] {\n  marker-fill: @category17;\n  }  \n [value=18] {\n  marker-fill: @category18;\n  }  \n [value=19] {\n  marker-fill: @category19;\n  }\n [value=20] {\n  marker-fill: @category20;\n  }  \n [value=21] {\n  marker-fill: @category21;\n  }  \n [value=22] {\n  marker-fill: @category22;\n  }\n [value=23] {\n  marker-fill: @category23;\n  }  \n [value=24] {\n  marker-fill: @category24;\n  }  \n [value=25] {\n  marker-fill: @category25;\n  }\n}\n\n#final_champions_2016::point[frame-offset=1] {\nmarker-width:1.4;\nmarker-fill-opacity:0.4; \n}\n#final_champions_2016::point[frame-offset=2] {\nmarker-width:1.8;\nmarker-fill-opacity:0.35; \n}\n#final_champions_2016::point[frame-offset=3] {\nmarker-width:2.2;\nmarker-fill-opacity:0.30; \n}\n#final_champions2016::point[frame-offset=4] {\nmarker-width:2.4;\nmarker-fill-opacity:0.25; \n}\n#final_champions_2016::point[frame-offset=5] {\nmarker-width:2.6;\nmarker-fill-opacity:0.20; \n}\n#final_champions_2016::point[frame-offset=6] {\nmarker-width:2.8;\nmarker-fill-opacity:0.15; \n}\n#final_champions_2016::point[frame-offset=7] {\nmarker-width:3;\nmarker-fill-opacity:0.1; \n}\n\n\n\n',
                    "sql": "select *, (CASE WHEN \"category_name\" = 3 THEN 'Zidane' WHEN \"category_name\" = 4 THEN 'Bale' WHEN \"category_name\" = 5 THEN 'Ramos' WHEN \"category_name\" = 6 THEN 'Cristiano' WHEN \"category_name\" = 7 THEN 'Navas' WHEN \"category_name\" = 8 THEN 'Pepe' WHEN \"category_name\" = 9 THEN 'Modric' WHEN \"category_name\" = 10 THEN 'Vázquez' WHEN \"category_name\" = 11 THEN 'Casemiro' WHEN \"category_name\" = 12 THEN 'James' WHEN \"category_name\" = 13 THEN 'Kroos' WHEN \"category_name\" = 14 THEN 'Benzema' WHEN \"category_name\" = 15 THEN 'Bale' WHEN \"category_name\" = 16 THEN 'Isco' WHEN \"category_name\" = 17 THEN 'Carvajal' WHEN \"category_name\" = 18 THEN 'Marcelo' WHEN \"category_name\" = 19 THEN 'Verane' WHEN \"category_name\" = 20 THEN 'Nacho' WHEN \"category_name\" = 21 THEN 'Casilla' WHEN \"category_name\" = 22 THEN 'Yáñez' WHEN \"category_name\" = 23 THEN 'Kovacic' WHEN \"category_name\" = 24 THEN 'Jesé' WHEN \"category_name\" = 25 THEN 'Arbeloa' ELSE NULL END) as jugador, (CASE WHEN \"category_name\" = 1 THEN 1 WHEN \"category_name\" = 2 THEN 2 WHEN \"category_name\" = 3 THEN 3 WHEN \"category_name\" = 4 THEN 4 WHEN \"category_name\" = 5 THEN 5 WHEN \"category_name\" = 6 THEN 6 WHEN \"category_name\" = 7 THEN 7 WHEN \"category_name\" = 8 THEN 8 WHEN \"category_name\" = 9 THEN 9 WHEN \"category_name\" = 10 THEN 10 WHEN \"category_name\" = 11 THEN 11 WHEN \"category_name\" = 12 THEN 12 WHEN \"category_name\" = 13 THEN 13 WHEN \"category_name\" = 14 THEN 14 WHEN \"category_name\" = 15 THEN 15 WHEN \"category_name\" = 16 THEN 16 WHEN \"category_name\" = 17 THEN 17 WHEN \"category_name\" = 18 THEN 18 WHEN \"category_name\" = 19 THEN 19 WHEN \"category_name\" = 20 THEN 20 WHEN \"category_name\" = 21 THEN 21 WHEN \"category_name\" = 22 THEN 22 WHEN \"category_name\" = 23 THEN 23 WHEN \"category_name\" = 24 THEN 24 WHEN \"category_name\" = 25 THEN 25 ELSE NULL END) as torque_category FROM (SELECT * FROM final_champions_2016) _cdb_wrap",
                    "visible": true,
                    "table_name": "final_champions_2016",
                    "user_name": "realmadridweb",
                }
            }
        ],
        "overlays": [
            {
                "type": "search",
                "order": 3,
                "options": {
                    "display": true,
                    "x": 60,
                    "y": 20
                },
                "template": ""
            },
            {
                "type": "zoom",
                "order": 6,
                "options": {
                    "display": true,
                    "x": 20,
                    "y": 20
                },
                "template": '<div class="CDB-Overlay">' +
                    '<button class="CDB-Zoom-action CDB-Zoom-action--out js-zoomOut"></button>' +
                    '<button class="CDB-Zoom-action CDB-Zoom-action--in js-zoomIn"></button>' +
                    '</div>' +
                    '<div class="CDB-Zoom-info js-zoomInfo">-</div>'
            },
            {
                "type": "loader",
                "order": 8,
                "options": {
                    "display": true,
                    "x": 20,
                    "y": 150
                },
                "template": "<div class=\"loader\" original-title=\"\"></div>"
            },
            {
                "type": "logo",
                "order": 9,
                "options": {
                    "display": true,
                    "x": 10,
                    "y": 40
                },
                "template": ""
            }
        ],
        "prev": null,
        "next": null,
        "transition_options": {
            "time": 0
        }
    }
})();
