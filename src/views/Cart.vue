<template>
  <div class="about">
    <main class="site-main woocommerce single single-product page-wrapper">

      <section class="space-3">
        <div class="container">
          <router-link to="/" class="btn btn-main"><i class="fa fa-home "></i> Home
          </router-link>

          <div class="row">
            <lesson @course-removed="getTotal()" v-for="lesson in lessons" :key="lesson.id" :lesson="lesson"></lesson>
            <section id="primary" class="content-area col-lg-12">
              <main id="main" class="site-main" role="main">
                <article id="post-8" class="post-8 page type-page status-publish hentry">
                  <div class="entry-content">
                    <div class="woocommerce">
                      <form name="checkout" class="checkout woocommerce-checkout row">
                        <div class="col-md-7">
                          <div class="col2-set" id="customer_details">
                            <div class="col-12">
                              <div class="woocommerce-billing-fields">
                                <h3>Billing details</h3>
                                <div class="form-group">
                                  <label for="">Name</label>
                                  <input type="text" v-model="name" class="form-control">
                                </div>
                                <div class="form-group">
                                  <label for="">Phone</label>
                                  <input type="number" v-model="phone" class="form-control">
                                </div>
                                <div class="form-group">
                                  <label for="">Email</label>
                                  <input type="email" v-model="email" class="form-control">
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div class="col-md-5">
                          <div id="order_review" class="woocommerce-checkout-review-order">
                            <h3 id="order_review_heading">Your order</h3>
                            <table class="shop_table woocommerce-checkout-review-order-table">
                              <thead>
                                <tr>
                                  <th class="product-name">Lessons</th>
                                  <th class="product-total">Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="cart_item" v-for="lesson in lessons" :key="lesson.id">
                                  <td class="product-name"> {{ lesson.subject }}</td>
                                  <td class="product-total">
                                    <span class="woocommerce-Price-amount amount"><span
                                        class="woocommerce-Price-currencySymbol">€</span>{{ lesson.price }}</span> </td>
                                </tr>
                              </tbody>
                              <tfoot>

                                <tr class="order-total">
                                  <th>Total Price</th>
                                  <td><strong><span class="woocommerce-Price-amount amount"><span
                                          class="woocommerce-Price-currencySymbol">€</span>{{ total }}</span></strong>
                                  </td>
                                </tr>
                              </tfoot>
                            </table>

                            <div id="payment" v-if="filled()" class="woocommerce-checkout-payment">
                              <button @click="checkout" type="button" class="button alt btn-block mt-3" id="place_order"
                                value="Place order" data-value="Place order">Checkout</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </article>
              </main>
            </section>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script>
  import Lesson from '../components/Lesson.vue';
  export default {
    name: 'Home',
    data() {
      return {
        lessons: this.$store.state.cart,
        total: 0,
        name: '',
        email: '',
        phone: ''
      }
    },
    mounted() {
      this.getTotal();
    },
    methods: {
      filled() {
        if (this.name == '' || this.email == '' || this.phone == '' || this.lessons.length == 0) {
          return false
        }
        return true
      },
      checkout() {
        let data = {
          name : this.name,
          email : this.email,
          phone : this.phone,
          total : this.total,
        }
        fetch("http://127.0.0.1:8000/order", {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(res => {
            console.log(res)
            alert('Your order has been submitted successfully')
          });

        this.$store.commit('emptyCart');
        //.lessons = [];
        this.total = 0;
        this.name = '';
        this.email = '';
        this.phone = '';
      },
      getTotal() {
        this.total = this.lessons.reduce((acc, item) => acc + item.price, 0);
      },
      updated() {
        this.getTotal();
      },
    },
    components: {
      Lesson
    },
  }
</script>

<style lang="scss" scoped>

</style>