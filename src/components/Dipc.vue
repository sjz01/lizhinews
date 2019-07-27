<template>
    <div id="Dipc">
         <swiper :options="swiperOption" ref="mySwiper"  id="swiper">
    <!-- slides -->
                <swiper-slide><img src="" alt=""></swiper-slide>
                <swiper-slide>I'm Slide 2</swiper-slide>
                <swiper-slide>I'm Slide 3</swiper-slide>
                <swiper-slide>I'm Slide 4</swiper-slide>
                <swiper-slide>I'm Slide 5</swiper-slide>
                <swiper-slide>I'm Slide 6</swiper-slide>
                <swiper-slide>I'm Slide 7</swiper-slide>
                <!-- Optional controls -->
               
                
                
         </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'



export default {
    name:"Dipc",
    components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
        swiperOption: {
        spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        }
      }
  },
   computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<style scoped>

    #swiper{
   
        height: 200px;
        background-color: blue;
    }
</style>
