class Car{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration=0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls();

    }

    update(){
        this.#move();
    }

    #move(){
        //Acceleration
        if(this.controls.forward){
            this.speed += this.acceleration;
        }
        if(this.controls.reverse){
            this.speed -= this.acceleration;
        }

        //Speed limit
        if(this.speed>this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed){
            this.speed = -this.maxSpeed/2;
        }

        //Speed friction
        if(this.speed > 0){
            this.speed -= this.friction;
        }
        if(this.speed < 0){
            this.speed += this.friction;
        }
        if(Math.abs(this.speed) < this.friction){
            this.speed = 0;
        }

        //Turn
        if(this.speed != 0){
            const heading = this.speed > 0 ? 1 : -1;
            if(this.controls.left){
                this.angle+=0.03*heading;
            }
            if(this.controls.right){
                this.angle-=0.03*heading;
            }
        }

        //Movement
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            this.x - this.width/2,
            this.y - this.height/2,
            this.width,
            this.height
        );

        ctx.fill();
        ctx.restore();
    }

}