<template>
  <div class="about">
    <main class="site-main woocommerce single single-product page-wrapper">
      
      <section class="space-3">
        <div class="container">
          <div class="row">
            <section id="primary" class="content-area col-lg-12">
              <main id="main" class="site-main" role="main">
                <article id="post-8" class="post-8 page type-page status-publish hentry">
                  <div class="entry-content">
                    <div class="woocommerce">
                      <form name="checkout" method="post" class="checkout woocommerce-checkout row" action="#"
                        enctype="multipart/form-data" novalidate="novalidate">
                        <div class="col-md-7">
                          <div class="col2-set" id="customer_details">
                            <div class="col-12">
                              <div class="woocommerce-billing-fields">
                                <h3>Billing details</h3>

                                <div class="woocommerce-billing-fields__field-wrapper">
                                  <p class="form-row form-row-first form-group validate-required"
                                    id="billing_first_name_field" data-priority="10">
                                    <label for="billing_first_name" class="control-label">First name&nbsp;<abbr
                                        class="required" title="required">*</abbr></label>
                                    <span class="woocommerce-input-wrapper">
                                      <input type="text" class="input-text form-control input-lg"
                                        name="billing_first_name" id="billing_first_name" placeholder="" value="John"
                                        autocomplete="given-name">
                                    </span>
                                  </p>
                                  <p class="form-row form-row-last form-group validate-required"
                                    id="billing_last_name_field" data-priority="20">
                                    <label for="billing_last_name" class="control-label">
                                      Last name&nbsp;<abbr class="required" title="required">*</abbr>
                                    </label>
                                    <span class="woocommerce-input-wrapper">
                                      <input type="text" class="input-text form-control input-lg"
                                        name="billing_last_name" id="billing_last_name" placeholder="" value="Doe"
                                        autocomplete="family-name">
                                    </span>
                                  </p>
                                  <p class="form-row form-row-wide form-group validate-required validate-phone"
                                    id="billing_phone_field" data-priority="100">
                                    <label for="billing_phone" class="control-label">Phone&nbsp;<abbr class="required"
                                        title="required">*</abbr></label>
                                    <span class="woocommerce-input-wrapper"><input type="tel"
                                        class="input-text form-control input-lg" name="billing_phone" id="billing_phone"
                                        placeholder="" value="99182" autocomplete="tel"></span>
                                  </p>
                                  <p class="form-row form-row-wide form-group validate-required validate-email"
                                    id="billing_email_field" data-priority="110">
                                    <label for="billing_email" class="control-label">Email address&nbsp;<abbr
                                        class="required" title="required">*</abbr></label>
                                    <span class="woocommerce-input-wrapper"><input type="email"
                                        class="input-text form-control input-lg" name="billing_email" id="billing_email"
                                        placeholder="" value="me@mail.com" autocomplete="email username"></span></p>
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
                                  <th class="product-name">Product</th>
                                  <th class="product-total">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="cart_item">
                                  <td class="product-name">
                                    Beanie with Logo&nbsp;
                                    <strong class="product-quantity">× 2</strong> </td>
                                  <td class="product-total">
                                    <span class="woocommerce-Price-amount amount"><span
                                        class="woocommerce-Price-currencySymbol">৳&nbsp;</span>36.00</span> </td>
                                </tr>
                                <tr class="cart_item">
                                  <td class="product-name">
                                    Beanie&nbsp;
                                    <strong class="product-quantity">× 1</strong> </td>
                                  <td class="product-total">
                                    <span class="woocommerce-Price-amount amount"><span
                                        class="woocommerce-Price-currencySymbol">৳&nbsp;</span>18.00</span> </td>
                                </tr>
                              </tbody>
                              <tfoot>

                                <tr class="cart-subtotal">
                                  <th>Subtotal</th>
                                  <td><span class="woocommerce-Price-amount amount"><span
                                        class="woocommerce-Price-currencySymbol">৳&nbsp;</span>54.00</span></td>
                                </tr>

                                <tr class="order-total">
                                  <th>Total</th>
                                  <td><strong><span class="woocommerce-Price-amount amount"><span
                                          class="woocommerce-Price-currencySymbol">৳&nbsp;</span>54.00</span></strong>
                                  </td>
                                </tr>
                              </tfoot>
                            </table>

                            <div id="payment" class="woocommerce-checkout-payment">
                              <div class="form-row place-order">
                                <button type="submit" class="button alt" name="woocommerce_checkout_place_order"
                                  id="place_order" value="Place order" data-value="Place order">Place order</button>
                                <input type="hidden" id="woocommerce-process-checkout-nonce"
                                  name="woocommerce-process-checkout-nonce" value="c75f934b1d"><input type="hidden"
                                  name="_wp_http_referer" value="/?wc-ajax=update_order_review">
                              </div>
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