/*class Cylinder extends Figure { 
    constructor (count = 20, h = 15, a = 10, b = 10)  {
    const points = [];
    const edges = [];
    const polygons = [];

   

    //точки
    const dt = 2 * Math.PI / count;
    for (let p = -h; p < h; p = p + 2) {
        for (let i = 0; i <= Math.PI; i += 2 * dt + count) {
            for (let j = 0; j < 2 * Math.PI; j += dt) {
                points.push(new Point(
                    a * Math.cos(i) * Math.cos(j),
                    b * Math.sin(j),
                    p
                ));
            }
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
        } else if ((i + 1) % count === 0) {
            edges.push(new Edge(
                i,
                i + 1 - count
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
    for (let i = 0; i < points.length; i++) {
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count]))
        }
    }

    return new Figure (points, edges, polygons);
}
}*/

Figure.prototype.cylinder = (count = 20, h = 15, a = 10, b = 10) => {
    const points = [];
    const edges = [];
    const polygons = [];

    //точки
    const dt = 2 * Math.PI / count;
    for (let p = -h; p < h; p = p + 2) {
        for (let i = 0; i <= Math.PI; i += 2 * dt + count) {
            for (let j = 0; j < 2 * Math.PI; j += dt) {
                points.push(new Point(
                    a * Math.cos(i) * Math.cos(j),
                    b * Math.sin(j),
                    p
                ));
            }
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
        } else if ((i + 1) % count === 0) {
            edges.push(new Edge(
                i,
                i + 1 - count
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
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count]))
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

    return new Figure(points, edges, polygons);
}