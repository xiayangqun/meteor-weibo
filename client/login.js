/**
 * Created by xiayangqun on 2017/3/16.
 */
Template.login.events({
    'click #submit':function (evt) {
        evt.preventDefault();

        var username=$('#username').val();
        var password=$('#password').val();

        if(username.length == 0 || password.length==0){
            Session.set('info',{error:'用户名或密码不能为空'})
        }else{
            Meteor.loginWithPassword(username,password,function (err) {
                if(err){
                    Session.set('info',{error:err.reason});
                }else{
                    Router.redirect('/');
                    Session.set('info',{success:'登录成功'});
                }
            })
        }
    }
});