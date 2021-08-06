import { LightningElement, track } from 'lwc';
  
export default class TrexGame extends LightningElement {
   
    @track dynamic = 'trex';
    @track scores = 0;
    @track maxScore = 0;
    @track move = true;
    @track anim = true;
    @track name = "";
    
    connectedCallback(){
        this.name = prompt("Enter Name")

    }

         jump(){
           
            this.dynamic = 'trex animate';
         setTimeout(() => {
             this.dynamic = 'trex';
            
         }, 500)

        }
        
        @track play = false;
        playing () {
            this.touch;
        }



 touch = setInterval(() => {
     
    let char = this.template.querySelector('[data-id="char"]');
    let obs = this.template.querySelector('[data-id="obs"]');
    
    let topChar = char.getBoundingClientRect().top;
    let leftChar = char.getBoundingClientRect().left;

    let topObs = obs.getBoundingClientRect().top;
    let leftObs = obs.getBoundingClientRect().left;
 
     //leftObs<200 && leftObs>0 &&
       //543 bottom && 465 top
       if(topChar>513 && leftObs<200 && leftObs>0 ){
          
            obs.style.animation = "none";
             alert(` ${this.name} your game is over : ${this.scores}`);
             if(this.maxScore < this.scores){
                this.maxScore = this.scores;
                
            } 
            this.scores = 0;   
            this.scores += 0;
            this.play = false;
            clearInterval(this.scores)
            
        } else {
           this.scores++;
           obs.style.animation = "obsticle 1s infinite linear";
        }
         
    },20)
    
    

}