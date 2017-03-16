/**
 * Created by xiayangqun on 2017/3/15.
 */

Template.reg.events({
    'click #submit':function (evt) {
        evt.preventDefault();

        var username=$('#username').val();
        var password=$('#password').val();
        var password_repeat=$('#password-repeat').val();

        if(username.length < 6){
            Session.set('info',{success:false,error:'用户名字长度必须大于6'});
        }else if(password.length < 6) {
            Session.set('info',{success:false,error:'用户密码位数必须大于6'});
        }else if(password !== password_repeat){
            Session.set('info',{success:false,error:'两次密码确认不一致'});
        }else {
            Accounts.createUser({
                username: username,
                password: password
            }, function (err) {
                if (err) {
                    Session.set('info', {success: false, error: err.reason});
                } else {
                    Router.redirect('/');
                    Session.set('info', {success: '注册成功了', error: false});
                }
            });
        }
    }
});



var obj={
    1:"sdsd",
    2:'sdsds',
    3:'sdsd'
};



