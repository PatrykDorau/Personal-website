<template>
  <div class="container">
    <div class="face-container">
      <img src="../assets/logo-face.png" alt="" style="width:120%">
    </div>
    <h1>
      : Hello, <em>I'm</em> Patryk Dorau.
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
    </h1>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
  export default {
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ["I'm front-end dev","I'm from Poznan", "I was born in 00", "I'm a husband", "I like football", "I also like coding", "I believe in Jesus"],
        typingSpeed: 150,
        erasingSpeed: 100,
        newTextDelay: 600,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    width: fit-content;
    padding-inline: 15px;
    margin-inline: auto;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .face-container {
    padding: 10px;
    margin: 5px 2px 5px 0;
    border: 2px solid black;
    border-radius: 50%;
    background-color: #D2B94B;
    width: clamp(20px, calc(100vw * 25 / 1920),25px);;
    height: clamp(21px, calc(100vw * 27 / 1920),27px);;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: clamp(13px, calc(100vw * 20 / 1920),20px);
    font-weight: normal;
  }

  h1 em {
    font-style: normal;
    color: #D2B94B;
  }

  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
  }

  span.typed-text {
    color: #D2B94B;
  }

  span.cursor.typing {
    animation: none;
  }
  
  @keyframes cursorBlink {
    49% { background-color: #fff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>
