/**
 * Created by xiayangqun on 2017/3/16.
 */
Posts = new Meteor.Collection('posts');
Posts.allow({
    insert:function (userId,doc) {
        return userId && (doc.user._id === userId);
    }

});