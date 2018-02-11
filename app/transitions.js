
export default function(){

  this.transition(
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('checkout.multi-step.contact-email'),
    this.toRoute('checkout.multi-step.shipping-name'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('checkout.multi-step.shipping-name'),
    this.toRoute('checkout.multi-step.order-confirmation'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
