<template>
  <div class="home">
    <section class="banner banner-2">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-8">
            <div class="banner-content center-heading">
              <span class="subheading">Expert instruction</span>
              <h1>Build Skills With Experts Any Time, Anywhere </h1>
              <p>We invest in personnel, technological innovations and infrastructure and have established
                regional and international offices.</p>
              <a href="#" class="btn btn-main"><i class="fa fa-list-ul mr-2"></i>our Lessons </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding popular-course pb-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="section-heading">
              <span class="subheading">Top Trending Lesson</span>
              <h3>Our Popular Online Lesson</h3>
            </div>
          </div>

          <div class="col-lg-6">
            <div v-if="$store.state.cart.length > 0" class="course-btn text-lg-right">
              <router-link to="/shopping-cart" class="btn btn-main"><i class="fa fa-store mr-2"></i>Checkout
              </router-link>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 col-5">
            <h3>Sort</h3>
            <div class="form-group">
              <input type="radio" id="subject" class="mr-2">
              <label for="subject">Subject</label>
            </div>
            <hr>
            <div class="form-grou">
              <input type="radio" id="ascending" name="order" class="mr-2">
              <label for="ascending">Ascending</label>
            </div>
            <div class="form-grou">
              <input type="radio" id="descending" name="order" class="mr-2">
              <label for="descending">Descending</label>
            </div>

          </div>
          <div class="col-md-9 col-7">
            <div class="row">
              <lesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson"></lesson>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Lesson from '../components/Lesson.vue';
  import lessonsData from "../data/lessons.json";

  export default {
    name: 'Home',
    data() {
      return {
        lessons: lessonsData,
      }
    },
    mounted() {

    },
    components: {
      Lesson
    },
  }
</script>