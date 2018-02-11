export default function(server) {

  window.server = server;
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);


  var orderA = server.create('order');
  var orderB = server.create('order');
  var orderC = server.create('order');
  var orderD = server.create('order');
  var orderE = server.create('order');
  var orderF = server.create('order');

  server.create('account', {
    firstName: `Krishen`,
    lastName: `Kotecha`,
    email: `krishenk@chromadex.com`,
    password: `password`,
    orders: [orderA, orderB],
  });

  server.create('account', {
    firstName: `Joe`,
    lastName: `Sprankle`,
    email: `joes@chromadex.com`,
    password: `password`,
    orders: [orderC],
  });

  server.create('account', {
    firstName: `Derek`,
    lastName: `Wood`,
    email: `derekw@chromadex.com`,
    password: `password`,
    handle: `sheriffderek`,
    orders: [orderD, orderE, orderF],
  });

  // server.create('account', {
  //   firstName: `Ivy`,
  //   lastName: `Reynolds`,
  //   email: `ivy@ivyreynolds.photography`,
  //   password: `password`,
  //   orders: [],
  // });

  // server.create('account', {
  //   firstName: `Brittney`,
  //   lastName: `Backos`,
  //   email: ``,
  //   password: `password`,
  //   orders: [],
  // });

  // server.create('account', {
  //   firstName: `Conor`,
  //   lastName: `Collins`,
  //   email: `conor@outergamut.com`,
  //   password: `password`,
  //   orders: [],
  // });

  // server.create('account', {
  //   firstName: `Garry`,
  //   lastName: `Shandling`,
  //   email: `garry@shandling.com`,
  //   password: `password`,
  //   orders: [],
  // });
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




  var subA = server.create('subscription', {
    type: 3,
    typeKey: 'quarterly',
    typeTitle: 'Quarterly',
  });



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
