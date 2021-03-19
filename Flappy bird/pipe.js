class pipe{
    constructor(h1,h2,width,x,y1,y2){
        this.h1 = h1;
        this.h2 = h2;
        this.width = width;
        this.x = x;
        this.y1 = y1;
        this.y2 = y2;
        this.sprite1 = loadImage('Sprites/pipe.png');
        this.sprite2 = loadImage('Sprites/pipe-img.png');
        this.rectangle1 = 0;
        this.rectangle2 = 0;
    }
    getpipeRect1()
    {
        
        return this.rectangle1;
    }
    getpipeRect2(){

        return this.rectangle2;
    }
    drawUpwardPipes(){
        push();
        //imageMode(CENTER);
        translate(this.x,this.y1+this.h1/2);
        image(this.sprite2,0-this.width/2,0-this.h1/2,this.width,this.h1);
        this.rectangle1 = [this.x-this.width/2,this.y1+this.h1/2-this.h1/2,this.width,this.h1];
        pop();
    }
    drawDownwardPipes(){
        fill(255,0,0);
        push();
        translate(this.x,this.y2-this.h2/2);
        image(this.sprite1,0-this.width/2,0-this.h2/2,this.width,this.h2);
        this.rectangle2 = [this.x-this.width/2,this.y2-this.h2/2-this.h2/2,this.width,this.h2];
        pop();
        
    }

    move(){
        this.x-=2;
        if(this.x<-300){
            return true
        }
        else{
            return false;
        }
    }

};
