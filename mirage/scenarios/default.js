export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);



  var krishen = server.create('account', {
    name: `Krishen Kotecha`,
  });

  var joe = server.create('account', {
    name: `Joe Sprankle`,
  });

  var sheriff = server.create('account', {
    name: `Sheriff Derek`,
  });

}
