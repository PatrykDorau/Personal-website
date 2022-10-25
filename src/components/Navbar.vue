<template>
  <div class="navbar-container">
    <div class="navbar-content">
      <div class="navbar-logo">
        <div class="logo">
          <svg width="50" viewBox="0 0 205 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="letter-p" d="M6.64 6.2H67.12C77.2 6.2 84.496 8.504 89.008 13.112C93.616 17.624 95.92 24.92 95.92 35V49.4C95.92 59.48 93.616 66.824 89.008 71.432C84.496 75.944 77.2 78.2 67.12 78.2H32.56V107H6.64V6.2ZM70 35C70 29.24 67.12 26.36 61.36 26.36H32.56V58.04H61.36C67.12 58.04 70 55.16 70 49.4V35Z" stroke="white" stroke-width="12"/>
            <path id="letter-d" d="M165.034 6.2C175.882 6.2 184.09 9.032 189.658 14.696C195.322 20.264 198.154 28.472 198.154 39.32V73.88C198.154 84.728 195.322 92.984 189.658 98.648C184.09 104.216 175.882 107 165.034 107H108.874V6.2H165.034ZM172.234 39.32C172.234 30.68 167.914 26.36 159.274 26.36H134.794V86.84H159.274C167.914 86.84 172.234 82.52 172.234 73.88V39.32Z" stroke="white" stroke-width="12"/>
          </svg>.
        </div>
      </div>
    </div>
    <div class="navbar-links">
      <div v-motion-slide-right :delay="300" class="navbar-links-item">About</div>
      <div v-motion-slide-right :delay="450" class="navbar-links-item">Skills</div>
      <div v-motion-slide-right :delay="600" class="navbar-links-item">Portfolio</div>
      <div v-motion-slide-right :delay="800" class="navbar-links-item">Contact</div>
      <div class="cursor"></div>
    </div>
    <div @click="openNav()" class="navigation-trigger">
      <i id="first-line"></i>
      <i id="second-line"></i>
      <i id="third-line"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
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

      document.body.addEventListener('mousemove', editCursor);
    },
    openNav() {
      let nav = document.querySelector('.navbar-links');
      let navBtn = document.querySelector('.navigation-trigger');


      if(!this.navOpened) {
        nav.style.display = 'flex'
        setTimeout(() => {
          nav.classList.add("active");
          navBtn.classList.add("active");
          this.navOpened = !this.navOpened;
        }, 10);
      } else {
        nav.classList.remove("active");
        navBtn.classList.remove("active");
        this.navOpened = !this.navOpened;
        setTimeout(() => {
          nav.style.display = '';
        }, 100);
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
  }

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-logo {
    margin-right: clamp(20px, calc(100vw * 35 / 1200) ,35px);
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
    right: -300px;
    flex-direction: column;
    top: 75px;
    transition: all .3s ease;
    display: none;
  }
  .navbar-links.active {
    right: 10px;
    padding: 5px 10px;
    background-color: rgba(46, 42, 54, 0.9);
    border: 2px solid #D2B94B;
    border-radius: 15px;
  }

  .navbar-links.active .navbar-links-item{
    font-size: 25px;
  }

  .navbar-links-item {
    padding: 6px 10px;
    cursor: pointer;
    transition: all 0.2s linear;
    letter-spacing: 1px;
    font-size:clamp(18px, calc(100vw * 25 / 1920), 25px);
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
    rotate: 50deg;
  }
  .navigation-trigger.active #third-line {
    rotate: -50deg;
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
    }

    .navigation-trigger {
      display: none;
    }
    .cursor {
      display: block;
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