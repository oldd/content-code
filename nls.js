// my notes, ignore them 

function app_builder(injector) {
    return {
        add: function(a, b) {
            var lastResult = model.lastResult;
            var result = logic.add(a, b, lastResult);
            this.model.lastResult = result;
            this.view.render(result);
        }.bind(injector)
    };
}


var injector = {
    view: // a browser view object
    model: // a browser model
}