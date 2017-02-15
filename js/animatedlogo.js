bonsai.run(document.getElementById('animated-logo'), {
code: function() {
        var degToRad = function(_deg) {
            return (_deg/360) * 2*Math.PI;
        };
        var radius = 47;
        var circleRadius = 16;
        var posX = 65;
        var posY = 65;
        var initialRotation = 18;
        for (var i=0; i<180; i++) {
            var rad = degToRad(initialRotation + i*2);
            new Circle(posX+radius*Math.cos(-rad), posY+radius*Math.sin(rad), circleRadius)
            .attr({ strokeWidth: 2, strokeColor: '#3232EB', opacity: 0.0 }).addTo(stage)
            .animate( 100, { opacity: 0.3*i/180 }, {easing: 'elasticOut', delay: i/4});
        }
    },
    width: 230,
    height: 230
});
