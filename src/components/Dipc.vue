<template>
    <div id="Dipc">
         <swiper      :options="swiperOption" ref="mySwiper"  id="swiper">
                <!-- slides -->
                <swiper-slide  v-for="(value,key) in 5" :key="key" >I'm Slidekey {{key}}</swiper-slide>
               
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
        text:{},






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
      this.swiper.slideTo(0, 1000, false)
    }
}
</script>

<style scoped>

    #swiper{
   
        height: 200px;
        background-color: blue;
    }
</style>
