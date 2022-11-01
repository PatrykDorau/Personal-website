<template>
  <div class="navbar-container">
    <div class="navbar-content">
      <div class="navbar-logo">
        <router-link to="/" class="logo">
          <!-- <img src="../assets/logo-postac.png" alt=""> -->
          <svg width="50" viewBox="0 0 205 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="letter-p" d="M6.64 6.2H67.12C77.2 6.2 84.496 8.504 89.008 13.112C93.616 17.624 95.92 24.92 95.92 35V49.4C95.92 59.48 93.616 66.824 89.008 71.432C84.496 75.944 77.2 78.2 67.12 78.2H32.56V107H6.64V6.2ZM70 35C70 29.24 67.12 26.36 61.36 26.36H32.56V58.04H61.36C67.12 58.04 70 55.16 70 49.4V35Z" stroke="white" stroke-width="12"/>
            <path id="letter-d" d="M165.034 6.2C175.882 6.2 184.09 9.032 189.658 14.696C195.322 20.264 198.154 28.472 198.154 39.32V73.88C198.154 84.728 195.322 92.984 189.658 98.648C184.09 104.216 175.882 107 165.034 107H108.874V6.2H165.034ZM172.234 39.32C172.234 30.68 167.914 26.36 159.274 26.36H134.794V86.84H159.274C167.914 86.84 172.234 82.52 172.234 73.88V39.32Z" stroke="white" stroke-width="12"/>
          </svg>.


          <!-- <svg class="logo-table" width="184" height="80" viewBox="0 0 384 166" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_0_1" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M371.992 13.0515H12.0084V153.949H371.992V13.0515ZM11 12V155H373V12H11Z"/>
            </mask>
            <path d="M12.0084 13.0515V8.05147H7.00836V13.0515H12.0084ZM371.992 13.0515H376.992V8.05147H371.992V13.0515ZM12.0084 153.949H7.00836V158.949H12.0084V153.949ZM371.992 153.949V158.949H376.992V153.949H371.992ZM11 12V7H6V12H11ZM11 155H6V160H11V155ZM373 155V160H378V155H373ZM373 12H378V7H373V12ZM12.0084 18.0515H371.992V8.05147H12.0084V18.0515ZM17.0084 153.949V13.0515H7.00836V153.949H17.0084ZM371.992 148.949H12.0084V158.949H371.992V148.949ZM366.992 13.0515V153.949H376.992V13.0515H366.992ZM11 17H373V7H11V17ZM16 155V12H6V155H16ZM373 150H11V160H373V150ZM368 12V155H378V12H368Z" fill="white" mask="url(#path-1-inside-1_0_1)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M383 1H1V165H383V1ZM0 0V166H384V0H0Z" fill="white"/>
            <mask id="path-4-outside-2_0_1" maskUnits="userSpaceOnUse" x="36" y="23" width="256" height="65" fill="black">
            <rect fill="white" x="36" y="23" width="256" height="65"/>
            <path d="M40 27H66.88C71.36 27 74.6027 28.024 76.608 30.072C78.656 32.0773 79.68 35.32 79.68 39.8V46.2C79.68 50.68 78.656 53.944 76.608 55.992C74.6027 57.9973 71.36 59 66.88 59H51.52V71.8H40V27ZM68.16 39.8C68.16 37.24 66.88 35.96 64.32 35.96H51.52V50.04H64.32C66.88 50.04 68.16 48.76 68.16 46.2V39.8Z"/>
            <path d="M104.637 63.48C106.899 63.48 109.459 63.0533 112.318 62.2V58.36H103.038C102.398 58.36 101.864 58.5733 101.438 59C101.011 59.4267 100.798 59.96 100.798 60.6V61.24C100.798 61.88 101.011 62.4133 101.438 62.84C101.864 63.2667 102.398 63.48 103.038 63.48H104.637ZM92.7975 38.52C100.606 37.6667 107.646 37.24 113.918 37.24C116.819 37.24 119.144 38.1147 120.894 39.864C122.643 41.6133 123.518 43.9387 123.518 46.84V71.8H113.598L112.958 68.6C110.952 69.9227 108.883 70.904 106.749 71.544C104.659 72.1413 102.888 72.44 101.438 72.44H99.1975C96.2962 72.44 93.9708 71.5653 92.2215 69.816C90.4722 68.0667 89.5975 65.7413 89.5975 62.84V59.96C89.5975 57.0587 90.4722 54.7333 92.2215 52.984C93.9708 51.2347 96.2962 50.36 99.1975 50.36H112.318V47.8C112.318 47.16 112.104 46.6267 111.678 46.2C111.251 45.7733 110.717 45.56 110.077 45.56C107.304 45.56 104.232 45.688 100.861 45.944C97.5335 46.2 94.8455 46.392 92.7975 46.52V38.52Z"/>
            <path d="M159.34 71.8C155.201 72.2267 151.148 72.44 147.18 72.44C144.279 72.44 141.953 71.5653 140.204 69.816C138.455 68.0667 137.58 65.7413 137.58 62.84V46.52H133.74V37.88H137.58L138.86 30.2H148.78V37.88H156.78V46.52H148.78V61.24C148.78 61.88 148.993 62.4133 149.42 62.84C149.847 63.2667 150.38 63.48 151.02 63.48H159.34V71.8Z"/>
            <path d="M189.768 47.16C187.08 47.16 184.306 47.8 181.447 49.08V71.8H170.247V37.88H180.167L180.807 42.04C184.477 38.84 188.317 37.24 192.327 37.24H195.208V47.16H189.768Z"/>
            <path d="M215.045 83.32C212.784 83.32 210.01 83.1067 206.725 82.68V74.36H212.485C214.106 74.36 215.152 73.912 215.621 73.016C216.133 72.12 216.048 70.8613 215.365 69.24L202.245 37.88H214.085L222.085 59.64L228.805 37.88H240.645L227.845 73.08C226.608 76.4507 225.008 78.9893 223.045 80.696C221.082 82.4453 218.416 83.32 215.045 83.32Z"/>
            <path d="M260.185 58.36V71.8H248.985V27H260.185V49.72H265.305L272.345 37.88H284.185L274.585 54.2L284.185 71.8H272.345L264.985 58.36H260.185Z"/>
            </mask>
            <path d="M40 27H66.88C71.36 27 74.6027 28.024 76.608 30.072C78.656 32.0773 79.68 35.32 79.68 39.8V46.2C79.68 50.68 78.656 53.944 76.608 55.992C74.6027 57.9973 71.36 59 66.88 59H51.52V71.8H40V27ZM68.16 39.8C68.16 37.24 66.88 35.96 64.32 35.96H51.52V50.04H64.32C66.88 50.04 68.16 48.76 68.16 46.2V39.8Z" stroke="white" stroke-width="8" mask="url(#path-4-outside-2_0_1)"/>
            <path d="M104.637 63.48C106.899 63.48 109.459 63.0533 112.318 62.2V58.36H103.038C102.398 58.36 101.864 58.5733 101.438 59C101.011 59.4267 100.798 59.96 100.798 60.6V61.24C100.798 61.88 101.011 62.4133 101.438 62.84C101.864 63.2667 102.398 63.48 103.038 63.48H104.637ZM92.7975 38.52C100.606 37.6667 107.646 37.24 113.918 37.24C116.819 37.24 119.144 38.1147 120.894 39.864C122.643 41.6133 123.518 43.9387 123.518 46.84V71.8H113.598L112.958 68.6C110.952 69.9227 108.883 70.904 106.749 71.544C104.659 72.1413 102.888 72.44 101.438 72.44H99.1975C96.2962 72.44 93.9708 71.5653 92.2215 69.816C90.4722 68.0667 89.5975 65.7413 89.5975 62.84V59.96C89.5975 57.0587 90.4722 54.7333 92.2215 52.984C93.9708 51.2347 96.2962 50.36 99.1975 50.36H112.318V47.8C112.318 47.16 112.104 46.6267 111.678 46.2C111.251 45.7733 110.717 45.56 110.077 45.56C107.304 45.56 104.232 45.688 100.861 45.944C97.5335 46.2 94.8455 46.392 92.7975 46.52V38.52Z" stroke="white" stroke-width="8" mask="url(#path-4-outside-2_0_1)"/>
            <path d="M159.34 71.8C155.201 72.2267 151.148 72.44 147.18 72.44C144.279 72.44 141.953 71.5653 140.204 69.816C138.455 68.0667 137.58 65.7413 137.58 62.84V46.52H133.74V37.88H137.58L138.86 30.2H148.78V37.88H156.78V46.52H148.78V61.24C148.78 61.88 148.993 62.4133 149.42 62.84C149.847 63.2667 150.38 63.48 151.02 63.48H159.34V71.8Z" stroke="white" stroke-width="8" mask="url(#path-4-outside-2_0_1)"/>
            <path d="M189.768 47.16C187.08 47.16 184.306 47.8 181.447 49.08V71.8H170.247V37.88H180.167L180.807 42.04C184.477 38.84 188.317 37.24 192.327 37.24H195.208V47.16H189.768Z" stroke="white" stroke-width="8" mask="url(#path-4-outside-2_0_1)"/>
            <path d="M215.045 83.32C212.784 83.32 210.01 83.1067 206.725 82.68V74.36H212.485C214.106 74.36 215.152 73.912 215.621 73.016C216.133 72.12 216.048 70.8613 215.365 69.24L202.245 37.88H214.085L222.085 59.64L228.805 37.88H240.645L227.845 73.08C226.608 76.4507 225.008 78.9893 223.045 80.696C221.082 82.4453 218.416 83.32 215.045 83.32Z" stroke="white" stroke-width="8" mask="url(#path-4-outside-2_0_1)"/>
            <path d="M260.185 58.36V71.8H248.985V27H260.185V49.72H265.305L272.345 37.88H284.185L274.585 54.2L284.185 71.8H272.345L264.985 58.36H260.185Z" stroke="white" stroke-width="8" mask="url(#path-4-outside-2_0_1)"/>
            <path d="M220.41 103.727L222.193 103.532C230.056 102.672 237.17 102.24 243.53 102.24C246.863 102.24 249.731 103.261 251.92 105.45C254.109 107.639 255.13 110.507 255.13 113.84V138.8V140.8H253.13H243.21H241.57L241.249 139.192L241.159 138.745C239.786 139.454 238.378 140.027 236.937 140.46L236.924 140.463L236.911 140.467C234.722 141.093 232.754 141.44 231.05 141.44H228.81C225.477 141.44 222.609 140.419 220.42 138.23C218.231 136.041 217.21 133.173 217.21 129.84V126.96C217.21 123.627 218.231 120.759 220.42 118.57C222.609 116.381 225.477 115.36 228.81 115.36H239.93V114.8C239.93 114.705 239.915 114.668 239.913 114.663C239.911 114.659 239.909 114.655 239.906 114.649C239.902 114.644 239.894 114.632 239.876 114.614C239.865 114.604 239.857 114.596 239.851 114.592C239.846 114.588 239.843 114.586 239.841 114.584C239.835 114.581 239.831 114.579 239.827 114.577C239.822 114.575 239.785 114.56 239.69 114.56C236.977 114.56 233.956 114.685 230.626 114.938L220.41 103.727ZM220.41 103.727V105.52M220.41 103.727V105.52M220.41 105.52V113.52V115.649M220.41 105.52V115.649M220.41 115.649L222.535 115.516M220.41 115.649L222.535 115.516M222.535 115.516C224.596 115.387 227.294 115.195 230.625 114.938L222.535 115.516ZM87 138.8V140.8H89H113.96C119.107 140.8 123.345 139.475 126.318 136.502C129.328 133.492 130.68 129.239 130.68 124.08V108.72C130.68 103.571 129.333 99.3329 126.318 96.3618C123.347 93.3474 119.109 92 113.96 92H89H87V94V138.8ZM141.44 138.149L141.456 138.166L141.473 138.183C143.769 140.425 146.836 141.44 150.423 141.44H165.143C168.726 141.44 171.785 140.426 174.045 138.166C176.338 135.873 177.383 132.799 177.383 129.2V114.48C177.383 110.892 176.344 107.833 174.045 105.578C171.789 103.279 168.731 102.24 165.143 102.24H150.423C146.823 102.24 143.75 103.284 141.456 105.578C139.197 107.837 138.183 110.896 138.183 114.48V129.2C138.183 132.786 139.198 135.854 141.44 138.149ZM198.735 140.8H200.735V138.8V117.413C202.944 116.565 205.047 116.16 207.055 116.16H212.495H214.495V114.16V104.24V102.24H212.495H209.615C206.079 102.24 202.722 103.335 199.56 105.412L199.432 104.576L199.171 102.88H197.455H187.535H185.535V104.88V138.8V140.8H187.535H198.735ZM287.862 138.745L287.951 139.192L288.273 140.8H289.913H299.833H301.833V138.8V104.88V102.88H299.833H288.633H286.633V104.88V127.359C284.499 127.902 282.609 128.16 280.953 128.16H278.713C278.618 128.16 278.58 128.145 278.575 128.143C278.571 128.141 278.567 128.139 278.562 128.136C278.556 128.132 278.545 128.124 278.527 128.106C278.509 128.088 278.5 128.076 278.497 128.071C278.494 128.067 278.493 128.064 278.491 128.062C278.491 128.06 278.49 128.059 278.489 128.057C278.487 128.052 278.473 128.015 278.473 127.92V104.88V102.88H276.473H265.273H263.273V104.88V129.84C263.273 133.173 264.293 136.041 266.482 138.23C268.671 140.419 271.54 141.44 274.873 141.44H277.753C279.457 141.44 281.424 141.093 283.614 140.467L283.627 140.463L283.639 140.46C285.081 140.027 286.488 139.454 287.862 138.745ZM311.33 127.2H309.33V129.2V138.8V140.8H311.33H322.85H324.85V138.8V129.2V127.2H322.85H311.33ZM111.4 104.96C113.012 104.96 113.853 105.362 114.306 105.814C114.758 106.267 115.16 107.108 115.16 108.72V124.08C115.16 125.692 114.758 126.533 114.306 126.986C113.853 127.438 113.012 127.84 111.4 127.84H102.52V104.96H111.4ZM161.622 114.88C161.911 114.88 162.058 114.918 162.121 114.941C162.145 115.004 162.183 115.152 162.183 115.44V128.24C162.183 128.528 162.145 128.676 162.121 128.739C162.058 128.762 161.911 128.8 161.622 128.8H153.943C153.654 128.8 153.507 128.762 153.444 128.739C153.42 128.676 153.383 128.528 153.383 128.24V115.44C153.383 115.152 153.42 115.004 153.444 114.941C153.507 114.918 153.654 114.88 153.943 114.88H161.622ZM162.16 114.96C162.16 114.96 162.157 114.958 162.151 114.955C162.158 114.958 162.16 114.96 162.16 114.96ZM162.108 114.911C162.104 114.906 162.102 114.903 162.103 114.903C162.103 114.902 162.105 114.905 162.108 114.911ZM162.103 128.777C162.102 128.777 162.104 128.774 162.108 128.769C162.105 128.775 162.103 128.778 162.103 128.777ZM162.151 128.725C162.157 128.721 162.16 128.72 162.16 128.72C162.16 128.72 162.158 128.722 162.151 128.725ZM153.405 128.72C153.405 128.72 153.408 128.722 153.414 128.725C153.407 128.722 153.405 128.72 153.405 128.72ZM153.457 128.769C153.461 128.774 153.463 128.777 153.462 128.778C153.462 128.778 153.46 128.775 153.457 128.769ZM153.462 114.903C153.463 114.903 153.461 114.906 153.457 114.911C153.46 114.905 153.462 114.902 153.462 114.903ZM153.414 114.955C153.408 114.958 153.405 114.96 153.405 114.96C153.405 114.96 153.407 114.958 153.414 114.955ZM239.93 127.679C237.796 128.222 235.907 128.48 234.25 128.48H232.65C232.555 128.48 232.518 128.465 232.513 128.463C232.509 128.461 232.505 128.459 232.499 128.456C232.494 128.452 232.482 128.444 232.464 128.426C232.446 128.408 232.438 128.396 232.434 128.391C232.431 128.385 232.429 128.381 232.427 128.377C232.425 128.372 232.41 128.335 232.41 128.24V127.6C232.41 127.505 232.425 127.468 232.427 127.463C232.429 127.459 232.431 127.455 232.434 127.449C232.438 127.444 232.446 127.432 232.464 127.414C232.474 127.405 232.481 127.398 232.487 127.393C232.493 127.389 232.497 127.386 232.499 127.384C232.505 127.381 232.509 127.379 232.513 127.377C232.518 127.375 232.555 127.36 232.65 127.36H239.93V127.679Z" stroke="white" stroke-width="4"/>
            </svg> -->
        </router-link>
      </div>
    </div>
    <div class="navbar-links">
      <router-link to="/about" v-motion-slide-right :delay="300" class="navbar-links-item">About</router-link>
      <router-link to="/skills" v-motion-slide-right :delay="450" class="navbar-links-item">Skills</router-link>
      <router-link to="/portfolio" v-motion-slide-right :delay="600" class="navbar-links-item">Portfolio</router-link>
      <router-link to="/contact" v-motion-slide-right :delay="800" class="navbar-links-item">Contact</router-link>
      <div class="cursor"></div>
    </div>
    <div @click="openNav()" class="navigation-trigger" >
      <i id="first-line"></i>
      <i id="second-line"></i>
      <i id="third-line"></i>
    </div>
  </div>
</template>

<script>
import {motionButtonGlow} from '../motions';
export default {
  name: "Navbar",
  data() {
    return {
      motionButtonGlow,
      navOpened: false
    }
  },
  mounted() {
    this.mouseFollowEffect();
    this.cursorPosition();
  },
  methods: {
    mouseFollowEffect() {
      let links = document.querySelectorAll(".navbar-links-item");

      links.forEach(item => {
        item.addEventListener("mousemove", (e) => {
          let { offsetX: x, offsetY: y } = e;
          let { offsetWidth: width, offsetHeight: height } = item;


          let move = 25;
          let xMove = x / width * (move * 2) - move;
          let yMove = y / height * (move * 2) - move;

          item.style.transform = `translate(${xMove}px, ${yMove}px)`;
        })
        item.addEventListener("mouseleave", () => {
          item.style.transform = ``;
        })
      })
    },
    cursorPosition() {
      let navbarContainer = document.querySelector('.navbar-container');

      let cursor = document.querySelector('.cursor');

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;

            let stopperX = window.innerWidth - 28;
            let stopperY = window.innerHeight - 10;
            if(e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= stopperX || e.clientY >= stopperY))
                {
                  return;
                }
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };

      navbarContainer.addEventListener('mousemove', editCursor);
      navbarContainer.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
      });
      navbarContainer.addEventListener('mouseenter', () => {
        cursor.style.display = 'block';
      });
    },
    openNav() {
      let nav = document.querySelector('.navbar-links');
      let navBtn = document.querySelector('.navigation-trigger');


      if(!this.navOpened) {
        setTimeout(() => {
          nav.classList.add("active");
          navBtn.classList.add("active");
          this.navOpened = !this.navOpened;
        }, 10);
      } else {
        nav.classList.remove("active");
        navBtn.classList.remove("active");
        this.navOpened = !this.navOpened;
      } 

    }
  }
}
</script>

<style scoped>
  .navbar-container {
    margin: 0 auto 5vw auto;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(32, 28, 36, 0.9);
    color: #fff;
    position: sticky;
    top: 0;
    z-index: 999;
    cursor: none;
    font-weight: 800;
  }

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .navbar-logo {
    margin-right: clamp(20px, calc(100vw * 35 / 1200) ,35px);
  }
  
  .logo-table {
    border: 1px solid #D2B94B;
    rotate: -26deg;
    position: absolute;
    top: -12px;
  }

  #letter-p {
    stroke-dasharray: 491px;
    stroke-dashoffset: 491px;
    animation: line-animation-down 2s 200ms ease forwards;
  }

  #letter-d {
    stroke-dasharray: 540px;
    stroke-dashoffset: 540px;
    animation: line-animation-down 2s 500ms ease forwards;
  }

  #letter-d:hover, #letter-p:hover  {
    transform: scale(1.05);
    transition: transform 500ms ease;
  }

  .navbar-links {
    display: flex;
    position: absolute;
    right: 0;
    opacity: 0;
    flex-direction: column;
    top: 75px;
    transition: all .3s ease;
    pointer-events: none;
  }
  .navbar-links.active {
    right: 10px;
    opacity: 1;
    padding: 5px 10px;
    background-color: rgba(46, 42, 54, 0.9);
    border: 2px solid #D2B94B;
    border-radius: 15px;
    pointer-events: all;
  }

  .navbar-links.active .navbar-links-item{
    font-size: 25px;
  }

  .navbar-links-item {
    padding: 6px 10px;
    cursor: pointer;
    transition: all 0.2s linear;
    letter-spacing: 2px;
    font-size:clamp(18px, calc(100vw * 25 / 1920), 25px);
    text-decoration: none;
    color: white;
  }

  .navbar-links-item:not(:last-child) {
    margin-right: clamp(10px, calc(100vw * 20 / 1200) ,20px);
  }

  .navbar-icons-wrapper {
    display: flex;
    justify-content: center;
    gap: 15%;
  }

  .navigation-trigger {
    border: 1px solid rgb(221, 195, 195);
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    width: 30px;
    height: 25px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    justify-content: center;
  }

  .navigation-trigger i {
    background-color: #fff;
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    transition: all 0.2s linear;
  }

  .navigation-trigger.active #first-line{
    opacity: 0;
  }
  .navigation-trigger.active #second-line {
    rotate: 45deg;
  }
  .navigation-trigger.active #third-line {
    rotate: -45deg;
    translate: 0 -7px;
  }

  .cursor {
    display: none;
  }

  .navbar-links-item:hover ~ .cursor {
    transform:translate(-50%, -50%) scale(8);
  }

  @media (min-width: 768px) {
    .navbar-container {
      justify-content: space-around;
    }
    .navbar-links {
      display: flex;
      justify-content: space-between;
      position: initial;
      flex-direction: row;
      display: flex;
      opacity: 1;
      pointer-events: all;
    }

    .navigation-trigger {
      display: none;
    }
    .cursor {
      display: none;
      pointer-events: none;
      position: absolute;
      padding: 0.3rem;
      background-color: #fff;
      border-radius: 50%;
      mix-blend-mode: difference;
      transition: transform 0.3s ease;
    }
  }

  @keyframes line-animation-down {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>