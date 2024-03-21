class Contols{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.revese = false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break; 
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.revese = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
            }
            console.table(this);
        }

        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break; 
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.revese = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
            }
            console.table(this);
        }
    }
}