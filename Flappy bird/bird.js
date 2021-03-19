class bird{
    constructor(height,width,x,y){
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.circle = [];
        this.sprite = [loadImage('Sprites/frame-1.png'),loadImage('Sprites/frame-2.png')];
    }
    flap(){
        if(this.y>0){
            this.y-=10;
        }
        this.draw(0);
    }
    gravityPull(){

        if(this.y>height-70){
            console.log('Game over!');
            noLoop();
        }
        else{
            this.y+=5;
        }
        this.draw(1);
    }
    
    draw(index){
        push();
        imageMode(CENTER);
        image(this.sprite[index],this.x,this.y,this.width,this.height);
        this.circle = [this.x,this.y,this.width-15];
        pop();
    }
    getbirdCircle(){
        return this.circle;
    }
};