<template>
  <div class="profile-flex-box card">
    <img class="profile-photo" :src="profilePhoto" alt="">
    <div class="details-flex-box">
      <h1>Lyra S.R. Mikkelsen</h1>
      <h2>Fullstack Software Engineer</h2>
      <p class="skill-info">C# | Javascript/Typescript | C/C++</p>
      <p class="skill-info">.NET | React Vue.js | AI/Machine Learning</p>
    </div>
  </div>
  <div class="card contact-info">
    <h2>Reach out</h2>
    <div class="button-container">
      <button id="LinkedInButton" @click="redirect('https://www.linkedin.com/in/lyramikkelsen/')">
        <v-icon name="bi-linkedin" />
        <label for="LinkedInButton"> LinkedIn</label>
      </button>
      <button id="githubButton" @click="redirect('https://github.com/SorceressLyra')">
        <v-icon name="bi-github" />
        <label for="githubButton"> Github</label>
      </button>
      <button id="EmailButton" @click="redirect('mailto:lyramikkelsen@gmail.com')">
        <v-icon name="md-email" />
        <label for="EmailButton"> Email Me</label>
      </button>

    </div>
  </div>
</template>

<script setup lang="ts">
import profilePhoto from './Assets/Images/me.jpg'

function redirect(url: string) {
  window.location.href = url;
}
</script>

<style>
.profile-photo {
  object-fit: contain;
  clip-path: circle();
  width: 100%;
  max-width: 20rem;
  overflow: hidden;
}

.contact-info {
  flex-direction: column;
  align-items: center;
}

.contact-info h2 {
  text-align: center;
}

.details-flex-box {
  display: flex;
  flex-direction: column;
  margin: 5rem;
}

.button-container {
  display: flex;
  flex-direction: row;
}

/* Mobile Tweaks */
@media screen and (max-width: 500px) {
  .details-flex-box {
    margin: 1rem;
  }

  .button-container {
    flex-direction: column;
  }
}
</style>
