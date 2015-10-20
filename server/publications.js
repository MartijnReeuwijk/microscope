Meteor.publish('posts',function(){
  return Posts.find({flagged:flase, author: author});

});
// moet nog een flagged function maken zo dat hij weet wat de server moet sturen
//
