//midias sociais
 var colors = [
        ['rgba(0, 0, 0, 0.33)', '#3d5ab4'], 
        ['rgba(0, 0, 0, 0.33)', '#3ba08c'], 
        ['rgba(0, 0, 0, 0.33)', '#8b3252'], 
        ['rgba(0, 0, 0, 0.33)', '#d38234'], 
      ],
      circles = [];
    for (var i = 1; i <= 4; i++) {
      var child = document.getElementById('circles-' + i),
        percentage = 31.42 + (i * 9.84),
        
        circle = Circles.create({
          id:         child.id,
          value:      percentage,
          radius:     getWidth(),
          width:      5,
          colors:     colors[i - 1]
        });
      circles.push(circle);
    }
    window.onresize = function(e) {
      for (var i = 0; i < circles.length; i++) {
        circles[i].updateRadius(getWidth());
      }
    };
    function getWidth() {
      return window.innerWidth / 25;
    }