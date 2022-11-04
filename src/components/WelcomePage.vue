<template>
  <div class="welcome-container" v-motion-slide-bottom>
    <div class="top-section">
      <div class="hero">
        <h1 class="hero-name">Patryk Dorau</h1>
        <h2 class="hero-profession">Digital Craftsman (Front-end developer)</h2>
      </div>
      <div class="face-container">
        <img
          src="../assets/logo-face.png"
          alt=""
          style="width:100%"
        >
      </div>
    </div>
    <div class="bio-section">
      <h3 class="section-title">Bio</h3>
      <div class="bio-element">
        <div class="date">18-12-2000</div>
        <div class="content">I was born in Starogard Gdański (Poland).</div>
      </div>
      <div class="bio-element">
        <div class="date">01-06-2019</div>
        <div class="content">Graduated high school in Czersk (Poland).</div>
      </div>
      <div class="bio-element">
        <div class="date">01-10-2019</div>
        <div class="content">Started studying math at UAM Poznań.</div>
      </div>
      <div class="bio-element">
        <div class="date">31-10-2020</div>
        <div class="content">Started learning to code mainly from online course (YouTube, Udemy).</div>
      </div>
      <div class="bio-element">
        <div class="date">31-04-2021</div>
        <div class="content">I Created my very first project in <strong>React</strong> and <strong>express</strong>
          <a href="https://github.com/PatrykDorau/robofrinds"> Robo Friends</a> <br>
          A liitle later another one came, a bit more complicated but with what a mess. It was made in <strong>React</strong>
          and <strong>express</strong> and was named <a href="https://github.com/PatrykDorau/SmartBrain">Smart Brain</a>.
          Dont judge me plz <span style='font-size:15px;'>&#128514;</span>
        </div>
      </div>
      <div class="bio-element">
        <div class="date">31-09-2021</div>
        <div class="content">Got my First job - Full stack developer (Poznań Cosmogroup).</div>
      </div>
      <div class="bio-element">
        <div class="date">10-01-2022</div>
        <div class="content">Changed position to Front end (Poznań Cosmogroup).</div>
      </div>
      <div class="bio-element">
        <div class="date">{{this.currentDate}}</div>
        <div class="content">Here <em>you</em> are and my History goes on!</div>
      </div>
    </div>

    <div class="fav-section">
      <h3 class="section-title">Hobbies</h3>
      <div class="content">Sports (footbal mostly<span style='font-size:15px;'>&#9917;</span>), RPG games (board and computer ⚔️👹), Bible 📖, spending time with my wife <span style='font-size:15px;'>&#128521;</span></div>
    </div>
    <div class="web-section">
      <h3 class="section-title">On the web</h3>
      <a href="https://github.com/PatrykDorau" class="element">
        <span>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
          </svg>
        </span>
        @GitHub/PatrykDorau
      </a>
      <a href="https://www.instagram.com/dorau_p/" class="element">
        <span>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
          </svg>
        </span>
        @Instagram/dorau_p
      </a>
      <a href="https://www.linkedin.com/in/patryk-dorau-018467216/" class="element">
        <span>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" height="30px" width="30px" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </span>
        @Linkedin/patryk-dorau
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  data() {
    return {
      currentDate: ''
    }
  },
  created() {
    this.getCurrentDate()
  },
  methods: {
    getCurrentDate() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();

      this.currentDate = dd + '-' + mm + '-' + yyyy;
    }
  }
}
</script>

<style scoped>
  .welcome-container {
    padding: 0 15px;
    margin-top: clamp(50px, 4vw, 100px);
    width: 80%;
    margin-inline: auto;
  }

  .top-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    margin-inline: auto;
    gap: 20px;
  }

  .hero-name {
    margin: 0;
    font-size: clamp(30px, calc(100vw * 36 / 1000), 36px);
    color: white;
    letter-spacing: 2px;
    font-weight: 700;
  }

  .hero-profession {
    margin: 0;
    color: white;
    letter-spacing: 1px;
    font-size: clamp(16px, calc(100vw * 18 / 1000), 18px);
    font-weight: 400;
  }

  .face-container {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    padding: 10px;
    background-color: #D2B94B;
    border: 3px solid white;
  }

  .face-container img {
    transition:all 0.3s linear;
  }

  .face-container:hover img {
    scale: 1.3;
  }

  .section-title {
    width: fit-content;
    margin-bottom: clamp(20px, 4vw, 40px);
    font-size: 22px;
    padding-block: 2px;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing:5px;
    border-bottom: 2px solid bisque;
    border-top: 2px solid transparent;
    transition: all 0.2s linear;
  }

  .section-title:hover {
    letter-spacing: 10px;
    border-top: 2px solid bisque;
  }

  .bio-section {
    color: white;
    font-weight: 400;
    margin-top: clamp(30px, 3vw , 60px);
  }

  .bio-element {
    display: flex;
    gap: 25px;
  }

  .bio-element .date {
    white-space: nowrap;
    font-weight: 700;
  }
  .bio-element .content {
    max-width: 70%;
  }
  .bio-element .content a {
    color: #D2B94B;
    font-weight: 700;
  }
  .bio-element .content em {
    color: #D2B94B;
    font-style: normal;
    font-weight: 700;
  }

  .bio-element:not(:last-child)  {
    margin-bottom: 10px;
  }

  .fav-section {
    margin-top: clamp(30px, 3vw , 60px);
  }

  .fav-section .content {
    color: white;
    font-weight: 500;
  }

  .web-section {
    margin-top: clamp(30px, 3vw , 60px);
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
  }

  .web-section .element:not(:last-child) {
    margin-bottom: 10px;
  }

  .element {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .welcome-container {
      width: 60%;
    }

    .top-section {
      flex-direction: row;
      justify-content:space-evenly;
      gap: 0;
    }
  }
</style>