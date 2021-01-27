<template>
    <div class="col-lg-4 col-md-6">
        <div class="course-block">
            <div class="course-img">
                <img :src="require(`@/assets/images/course/${lesson.image}`)" alt="" class="img-fluid">
            </div>

            <div class="course-content">
                <div class="course-price ">€{{ lesson.price }}</div>
                <h5><a href="#">{{ lesson.subject }}</a></h5>
                <div class="rating">
                    <i class="fa fa-map"></i>
                    <span>{{ lesson.location }}</span>
                </div>
                <p>{{ lesson.description }}</p>

                <div class="course-footer d-lg-flex align-items-center justify-content-between">
                    <div class="course-meta" >
                        <span class="course-student"><i class="bi bi-group"></i>{{ lesson.spaces }}</span>
                    </div>

                    <div v-if="inCart()" class="buy-btn"><a @click="removeFromCart(lesson)" class="btn btn-main text-white btn-small">Remove</a></div>
                    <div v-else class="buy-btn"><a @click="addToCart(lesson)" class="btn btn-main-2 text-white btn-small">Add to cart</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['lesson'],
        mounted () {
           
        },
        methods: {
            addToCart(lesson) {
                if (lesson.spaces < 1) {
                    alert('No space available');
                    return false;
                }
                this.$store.commit('addLesson', this.lesson);
                lesson.spaces -= 1;
            },

            removeFromCart(lesson){
                this.$store.state.cart.splice(this.$store.state.cart.indexOf(lesson), 1);
                lesson.spaces += 1;
            },

            inCart(){
                return this.$store.state.cart.includes(this.lesson);
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>