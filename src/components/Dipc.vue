<template>
    <div id="Dipc">
         <swiper      :options="swiperOption" ref="mySwiper"  id="swiper">
                <!-- slides -->
                <swiper-slide  v-for="(item,key) in list" :key="key"  v-if="item.imageurls.length > 1">
                    <div > 
                      <img class="Wimg" :src="item.imageurls[0].url" alt=""></div>
                </swiper-slide>
               
                <!-- Optional controls -->
         </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import http from '../../axios/Myapi'
import { swiper, swiperSlide } from 'vue-awesome-swiper'



export default {
    name:"Dipc",
    components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
        list:[],
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
    },
     created() {
                http.type(this,this.$store.state.AI.content).then((res)=>{
                    this.list = res.data.showapi_res_body.pagebean.contentlist;
                    // console.log(this.list)

                })  
    },

}
</script>

<style scoped>

    #swiper{

        height: 200px;
    }

     .Wimg{
        width: 327px;
        height: 200px;
     }
</style>
