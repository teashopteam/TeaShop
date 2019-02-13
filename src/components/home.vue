<template>
  <div class="home">
    <header class="header">
      <input type="text" class="input-controller" placeholder="xxx农茶庄欢迎您" readonly>
    </header>
    <div class="home_con">
      <div class="home_banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/banner1.jpg" alt="banner" style="width:100%" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/banner2.jpg" alt="banner" style="width:100%" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/banner1.jpg" alt="banner" style="width:100%" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted: function () {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      loop: true
    })
  }
}
</script>

<style scoped>

</style>
