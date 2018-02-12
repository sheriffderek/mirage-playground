export default function(server) {

  window.server = server;
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  var starterKit = server.create('product', {
    title: "Starter Kit",
  });

  var byTheBottle = server.create('product', {
    title: "By the bottle",
  });

  // var monthly = server.create('product', {
  //   title: "Every month",
  // });

  // var quarterly = server.create('product', {
  //   title: "Every 3 months",
  // });

  // var yearly = server.create('product', {
  //   title: "Annually",
  // });

  var visa1 = server.create('payment-method', {
    type: 'visa',
    expirationMonth: '05',
    expirationYear: '23',
    lastFour: '0028',
  });

  var visa2 = server.create('payment-method', {
    type: 'visa',
    expirationMonth: '04',
    expirationYear: '19',
    lastFour: '0978',
  });

  var amex1 = server.create('payment-method', {
    type: 'amex',
    expirationMonth: '09',
    expirationYear: '21',
    lastFour: '3454',
  });

  var orderA = server.create('order');
  var orderB = server.create('order');
  var orderC = server.create('order');
  var orderD = server.create('order');
  var orderE = server.create('order');
  var orderF = server.create('order');

  // $note - if these are after* accounts... no go
  var subA = server.create('subscription', {
    type: 3,
    typeName: 'Quarterly',
  });

  var subB = server.create('subscription', {
    type: 1,
    typeName: 'Monthly',
  });

  var subC = server.create('subscription', {
    type: 1,
    typeName: 'Monthly',
  });

  var subD = server.create('subscription', {
    type: 1,
    typeName: 'Monthly',
  });

  server.create('account', {
    firstName: `Krishen`,
    lastName: `Kotecha`,
    email: `krishenk@chromadex.com`,
    password: `password`,
    handle: `@realdonaldglover`,
    orders: [orderA, orderB],
    subscriptions: [subA, subC],
    paymentMethods: [visa1],
  });

  server.create('account', {
    firstName: `Joe`,
    lastName: `Sprankle`,
    email: `joes@chromadex.com`,
    password: `password`,
    orders: [orderC],
    handle: `bar-fight`,
    subscriptions: [subB],
    paymentMethods: [visa2, amex1],
  });

  server.create('account', {
    firstName: `Derek`,
    lastName: `Wood`,
    email: `derekw@chromadex.com`,
    password: `password`,
    handle: `sheriffderek`,
    orders: [orderD, orderE, orderF],
  });

  server.create('account', {
    firstName: `Brittney`,
    lastName: `Backos`,
    email: ``,
    password: `password`,
    orders: [],
    subscriptions: [subD]
  });

  // server.createList('account', 20);

  var css = server.create('tag', {
    name: 'CSS',
    slug: 'css',
  });

  var js = server.create('tag', {
    name: 'JavaScript',
    slug: 'javascript',
  });

  var elixir = server.create('tag', {
    name: 'Elixir',
    slug: 'elixir',
  });

  server.create('post', {
    title: 'Cats and dogs',
    tags: [js, css],
  });

  server.create('post', {
    title: 'Suds and buds',
    tags: [css, elixir],
  });

  server.create('post', {
    title: 'Captain merica',
    tags: [js],
  });

  // server.createList('order', 10);







  server.create('area', {
    value: 0,
  });
  server.create('area', {
    value: 10,
  });
  server.create('area', {
    value: 20,
  });
  server.create('area', {
    value: 30,
  });
  server.create('area', {
    value: 40,
  });
  server.create('area', {
    value: 50,
  });
  server.create('area', {
    value: 60,
  });
  server.create('area', {
    value: 70,
  });
  server.create('area', {
    value: 80,
  });
  server.create('area', {
    value: 90,
  });
  server.create('area', {
    value: 100,
  });
  server.create('area', {
    value: 70,
  });
  server.create('area', {
    value: 17,
  });
  server.create('area', {
    value: 30,
  });
  server.create('area', {
    value: 80,
  });
  server.create('area', {
    value: 20,
  });
  server.create('area', {
    value: 70,
  });
  server.create('area', {
    value: 37,
  });
  server.create('area', {
    value: 40,
  });
  server.create('area', {
    value: 90,
  });

}
