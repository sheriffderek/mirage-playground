export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);



  var krishen = server.create('account', {
    name: `Krishen Kotecha`,
    orders: [a, d],
  });

  var joe = server.create('account', {
    name: `Joe Sprankle`,
    orders: [b],
  });

  var sheriff = server.create('account', {
    name: `Sheriff Derek`,
    orders: [c],
  });



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

}
