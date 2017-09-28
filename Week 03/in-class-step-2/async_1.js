var async_model_1 = {
    db: {},
    id: 0,
    create: function(_new_obj, cb) {
        var new_obj = Object.assign({}, _new_obj);
        new_obj.id = this.id;
        this.db[this.id] = new_obj;
        this.id++;
        cb(new_obj.id);
    },
    read: function(id, cb) {
        cb(this.db[id]);
    }
}

var new_thing_to_save = {samuel: 'hungry'};

// save object
async_model_1.create(new_thing_to_save, function(id) {
    async_model_1.read(id, function(obj) {
        console.log(obj);
    });
})
// retrieve object
// console log object


