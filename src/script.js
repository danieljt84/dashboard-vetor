function gauge(){
  var opts = {
    angle: -0.25,
    lineWidth: 0.2,
    radiusScale:0.9,
    pointer: {
      length: 0.6,
      strokeWidth: 0.05,
      color: '#000000'
    },
    staticLabels: {
      font: "10px sans-serif",
      labels: [200, 500, 2100, 2800],
      fractionDigits: 0
    },
    staticZones: [
       {strokeStyle: "#F03E3E", min: 0, max: 200},
       {strokeStyle: "#FFDD00", min: 200, max: 500},
       {strokeStyle: "#30B32D", min: 500, max: 2100},
       {strokeStyle: "#FFDD00", min: 2100, max: 2800},
       {strokeStyle: "#F03E3E", min: 2800, max: 3000}
    ],
    limitMax: false,
    limitMin: false,
    highDpiSupport: true
  };
    percentColors : [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]];
    var target = document.getElementById('gauge'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 3000; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(1250); // set actu
  
}
