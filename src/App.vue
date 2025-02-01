<template>
  <div class="min-h-screen overflow-hidden bg-neutral-400">
    <info-card :profile-photo="profilePhoto">
      <template #header>
        <p>Lyra S.R. Mikkelsen</p>
      </template>
      <template #default>
        <p>Fullstack Software Engineer</p>
        <p>Aarhus, Denmark</p>
        <div class="pt-5">
          <slabel text=".NET" />
          <slabel text="Node.js" />
          <slabel text="Typescript" />
          <slabel text="Tailwind" />
          <slabel text="C/C++" />
          <slabel text="Cross-Platform" />
          <slabel class="bg-active" text="Azure" />
          <slabel class="bg-active" text="DevOps" />
          <slabel class="bg-active" text="Agile" />
          <slabel class="bg-active" text="Google Cloud" />
        </div>
      </template>
    </info-card>
    <info-card>
      <template #header>
        <p>Contact me</p>
      </template>
      <template #default>
        <button class="bg-emerald-700 m-2 rounded-md hover:bg-emerald-600 p-2">Email</button>
        <button class="bg-emerald-700 m-2 rounded-md hover:bg-emerald-600 p-2">GitHub</button>
        <button class="bg-emerald-700 m-2 rounded-md hover:bg-emerald-600 p-2">Linkedin</button>
      </template>
    </info-card>
  </div>
</template>

<script setup lang="ts">
import profilePhoto from './Assets/Images/me.jpg'
import infoCard from './components/infoCard.vue';
import slabel from './components/slabel.vue';

function redirect(url: string) {
  console.log("Redirecting to: ", url);
  window.location.href = url;
}
</script>
