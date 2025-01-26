<template>
    <n-flex justify="center" align="center" vertical>
      <n-carousel autoplay show-arrow="true">
        <template v-for="item in cardContent" :key="item.name">
          <n-tooltip trigger="hover">
            <template #trigger>
              <img class="carousel-img" :src="item.img" object-fit="cover" width="100%" @click="redirect(item.url)" />
            </template>
            {{ item.name }}
          </n-tooltip>
        </template>
      </n-carousel>
    </n-flex>
</template>

<script setup lang="ts">
import siteScreenshot from './Assets/Images/siteScreenshot.png'

function redirect(url: string) {
  console.log("Redirecting to: ", url);
  window.location.href = url;
}
interface CardItem {
  name: string;
  url: string;
  img: string;
}

const cardContent: CardItem[] = [
  {
    name: "Chicken? 2",
    url: "https://sorceresslyra.itch.io/chicken-2",
    img: "https://img.itch.zone/aW1hZ2UvMTU2NzY1MC85MTUyOTYyLnBuZw==/original/h2wqPF.png",
  },
  {
    name: "Flight of the Unfed",
    url: "https://sorceresslyra.itch.io/flight-of-the-unfed",
    img: "https://img.itch.zone/aW1nLzM4MzUzNDUucG5n/315x250%23c/NgNQR7.png",
  },
  {
    name: "This Site",
    url: "https://github.com/SorceressLyra/sorceressLair",
    img: siteScreenshot,
  },
];


</script>

<style scoped>
.n-carousel {
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 60%;

}

.carousel-img {
  width: 100%;
  height: 500px;
  cursor: pointer;
  object-fit: cover;
}
</style>
