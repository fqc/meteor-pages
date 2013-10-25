Package.describe({
  summary: "State of the art, out of the box Meteor pagination"
});

Package.on_use(function(api){
    api.use([
        "deps",
        "templating",
        "underscore",
        "coffeescript",
        "handlebars",
        "spark",
        "session"
    ], "client");

    api.use([
        "deps",
        "underscore",
        "coffeescript"
    ], "server");

    api.add_files([
        "templates.html",
        "client/main.coffee",
        "loader.gif"
    ], "client");
    /*
    api.export([
        "_Paginate",
        "_PaginateInstances"
    ], ["client", "server"]);
    */
    api.add_files("paginate.coffee", ["client", "server"]);
});