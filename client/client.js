/**
 * Created by xiayangqun on 2017/3/15.
 */

Session.setDefault('currentUrl', {index: 'active', login: '', reg: ''});
Template.container.currentUrl = function () {
    return Session.get('currentUrl');
};
Template.info.info=function () {
  return Session.get('info');
};

var urlRouter = Backbone.Router.extend({
    routes: {
        "": "index",
        "login": "login",
        "reg": "reg"
    },
    index: function () {
        //do something
        Session.set('currentUrl', {index: 'active', login: '', reg: ''});
    },
    login: function () {
        //do something
        Session.set('currentUrl', {index: '', login: 'active', reg: ''});
    },
    reg: function () {
        //do something
        Session.set('currentUrl', {index: '', login: '', reg: 'active'});
    },
    redirect: function (url) {
        this.navigate(url, true);
    }
});

Router = new urlRouter;
Meteor.startup(function () {
    Backbone.history.start({pushState: true});
});


