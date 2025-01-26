<template>
  <n-config-provider :theme="theme">
    <n-grid x-gap="20" y-gap="20" cols="1">
      <n-gi>
        <n-card>
          <n-avatar round :size="200" :src="profilePhoto" object-fit="cover" />
          <n-flex vertical>
            <n-h1>Lyra S.R. Mikkelsen</n-h1>
            <n-h2>Fullstack Software Engineer</n-h2>
            <n-flex>
              <n-tag type="info">C#</n-tag>
              <n-tag type="info">Typescript/Javascript</n-tag>
              <n-tag type="info">C/C++</n-tag>
            </n-flex>
            <n-flex>
              <n-tag type="success">.NET</n-tag>
              <n-tag type="success">Vue.js</n-tag>
              <n-tag type="success">React</n-tag>
              <n-tag type="success">Angular</n-tag>
            </n-flex>
          </n-flex>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card>
          <catCarousel />
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="Contact Me">
          <n-flex>
            <n-button id="LinkedInButton" @click="redirect('https://www.linkedin.com/in/lyramikkelsen/')">
              <label for="LinkedInButton"> LinkedIn</label>
              <template #icon>
                <n-icon>
                  <Linkedin />
                </n-icon>
              </template>
            </n-button>
            <n-button id="githubButton" @click="redirect('https://github.com/SorceressLyra')">
              <template #icon>
                <n-icon>
                  <Github />
                </n-icon>
              </template>
              <label for="githubButton"> Github</label>
            </n-button>
            <n-button id="EmailButton" @click="redirect('mailto:lyramikkelsen@gmail.com')">
              <template #icon>
                <n-icon>
                  <MailBulk />
                </n-icon>
              </template>
              <label for="EmailButton"> Email Me</label>
            </n-button>

          </n-flex>
        </n-card>

      </n-gi>
    </n-grid>

  </n-config-provider>

</template>

<script setup lang="ts">
import { type GlobalTheme, darkTheme } from 'naive-ui';
import { Github, Linkedin, MailBulk } from '@vicons/fa';
import profilePhoto from './Assets/Images/me.jpg'
import catCarousel from './catCarousel.vue';

const theme = darkTheme;
function redirect(url: string) {
  console.log("Redirecting to: ", url);
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
</style>
