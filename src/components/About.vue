<template>
  <div class="about-container">
    <p class="about-title">ABOUT</p>
    <div class="face-container">
      <img
        src="../assets/logo-face.png"
        alt=""
        style="width:100%"
      >
    </div>
    <div class="about-description-wrapper">
      <div class="about-description-title">Here is a little something <em>about me</em>.</div>
      <div class="about-description-content">
        I'm Patryk. Currently working and living in Poznań, Poland. I've been coding for <em>over 2 years</em>.
        My adventure with code began encouraged by people around me. At first I learned from free courses, in between I created my small portfolio of projects and also <em>studied math</em>.
        After a year of learning, I managed to find my first job as a full stack developer.
        However, I quickly decided to change my position to <em>front end developer</em> because it coincided more with what I liked.
        Currently, I continue to work and develop as a programmer. Privately, I am an energetic and open-minded person who thinks a lot about the future.
        In my free time I play and watch soccer, and try to live a healthy life. A big and integral part of my life is faith in <em>Jesus Christ</em>. 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style>
.about-container {
  width: 80%;
  padding: 10px;
  margin-top: clamp(30px, 4vw, 60px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
}

.about-title {
  width: fit-content;
  margin-inline: auto;
  margin-bottom: clamp(20px, 4vw, 40px);
  font-size: 22px;
  padding-block: 2px;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing:5px;
  border-bottom: 2px solid bisque;
  border-top: 2px solid transparent;
  text-align: center;
  transition: all 0.2s linear;
}

.about-title:hover {
  letter-spacing: 10px;
  border-top: 2px solid bisque;
}

.face-container {
  width: 100px;
  height: 100px;
  border: 3px solid rgb(36, 33, 33);
  border-radius: 50%;
  padding: 10px;
  margin-inline: auto;
  background-color: #D2B94B;
}

.face-container img {
  transition:all 0.3s linear;
}

.face-container:hover img {
  scale: 1.3;
}

.about-description-wrapper {
  display : flex;
  justify-content: space-between;
  padding: 10px;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
}
.about-description-title {
  font-size: clamp(16px, calc(100vw * 25 / 1920), 25px);
  margin-top: 10px;
  margin-bottom: 20px;
  letter-spacing:1px;
}
.about-description-content {
  letter-spacing:1px;
  font-size: clamp(13px, calc(100vw * 16 / 1920), 16px);
  line-height: 20px;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  margin-inline: auto;
  padding: 10px 10px 30px 10px;
}
em {
  font-style: normal;
  color: #D2B94B;
}

@media (min-width: 768px) {
  .about-container {
    width: 60%;
  }
  .about-description-content {
    width: 60%;
    max-height:fit-content;
  }
  
}
</style>