Template.prototype.Math3DTemplate = () => `
    <canvas id="canvas3D" class="canvas3D">
    </canvas>
    <div class="checkbox">
        <input id="drawPoints" type="checkbox"><label for="drawPoints"> точки</label></input> 
        <br><input id="drawEdges" type="checkbox"><label for="drawEdges"> ребра</label></input>
        <br><input id="drawPolygons" type="checkbox" checked><label for="drawPolygons"> полигоны</label></input>   
        <br><input id="dark" type="checkbox"><label for="dark"> тени</label></input>   
        <br><input id="light" type="checkbox"><label for="light"> свет</label></input> 
    </div>
    <div>
        <select id="figures" class="figures">
            <option value="nothing">Фигуры</option>
            <option value="cube">Куб</option>
            <option value="cone">Конус</option>
            <option value="Tor">Тор</option>
            <option value="cylinder">Цилиндр</option>
            <option value="sphere">Сфера</option>
            <option value="ellipsoid">Эллипсоид</option>
            <option value="oneSheetedHyperboloid">Однополостный гиперболоид</option>
            <option value="twoSheetedHyperboloid">Двухполостный гиперболоид</option>
            <option value="hyperbolicParaboloid">Гиперболический параболоид</option>
            <option value="ellipticalParaboloid">Эллиптический параболоид</option>
            <option value="ellipticalCylinder">Эллиптический цилиндр</option>
            <option value="hyperbolicCylinder">Гиперболический цилиндр</option>
            <option value="parabolicCylinder">Параболический цилиндр</option>
        </select>
    </div>
    <div>
        <button id="delete" class="del">удалить</button>
    </div>
    <div>
        <input class="powerlight" type="range" min="25000" max="50000" value="powerlight" id="powerlight">
    </div>
    <div>
        <input type="color" id="color" placeholder="color" class="color">
    </div>
`;