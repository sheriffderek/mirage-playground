export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);



  var krishen = server.create('account', {
    name: `Krishen Kotecha`,
    email: `krishenk@chromadex.com`,
    password: `password`,
    orders: [a, d],
  });

  var joe = server.create('account', {
    name: `Joe Sprankle`,
    email: `joes@chromadex.com`,
    password: `password`,
    orders: [b],
  });

  var sheriff = server.create('account', {
    name: `Sheriff Derek`,
    email: `derekw@chromadex.com`,
    password: `password`,
    orders: [c],
  });
  server.createList('account', 20);



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
    value: 10,
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
    value: 95,
  });
  server.create('area', {
    value: 10,
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
