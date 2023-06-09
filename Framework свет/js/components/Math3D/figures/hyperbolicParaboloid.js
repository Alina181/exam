// z = x^2 / a^2 + y^2 / b^2
Figure.prototype.hyperbolicParaboloid = (count = 20, a = 3, b = 2) => {
    const points = [];
    const edges = [];
    const polygons = [];

    // точки
    for (let x = -count / 2; x < count / 2; x++) {
        for (let y = -count / 2; y < count / 2; y++) {
            points.push(new Point(
                x,
                y,
                x * x / (a * a) - y * y / (b * b)
            ));
        }
    }

    //ребра
    for (let i = 0; i < points.length; i++) {
        //вдоль
        if (i + 1 < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(
                i,
                i + 1
            ));
        }
        //поперек
        if (i < points.length - count) {
            edges.push(new Edge(
                i,
                i + count
            ));
        }
    }

    //полигоны
    /*for (let i = 0; i < points.length; i++) {
        if (i % 2 === 0) {
            if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
            }
        } else if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
        }
    }*/

    let color1 = '#00ff00';
     let color2 = '#00ffff';
     for (let i = 0; i < points.length; i++) {
         if (i + 1 + count < points.length && (i + 1) % count !== 0) {
             if (i % 2 !== 0) polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color1));
             else polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color2));
         } else if (i + count < points.length && (i + 1) % count === 0) {
             polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color1))
         }
         if ((i + 1 + count) % count === 0) {
             let a = color1;
             color1 = color2;
             color2 = a;
         }
     }

    return new Figure (points, edges, polygons);
}