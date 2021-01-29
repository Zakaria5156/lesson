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
            <h3>Sort Lessons</h3>
            <div class="">
              <input v-model="attribute" value="subject" type="radio" id="subject" class="mr-2">
              <label for="subject">Subject</label>
            </div>
            <div class="">
              <input v-model="attribute" value="location" type="radio" id="location" class="mr-2">
              <label for="location">Location</label>
            </div>
            <div class="">
              <input v-model="attribute" value="price" type="radio" id="price" class="mr-2">
              <label for="price">Price</label>
            </div>
            <div class="">
              <input v-model="attribute" value="spaces" type="radio" id="spaces" class="mr-2">
              <label for="spaces">Availability</label>
            </div>
            <hr>
            <div class="form-grou">
              <input type="radio" v-model="asc" id="ascending" value="true" class="mr-2">
              <label for="ascending">Ascending</label>
            </div>
            <div class="form-grou">
              <input type="radio" v-model="asc" id="descending" value="false" class="mr-2">
              <label for="descending">Descending</label>
            </div>

          </div>
          <div class="col-md-9 col-7">
            <div class="row" v-if="!loading">
              <lesson  v-for="lesson in lessons" :key="lesson.id" :lesson="lesson"></lesson>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Lesson from '../components/Lesson.vue';
  //import lessonsData from "../data/lessons.json";

  export default {
    name: 'Home',
    data() {
      return {
        lessons: [],
        attribute: 'subject',
        asc: true,
        loading: false,
      }
    },
    components: {
      Lesson
    },
    mounted() {
      this.fetchLessons();
    },

    methods: {
      fetchLessons() {
        this.loading = true;
        fetch("https://my-lessons-app.herokuapp.com/lessons")
          .then(response => response.json())
          .then(data => {
            this.loading = false;
            this.lessons = data.data;
          });
      },

      sortNow() {
        /* Sort subject */
        if (this.attribute == 'subject') {
          this.lessons.sort(function (a, b) {
            let aa = a.subject.toLowerCase(),
              bb = b.subject.toLowerCase();
            if (aa < bb) {
              return -1;
            }
            if (aa > bb) {
              return 1
            }
            return 0
          })
        }

        //Sort Location
        if (this.attribute == 'location') {
          this.lessons.sort(function (a, b) {
            let aa = a.location.toLowerCase(),
              bb = b.location.toLowerCase();
            if (aa < bb) {
              return -1;
            }
            if (aa > bb) {
              return 1
            }
            return 0
          })
        }


        //Sort Price
        if (this.attribute == 'price') {
          this.lessons.sort(function (a, b) {
            return a.price - b.price
          })
        }

        //Sort Price
        if (this.attribute == 'spaces') {
          this.lessons.sort(function (a, b) {
            return a.spaces - b.spaces
          })
        }

        if (this.asc == 'false') {
          this.lessons.reverse();
        }

      }
    },


    updated() {
      this.sortNow()
    },
  }
</script>