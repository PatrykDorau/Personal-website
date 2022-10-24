<template>
  <div class="skills-container">
    <p class="skills-title">SKILLS</p>
    <div class="skills-wrapper">
      <div class="skills-row">
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/html-5.png" width="50px" alt="">
            <div class="img-hover-state">50%</div>
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/html-5.png" width="50px" alt="">
            <div class="img-hover-state">50%</div>
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/html-5.png" width="50px" alt="">
            <div class="img-hover-state">50%</div>
          </div>
        </div>
        <div class="skills-item">
          <div class="skills-item-img-wrapper">
            <img src="../assets/icons/html-5.png" width="50px" alt="">
            <div class="img-hover-state">50%</div>
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
}

.skills-row {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 5px;
}

.skills-row * {
  border: 1px solid bisque;
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