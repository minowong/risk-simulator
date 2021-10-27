(function() {

  const widget = `
    <h2 class="heading-2 os-step__title">Subscription</h2>
    <div class="os-step__special-description" style="margin-top: 0.5714285714em;">
      <p class="os-step__description">Make changes or cancel your subscriptions</p>
    </div>
    <a
      class="ui-button btn btn--subdued btn--size-small shown-if-js os-step__info"
      href="/account?pw-page=/"
      >Manage your subscription </a>
  `

  if (window.Shopify && Shopify.Checkout && Shopify.Checkout.hasSellingPlan) {
      Shopify.Checkout.OrderStatus.addContentBox(widget)
  }

})()
