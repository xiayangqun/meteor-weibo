/**
 * Created by xiayangqun on 2017/3/16.
 */
Posts = new Meteor.Collection('posts');
Template.index.events({
    'click #submit':function (evt) {
        evt.preventDefault();
        var post=$('#post').val();
        if(post.length <= 0 || post.length >140){
            Session.set('info',{error:'博文长度必须在0-140个字符之间'});
        }else{
            Posts.insert({user:Meteor.user(),post:post,time:new Date()},function (error) {
               if(error){
                   Session.set('info',{error:error.reason});
               }else{
                   Session.set('info',{success:'博文发布成功了'});
               }
            });
        }
    }
});


Template.index.posts=function () {
    var posts= Posts.find({}).fetch();
    return posts;
};


