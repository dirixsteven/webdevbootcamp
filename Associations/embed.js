var mongoose = require("mongoose");  
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });

// post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// user - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);
var Post = mongoose.model("Post", postSchema);


/*var newUser = new User({
    email: "charlie@brown.edu",
    name: "Charlie Brown"
});
newUser.save(function(err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
});*/

/*var newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious"
});

newPost.save(function(err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});*/

/*var newUser = new User({
    email: "hermione@hogwarts.edu",
    name: "Hermione Granger"
});

newUser.posts.push({
    title: "How to bre polyjuice potion",
    content: "Just kidding. Go to potions class to learn it!"
});

newUser.save(function(err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
})*/

User.findOne({name: "Hermione Granger"}, function(err, user) {
    if(err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "3 things i really hate",
            content: "Voldemort, Voldemort, Voldemort"
        });
        user.save(function(err, user) {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});