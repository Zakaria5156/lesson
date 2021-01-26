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
                    <div class="course-meta">
                        <span class="course-student"><i class="bi bi-group"></i>{{ lesson.spaces }}</span>
                    </div>

                    <div class="buy-btn"><a @click="addToCart(lesson)" class="btn btn-main-2 text-white btn-small">Add to cart</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['lesson'],
        emits: ['add'],
        mounted () {
           
        },
        methods: {
            addToCart(lesson) {
                if (lesson.spaces < 1) {
                    alert('No space available');
                    return false;
                }
                this.$emit('add', lesson)
                lesson.spaces -= 1;
            },
        },

    }
</script>

<style lang="scss" scoped>

</style>