export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  var krishen = server.create('account', {
    firstName: `Krishen`,
    lastName: `Kotecha`,
    email: `krishenk@chromadex.com`,
    password: `password`,
    orders: [a, d],
  });

  var joe = server.create('account', {
    firstName: `Joe`,
    lastName: `Sprankle`,
    email: `joes@chromadex.com`,
    password: `password`,
    orders: [b],
  });

  var sheriff = server.create('account', {
    firstName: `Derek`,
    lastName: `Wood`,
    email: `derekw@chromadex.com`,
    password: `password`,
    handle: `sheriffderek`,
    orders: [c],
  });

  var ivy = server.create('account', {
    firstName: `Ivy`,
    lastName: `Reynolds`,
    email: `ivy@ivyreynolds.photography`,
    password: `password`,
    orders: [],
  });
  // server.createList('account', 20);



  var a = server.create('order', {
    number: 89473986,
    date: new Date(),
  });

  var b = server.create('order', {
    number: 230894,
    date: new Date(),
  });

  var c = server.create('order', {
    number: 2349876,
    date: new Date(),
  });

  var d = server.create('order', {
    number: 342349,
    date: new Date(),
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
