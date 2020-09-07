const router = express.Router();
const Stock = require('../models/Stock');


router.get('/', function(req, res) {
    Stock.find(function(err, list){
        if(req.accepts('json')) {
            if(err) {
                return res.json(500, {
                    message: 'Error getting router.'
                });
            }
            return res.json(list);
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            return res.render('users/index', {users: users});
        }
    });
});

router.post('/', function(req, res) {
    const user = new Model({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });
    user.save(function(err, user){
        if(req.accepts('json')) {
            if(err) {
                return res.json(500, {
                    message: 'Error saving user',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: user._id
            });
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            return res.render('users/edit', {user: user});
        }
    });
});

router.get('/:id', function(req, res) {
    const id = req.params.id;
    Stock.findOne({_id: id}, function(err, user){
        if(req.accepts('json')) {
            if(err) {
                return res.json(500, {
                    message: 'Error getting user.'
                });
            }
            if(!user) {
                return res.json(404, {
                    message: 'No such user'
                });
            }
            return res.json(user);
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            if(!user) {
                return res.end('No such user');
            }
            return res.render('users/edit', {user: user, flash: 'Created.'});
        }
    });
});

router.put('/:id', function(req, res) {
    const id = req.params.id;
    Stock.findOne({_id: id}, function(err, user){
        if(req.accepts('json')) {
            if(err) {
                return res.json(500, {
                    message: 'Error saving user',
                    error: err
                });
            }
            if(!user) {
                return res.json(404, {
                    message: 'No such user'
                });
            }
            user.name = req.body.name ? req.body.name : user.name;
            user.email = req.body.email ? req.body.email : user.email;
            user.age = req.body.age ? req.body.age : user.age;
            user.save(function(err, user){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting user.'
                    });
                }
                if(!user) {
                    return res.json(404, {
                        message: 'No such user'
                    });
                }
                return res.json(user);
            });
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            if(!user) {
                return res.end('No such user');
            }
            user.name = req.body.name ? req.body.name : user.name;
            user.email = req.body.email ? req.body.email : user.email;
            user.age = req.body.age ? req.body.age : user.age;
            user.save(function(err, user){
                if(err) {
                    return res.send('500: Internal Server Error', 500);
                }
                if(!user) {
                    return res.end('No such user');
                }
                return res.render('users/edit', {user: user, flash: 'Saved.'});
            });
        }
    });
});

router.delete('/:id', function(req, res) {
    const id = req.params.id;
    Stock.findOne({_id: id}, function(err, user){
        if(req.accepts('json')) {
            if(err) {
                return res.json(500, {
                    message: 'Error getting user.'
                });
            }
            if(!user) {
                return res.json(404, {
                    message: 'No such user'
                });
            }
            return res.json(user);
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            if(!user) {
                return res.end('No such user');
            }
            return res.render('index', {flash: 'Item deleted.'});
        }
    });
});