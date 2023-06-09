class Figure{
    constructor(
        points = [], 
        edges = [], 
        polygons = [], 
        animations = [], 
        center = new Point,
        joined = []
    ) {
        this.points = points;
        this.edges = edges;
        this.polygons = polygons;
        this.animations = animations;
        this.center = center;
        this.joined = joined;
    }
    dropAnimation(){
        this.animations=[];
    }
    setAnimation(method, value, center){
        this.animations.push({[method]:value,
        center:center?center:this.center});
    }
}