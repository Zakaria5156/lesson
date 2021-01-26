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
              <a href="#" class="btn btn-main"><i class="fa fa-list-ul mr-2"></i>our Courses </a>
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
              <span class="subheading">Top Trending Courses</span>
              <h3>Our Popular Online Courses</h3>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="course-btn text-lg-right"><a href="#" class="btn btn-main"><i class="fa fa-store mr-2"></i>All
                Courses</a></div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 col-5">
            <h3>Sort</h3>
          </div>
          <div class="col-md-9 col-7">
            <div class="row">
              <div class="col-lg-4 col-md-6" v-for="lesson in lessons" :key="lesson.id">
                <div class="course-block">
                  <div class="course-img">
                    <img :src="require(`@/assets/images/course/${lesson.image}`)" alt="" class="img-fluid">
                  </div>

                  <div class="course-content">
                    <div class="course-price ">$50</div>

                    <h5><a href="#">{{ lesson.subject }}</a></h5>
                    <div class="rating">
                      <i class="fa fa-map"></i>
                      <span>{{ lesson.location }}</span>
                    </div>
                    <p>{{ lesson.description }}</p>

                    <div class="course-footer d-lg-flex align-items-center justify-content-between">
                      <div class="course-meta">
                        <span class="course-student"><i class="bi bi-group"></i>{{ lesson.spaces }}</span>
                      </div>

                      <div class="buy-btn"><a href="#" class="btn btn-main-2 btn-small">Add to cart</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  // @ is an alias to /src
  import lessonsData from "../data/lessons.json";

  export default {
    name: 'Home',
    data() {
      return {
        lessons: lessonsData
      }
    },
    components: {

    }
  }
</script>