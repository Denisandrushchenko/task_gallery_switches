'use strict'

class Galery{

    constructor(section, close , swapRight , swapLeft , bigImage, srcImage1 , srcImage2 , srcImage3)
    {
       this.section = section
       this.close = close
       this.swapRight = swapRight
       this.swapLeft  = swapLeft
       this.bigImage = bigImage
       this.srcImage1 = srcImage1
       this.srcImage2 = srcImage2
       this.srcImage3 = srcImage3
       
    }
    
    showBlock(event){
        let target = event.target
       
        if (target.matches('img')){
         this.bigImage.children[0].children[0].src = target.src
          this.bigImage.style.display = 'flex'
        }

        swapLeft.style.display = null
        swapRight.style.display = null

        if(target.src == srcImage1){
            swapLeft.style.display = 'none'
        }

        if(target.src == srcImage3){
            swapRight.style.display = 'none'
        }
        
    }

    removeBlock(event){
      
            bigImage.style.display = 'none'
       
    }

    swapLeftBlock(){
        bigImage.children[0].children[0].src = srcImage1
    }
    

    swapRightBlock(){
        bigImage.children[0].children[0].src = srcImage3
    }
   



    init(){
        this.section.addEventListener('click' , this.showBlock.bind(this));
        this.close.addEventListener('click' , this.removeBlock.bind(this));
        this.swapLeft.addEventListener('click' , this.swapLeftBlock.bind(this));
        this.swapRight.addEventListener('click' , this.swapRightBlock.bind(this));
        console.dir(this)
    }
}

let srcImage1 = "http://127.0.0.1:5500/images/Rectangle%208.png"
let srcImage2 = "http://127.0.0.1:5500/images/Rectangle%209.png"
let srcImage3 = "http://127.0.0.1:5500/images/Rectangle%2010.png"

let section = document.querySelector('section')
let close = document.querySelector('.close')
let swapRight = document.querySelector('.swap_right')
let swapLeft = document.querySelector('.swap_left')
let bigImage = document.querySelector('.big_image')

let myGalery = new Galery(section, close , swapRight , swapLeft, bigImage , srcImage1 , srcImage2 , srcImage3)

myGalery.init()

