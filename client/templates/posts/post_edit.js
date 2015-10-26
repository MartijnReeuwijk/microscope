Template.postEdit.events({
  'submit form': function(e){
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    }

    Post.update(currentPostId), {$set: postProperties}, function(error){
      if (error){
        alert(error.reason);
      }else {
        Router.go('postPage', {_id: currentPostId});

      }
    };
  },

  'click .delete':function(e){
    e.preventDefault();
    if(confirm("Are you sure you want to delete")){
      var currentPostId = this._id;
      posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});//laatste
