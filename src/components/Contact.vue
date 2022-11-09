<template>
  <div class="contact-container" v-motion-slide-top>
    <div class="menu">
      <router-link to="/">Main page</router-link> / <router-link to="/contact">Contact</router-link>
    </div>
    <h3 class="contact-title">Contact</h3>
    <div class="contact-options">
      <div class="contact-option">
        <span class="contact-icon" >&#9743;</span>
        <span><a class="option" href="tel:730798773">+48 730 798 773</a></span>
      </div>
      <div class="contact-option">
        <span class="contact-icon" >✉</span>
        <span><a class="option" href="mailto:dorau.patryk1@gmail.com">dorau.patryk1@gmail.com</a></span>
      </div>
      <div class="contact-option">
        <span class="contact-icon" >&#9906;</span>
        <span><a class="option" href="https://www.google.com/maps/place/Pozna%C5%84/@52.4004458,16.7615836,11z/data=!3m1!4b1!4m5!3m4!1s0x470444d2ece10ab7:0xa4ea31980334bfd1!8m2!3d52.406374!4d16.9251681">Poznań</a></span>
      </div>
    </div>
    <form class="contact-from" action="https://formsubmit.co/dorau.patryk1@gmail.com" method="POST">
      <div class="form-row">
        <input type="text" name="name" placeholder="Name">
        <input type="email" name="email" placeholder="Email">
      </div>
      <div class="form-row">
        <input type="text" name="topic" placeholder="Topic">
      </div>
      <div class="form-row">
        <textarea name="message" rows="7" placeholder="Message"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
}
</script>

<style scoped>
    .contact-container {
      display: block;
      width: 80%;
      padding: 10px;
      margin-top: clamp(30px, 4vw, 60px);
      margin-inline: auto;
      border-radius: 15px;
      position: relative;
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

    .contact-title {
      width: fit-content;
      margin-bottom: clamp(20px, 4vw, 40px);
      font-size: 22px;
      padding-block: 2px;
      color: rgba(255, 255, 255, 0.7);
      letter-spacing: 5px;
      border-bottom: 2px solid bisque;
      border-top: 2px solid transparent;
      text-align: center;
      transition: all 0.2s linear;
    }

    .contact-title:hover {
      letter-spacing: 10px;
      border-top: 2px solid bisque;
      cursor: default;
    }

    .contact-options {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .contact-option {
      display: flex;
      gap: 2%;
      align-items:center;
    }

    .contact-icon {
      width: 40px;
      height: 40px;
      color: #D2B94B;
      font-size: 2rem;
    }
    
    .option {
      text-decoration: none;
      color: white;
      letter-spacing:1px;
      font-weight: 600;
    }

    .contact-from{
      width: 80%;
      margin-inline: auto;
      border-radius: 50%;
      margin-top: clamp(70px, 3vw, 60px);
    }

    .form-row {
      width: 100%;
      display: flex;
      margin-bottom: 10px;
      gap: 10px;
      flex-direction:column;
    }
    .form-row *{
      flex: 1;
    }

    input, textarea {
      background-color:rgba(255, 255, 255, 0.04);
      border: 0;
      padding: 15px 10px;
      border-radius: 15px;
      color: white;
    }

    input:-internal-autofill-selected {
      background-color: rgba(255, 255, 255, 0.01) !important;
    }

    @media (min-width: 768px) {
      .contact-container {
          width: 60%;
      }
      .form-row {
        flex-direction:row;
      }
    }
</style>