if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}
// als het leeg is!!

// comments gaan in de database.


if (Post.find().count() === 0){
  var now = new Date().getTime();

  var tomId = Meteor.users.insert({
    profile: {name: 'Tom Coleman'}
  });
var tom = Meteor.users.findOne(tomId);

var sachaId = Meteor.users.insert({
  profile: {name: 'Sacha Grief'}

});
var sacha = Meteor.users.findOne(sachaId);

var telescopeis = Posts.insert({
  title: 'Intoducting Telescope',
  userId: sacha._id,
  author: sacha.profile.name,
  url: 'http:/sachgrief.com/introducing-telescope/',
  submitted: new Date (now - 7 * 3600 * 1000)
});

Comments.insert({
  postId: telescopeId,
  userId: tom._id,
  author: tom.profile.name,
  submitted: new Date (now - 5*3600*1000),
  body: 'interesting project acha , can i get involved?'
});

Comments.insert({
  postId: telescopeId,
  userId: sacha._id,
  author: sacha.profile.name,
  submitted: new Date (now - 3 * 3600 * 1000),
  body: 'You sure can Tom!'

});

Posts.insert({
title: 'meteor',
userId: tom._id,
author: tim.profile.name,
url: 'htt://meteor.com',
submitted: new Date(now - 10 * 3600 * 1000)

});

}
