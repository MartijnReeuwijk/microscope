if (Post.find().count() === 0) {
  Posts.insert({
    title:'Introducing Telescope',
    url:'http://sachagreif.com/Introducing-telescope/'
  });

  Posts.insert({
    title:'Meteor',
    url:'http://meteor.com'
  });

  Posts.insert({
    title:'The meteor Book',
    url:'http://themeteorbook.com'
  });
}
