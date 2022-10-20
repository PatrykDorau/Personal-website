<template>
  <div
    class="navbar-container"
    v-motion="'custom'"
    :initial="{ opacity: 0, y: -700}"
    :enter="{ opacity: 1, y: 0,}"
  >
    <div class="navbar-content">
      <div class="navbar-logo">
        <div class="logo">
          <svg id="letter-p" width="25" height="30" viewBox="0 0 75 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.2558 54.9732L62.2566 54.9725C68.0906 49.3329 71.004 42.2236 71.004 33.896C71.004 25.3171 68.0056 18.0879 61.9472 12.513C55.8682 6.83887 47.2394 4.284 36.656 4.284H7.85599H4.35599V7.784V97V100.5H7.85599H19.504H23.004V97V63.252H36.656C47.538 63.252 56.3109 60.7166 62.2558 54.9732ZM48.627 43.348C46.478 45.3179 42.7338 46.652 36.656 46.652H23.004V20.884H36.656C42.5402 20.884 46.2997 22.1766 48.5643 24.1504C50.737 26.0442 52.1 29.0662 52.1 33.896C52.1 38.3821 50.803 41.3532 48.627 43.348Z" stroke="#FFFDFD" stroke-width="10"/>
          </svg>
          <svg id="letter-d" width="30" height="30" viewBox="0 0 89 103" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M61.4454 93.9031L61.453 93.8994L61.4606 93.8956C69.2053 90.0256 75.1872 84.4433 79.2952 77.168C83.4758 69.83 85.5 61.2968 85.5 51.6915C85.5 42.0896 83.4772 33.5589 79.2995 26.2226C75.1992 18.872 69.2258 13.2451 61.4831 9.37106C53.8231 5.41034 44.8649 3.5 34.7257 3.5H7H3.5V7V96V99.5H7H34.7257C44.8514 99.5 53.7951 97.6799 61.4454 93.9031ZM58.41 28.2115L58.4185 28.2202L58.4271 28.229C63.7523 33.6248 66.6175 41.287 66.6175 51.6915C66.6175 62.0125 63.794 69.584 58.563 74.8905C53.3729 80.0719 45.6204 82.9232 34.7257 82.9232H22.1269V19.9491H34.7257C45.5064 19.9491 53.2106 22.869 58.41 28.2115Z" stroke="#FFFDFD" stroke-width="10"/>
          </svg>
        </div>
      </div>
      <div class="navbar-links">
        <div v-motion-slide-right :delay="300" class="navbar-links-item">Portfolio</div>
        <div v-motion-slide-right :delay="450" class="navbar-links-item">Skills</div>
        <div v-motion-slide-right :delay="600" class="navbar-links-item">Contact</div>
        <div class="cursor"></div>
      </div>
    </div>
    <div class="navbar-icons-wrapper">
      <div class="site-mode-switch dark"><FontAwesomeIcon icon="sun" /> <FontAwesomeIcon icon="moon" /></div>
      <div class="navigation-trigger">
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    this.mouseFollowEffect();
    this.cursorPosition();
    this.cursorZoom();
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
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };

      window.addEventListener('mousemove', editCursor);
    },
    cursorZoom() {
      let items = document.querySelectorAll('.navbar-links-item');
      let cursor = document.querySelector('.cursor');

      items.forEach(item => {
        item.addEventListener('mouseenter', () => {
          console.log("enter");
          cursor.classList.add("active");
        })
        item.addEventListener('mouseleave', () => {
          console.log("leave");
          cursor.classList.remove("active");
        })
      })
    }
  }
}
</script>

<style scoped>
  .navbar-container {
    margin: 0 auto;
    padding: 15px 20px;
    display: flex;
    justify-content: space-around;
    color: #fff;
  }

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-logo {
    margin-right: clamp(20px, calc(100vw * 35 / 1200) ,35px);
    /* animation: anime 3s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;  */
  }

  #letter-p path {
    stroke-dasharray: 400px;
    stroke-dashoffset: 400px;
    animation: line-animation-down 2s 200ms ease forwards;
  }

  #letter-d path {
    stroke-dasharray: 507px;
    stroke-dashoffset: 507px;
    animation: line-animation-down 2s 500ms ease forwards;
  }

  #letter-d:hover, #letter-p:hover  {
    transform: scale(1.05);
    transition: transform 500ms ease;
  }

  .navbar-links {
    display: none;
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

  .site-mode-switch {
    width: 30px;
    height: 25px;
    padding: 10px;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 6px;
    transition: all 1s ease;
  }

  .site-mode-switch.dark {
    background-color: lightgreen;
  }

  .site-mode-switch.light {
    background-color: lightblue;
  }

  .navigation-trigger {
    border: 1px solid rgb(221, 195, 195);
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    width: 30px;
    height: 25px;
    margin: auto;
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
  }

  .cursor {
    pointer-events: none;
    position: fixed;
    padding: 0.3rem;
    background-color: #fff;
    border-radius: 50%;
    mix-blend-mode: difference;
    transition: transform 0.3s ease;
  }

  .navbar-links-item:hover ~ .cursor {
    transform:translate(-50%, -50%) scale(8);
  }

  @media (min-width: 768px) {
    .navbar-links {
      display: flex;
      justify-content: space-between;
    }

    .navigation-trigger {
      display: none;
    }
  }

  @keyframes line-animation-down {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>