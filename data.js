var APP_DATA = {
  "scenes": [
    {
      "id": "0-wash",
      "name": "wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.07125497453489515,
        "pitch": 0,
        "fov": 1.0770896626182533
      },
      "linkHotspots": [
        {
          "yaw": 0.5289804066983272,
          "pitch": 0.008689631927975228,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": -0.318650006911378,
          "pitch": 0.12811410485635832,
          "rotation": 0,
          "target": "2-majilis"
        },
        {
          "yaw": 0.302164364045316,
          "pitch": -0.034868231624086476,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.5024643476030581,
          "pitch": -0.006979064414952774,
          "rotation": 0,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.511205836404633,
        "pitch": 0.0034536878839475094,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.884515436933011,
          "pitch": 0.07793905965661807,
          "rotation": 0,
          "target": "0-wash"
        },
        {
          "yaw": -1.0003801509036627,
          "pitch": 0.1461341705502761,
          "rotation": 0,
          "target": "2-majilis"
        },
        {
          "yaw": 0.6321053881690517,
          "pitch": 0.030554869028261322,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -2.9476838180959426,
          "pitch": 0.08476722911840895,
          "rotation": 4.71238898038469,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-majilis",
      "name": "majilis",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.795793311033914,
          "pitch": 0.024373287115405873,
          "rotation": 0,
          "target": "0-wash"
        },
        {
          "yaw": 1.1315802297146114,
          "pitch": 0.10865783477325408,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": 0.7347022872860975,
          "pitch": -0.02962793043962364,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.9485501338729083,
          "pitch": -0.026100634160780345,
          "rotation": 0,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living",
      "name": "living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.7831218790450194,
        "pitch": 0.010621099828092895,
        "fov": 0.7587641881365133
      },
      "linkHotspots": [
        {
          "yaw": 0.4786549873216295,
          "pitch": -0.1751894653050261,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": -0.28684607191613054,
          "pitch": -0.05977807804186952,
          "rotation": 0,
          "target": "0-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
