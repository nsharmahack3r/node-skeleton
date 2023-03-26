function profile(req, res){
    res.send('this is /user/profile');
}

function edit(req, res){
    res.send('this is /user/edit');
}

module.exports = {
    profile,
    edit
}