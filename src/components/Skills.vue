<template>
  <div class="skills-container">
    <div class="menu">
      <router-link to="/">Main page</router-link> / <router-link to="/skills">Skills</router-link>
    </div>
    <h3 class="skills-title">SKILLS</h3>
    <div class="skills-wrapper">
      <div class="skills-row"
        v-motion="custom"
        :initial="{ opacity: 0, x: -30}"
        :enter="{
          opacity: 1,
          x: 0,
          transition: {
            type: 'spring',
            duration: 400,
            damping: 25,
            mass: 0.5,
          },
        }"
      >
        <div data-percent="85" data-background="linear-gradient(180deg, rgba(224,155,136,0.8) 5%, rgba(221,120,92,0.8) 19%, rgba(177,119,46,0.8015581232492998) 35%, rgba(87,94,21,0.8) 57%, rgba(73,20,11,0.8) 82%);" data-text="white" class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/html-5.png" width="100%" alt="">
            <div class="img-hover-state">85%</div>
            <div class="color-progress"></div>
          </div>
          <div class="skills-item-text-wrapper">
            Html
          </div>
        </div>
        <div data-percent="85" data-background="linear-gradient(180deg, rgba(160,233,223,0.8) 5%, rgba(148,228,236,0.8) 19%, rgba(68,199,193,0.8015581232492998) 35%, rgba(33,145,166,0.8) 57%, rgba(66,134,187,0.8) 82%);" class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/css-3.png" width="100%" alt="">
            <div class="img-hover-state">85%</div>
          </div>
          <div class="skills-item-text-wrapper">
            Css
          </div>
        </div>
        <div data-percent="75" data-background="linear-gradient(180deg, rgba(240,222,120,0.8) 5%, rgba(220,236,19,0.8) 19%, rgba(237,242,19,0.8015581232492998) 35%, rgba(192,224,38,0.8) 57%, rgba(211,237,26,0.8) 82%);" class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/js.png" width="100%" alt="">
            <div class="img-hover-state">75%</div>
          </div>
          <div class="skills-item-text-wrapper">
            Js
          </div>
        </div>
      </div>
      <div class="skills-row"
        v-motion="custom"
        :initial="{ opacity: 0, x: 30}"
        :enter="{
          opacity: 1,
          x: 0,
          transition: {
            type: 'spring',
            duration: 400,
            damping: 25,
            mass: 0.5,
          },
        }"
      > 
        <div data-percent="65" data-background="linear-gradient(180deg, rgba(137,195,136,0.8) 5%, rgba(69,152,81,0.8) 19%, rgba(31,107,61,0.8015581232492998) 35%, rgba(39,88,67,0.8) 57%, rgba(22,88,46,0.8) 82%);" class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/vue.png" width="100%" alt="">
            <div class="img-hover-state">65%</div>
          </div>
          <div class="skills-item-text-wrapper">
            Vue.js
          </div>
        </div>
        <div data-percent="20" data-background="linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(222,255,254,0.8) 18%, rgba(179,255,252,0.8) 34%, rgba(92,236,230,0.8) 55%, rgba(36,232,225,0.8) 72%, rgba(0,218,211,0.8) 85%, rgba(0,197,201,0.8) 100%);" class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/react.png" width="100%" alt="">
            <div class="img-hover-state">20%</div>
          </div>
          <div class="skills-item-text-wrapper">
            React
          </div>
        </div>
        <div data-percent="70" data-background="linear-gradient(180deg, rgba(251,251,251,1) 0%, rgba(219,217,217,0.8) 21%, rgba(199,194,194,0.8) 35%, rgba(185,180,180,0.8) 52%, rgba(150,147,147,0.8) 67%, rgba(128,126,126,0.8) 76%, rgba(108,108,108,0.8) 84%, rgba(89,89,89,0.8) 93%, rgba(82,82,82,0.8) 96%);" class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/git.png" width="100%" alt="">
            <div class="img-hover-state">70%</div>
          </div>
          <div class="skills-item-text-wrapper">
            Git
          </div>
        </div>
      </div>
      <div class="skills-row"
        v-motion="custom"
        :initial="{ opacity: 0, x: -30}"
        :enter="{
          opacity: 1,
          x: 0,
          transition: {
            type: 'spring',
            duration: 400,
            damping: 25,
            mass: 0.5,
          },
        }"
      >
        <div data-percent="70" data-background="linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(179,239,255,0.8) 18%, rgba(131,228,255,0.8) 34%, rgba(90,210,244,0.8) 53%, rgba(11,183,230,0.8) 72%, rgba(0,164,209,0.8) 85%, rgba(0,123,157,0.8) 100%);" class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/bootstrap-icon-logo.png" width="100%" alt="">
            <div class="img-hover-state">70%</div>
          </div>
          <div class="skills-item-text-wrapper">
            Bootstrap
          </div>
        </div>
        <div data-percent="60" data-background="linear-gradient(180deg, rgba(252,239,252,0.8) 0%, rgba(255,208,255,0.8) 12%, rgba(254,165,249,0.8) 23%, rgba(255,128,245,0.8) 34%, rgba(228,89,222,0.8) 46%, rgba(198,78,197,0.8) 54%, rgba(158,68,157,0.8) 65%, rgba(129,60,124,0.8) 81%, rgba(107,44,90,0.8) 95%);" class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/sass.png" width="100%" alt="">
            <div class="img-hover-state">60%</div>
          </div>
          <div data-percent="60" class="skills-item-text-wrapper">
            Sass
          </div>
        </div>
        <div data-percent="20" class="skills-item" data-background="rgba(133, 255, 12, 0.8)" data-shadow="0 -4px 10px 1px rgb(20 255 20)">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/node.png" width="100%" alt="">
            <div class="img-hover-state">20%</div>
          </div>
          <div class="skills-item-text-wrapper">
            Node
          </div>
        </div>
      </div>
      <div class="skills-row"
        v-motion="custom"
        :initial="{ opacity: 0, x: 30}"
        :enter="{
          opacity: 1,
          x: 0,
          transition: {
            type: 'spring',
            duration: 400,
            damping: 25,
            mass: 0.5,
          },
        }"
      >
        <div data-percent="99" data-background="linear-gradient(180deg, rgba(255,255,255,0.8) 5%, rgba(253,255,255,0.8) 19%, rgba(171,224,223,0.8015581232492998) 35%, rgba(166,91,20,0.8) 57%, rgba(201,52,27,0.8) 82%);" class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/pl.png" width="100%" alt="">
            <div class="img-hover-state">99%</div>
          </div>
          <div class="skills-item-text-wrapper">
            PL (Native)
          </div>
        </div>
        <div
          data-percent="80"
          data-background="linear-gradient(180deg, rgba(193,28,28,0.8) 5%, rgba(150,60,27,0.8) 19%, rgba(140,56,11,0.8015581232492998) 35%, rgba(36,45,147,0.8) 57%, rgba(25,35,102,0.8) 82%);"
          data-shadow="0 -4px 10px 1px rgba(200, 200, 200, 1);"
          class="skills-item"
        >
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/eng.png" width="100%" alt="">
            <div class="img-hover-state">80%</div>
          </div>
          <div class="skills-item-text-wrapper">
            Eng (B2/2)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  mounted() {
    this.itemHover();
  },
  methods: {
    itemHover() {
      let items = document.querySelectorAll(".skills-item");
      console.log(items)

      items.forEach(item => {
        item.addEventListener("mouseenter", () => {
          let el = item.querySelector('.img-hover-state');

          let percent = 100 - item.dataset.percent;
          let bgColor = item.dataset.background;
          console.log(bgColor, percent)
          setTimeout(() => {
            el.style = `top: ${percent}%; background: ${bgColor};`;
          }, 100);
        })
        item.addEventListener("mouseleave", () => {
          let el = item.querySelector('.img-hover-state');
          let bgColor = item.dataset.background;

          el.style = `top: 100%; background:${bgColor};`;
        })
      })
    }
  }
}
</script>

<style>
.skills-container {
  width: 80%;
  padding: 10px;
  margin-top: clamp(30px, 4vw, 60px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
}

.skills-title {
  width: fit-content;
  padding-block: 2px;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing:5px;
  border-bottom: 2px solid bisque;
  border-top: 2px solid transparent;
  text-align: center;
  transition: all 0.2s linear;
}

.skills-title:hover {
  letter-spacing: 10px;
  border-top: 2px solid bisque;
}

.skills-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  margin-block: clamp(30px, 3vw, 60px);

}

.skills-row {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  gap: 20px;
  width: fit-content;
  margin-inline: auto;
}

.skills-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.skills-item-img-wrapper {
  width: fit-content;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5px;
  border: 2px solid white;
  overflow: hidden;
  width: clamp(50px, 6vw, 100px);
  height: clamp(50px, 6vw, 100px);
}

.img-hover-state {
  position: absolute;
  background:rgba(255, 255, 255, 0.8);
  top: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out, top 1s ease;
  -webkit-text-stroke: 1px black;
  color: white;
}

.skills-item:hover .img-hover-state {
  opacity: 1;
  box-shadow: 0 -4px 10px 1px rgba(200, 200, 200, 1);
}

.skills-item:hover .skills-item-text-wrapper {
  opacity: 1;
}

.skills-item-text-wrapper {
  color: white;
  opacity: 0;
  transition: all 0.5s ease;
  margin-top: 5px;
  font-weight: 700;
  width: clamp(50px, 6vw, 80px);
  height: clamp(15px, 3vw, 30px);
  text-align: center;
  font-size: clamp(12px, calc(100vw * 16 / 800), 16px);
  letter-spacing:1px;
}

.skills-item-img-wrapper img {
  max-width: 70px;
  border-radius: 50%;
}

.menu {
  color:  #D2B94B;
  font-weight: 700;
  text-decoration: none;
}
.menu a {
  color: white;
  text-decoration: none;
  font-weight: 300;
  padding-bottom: 1px;
  border-bottom: 1px solid #D2B94B;
  transition: all 0.5s ease-in-out;
}

@media (min-width: 768px) {
  .skills-container {
    width: 60%;
  }
  .skills-description-content {
    width: 60%;
    max-height:fit-content;
  }
  
}
</style>