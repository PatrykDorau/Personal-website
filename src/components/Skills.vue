<template>
  <div class="skills-container">
    <p class="skills-title">SKILLS</p>
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
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/html-5.png" width="100%" alt="">
            <div class="img-hover-state">80%</div>
          </div>
          <div class="skills-item-text-wrapper">
            HTML
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/css-3.png" width="100%" alt="">
            <div class="img-hover-state">80%</div>
          </div>
          <div class="skills-item-text-wrapper">
            CSS
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/js.png" width="100%" alt="">
            <div class="img-hover-state">70%</div>
          </div>
          <div class="skills-item-text-wrapper">
            JS
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/vue.png" width="100%" alt="">
            <div class="img-hover-state">60%</div>
          </div>
          <div class="skills-item-text-wrapper">
            Vue.js
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
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/html-5.png" width="100%" alt="">
            <div class="img-hover-state">80%</div>
          </div>
          <div class="skills-item-text-wrapper">
            HTML
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/css-3.png" width="100%" alt="">
            <div class="img-hover-state">80%</div>
          </div>
          <div class="skills-item-text-wrapper">
            CSS
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/js.png" width="100%" alt="">
            <div class="img-hover-state">70%</div>
          </div>
          <div class="skills-item-text-wrapper">
            JS
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/vue.png" width="100%" alt="">
            <div class="img-hover-state">60%</div>
          </div>
          <div class="skills-item-text-wrapper">
            Vue.js
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
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/html-5.png" width="100%" alt="">
            <div class="img-hover-state">80%</div>
          </div>
          <div class="skills-item-text-wrapper">
            HTML
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/css-3.png" width="100%" alt="">
            <div class="img-hover-state">80%</div>
          </div>
          <div class="skills-item-text-wrapper">
            CSS
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/js.png" width="100%" alt="">
            <div class="img-hover-state">70%</div>
          </div>
          <div class="skills-item-text-wrapper">
            JS
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/vue.png" width="100%" alt="">
            <div class="img-hover-state">60%</div>
          </div>
          <div class="skills-item-text-wrapper">
            Vue.js
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills"
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
  margin-inline: auto;
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
  row-gap: 20px;
}

.skills-row {
  display: flex;
  flex: 1;
  justify-content: center;
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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5px;
}

.img-hover-state {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius:50%;
  font-size: 18px;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
}

.skills-item:hover .img-hover-state {
  opacity: 1;
  box-shadow: 0 0 9px rgba(200, 200, 200, 1);
}

.skills-item:hover .skills-item-text-wrapper {
  opacity: 1;
}

.skills-item-text-wrapper {
  color: white;
  opacity: 0;
  transition: all 0.5s ease;
  margin-top: 5px;
}

.skills-item-img-wrapper img {
  max-width: 70px;
  border-radius: 50%;
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