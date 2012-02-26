function HomeController() {

    this.index = function(req, res, next) {
        //response.send("Index!");
        res.render('home/index', {});
    }
    
    this.about = function(req, res, next) {
        res.render('home/about', { title : "About" });
    }
};

exports.HomeController = HomeController;
