var async_model_1 = {
    db: {},
    id: 0,
    create: function(_new_obj, cb) {
        var err = false;
        var new_obj = Object.assign({}, _new_obj);
        new_obj.id = this.id;
        this.db[this.id] = new_obj;
        this.id++;
        cb(err, new_obj.id);
    },
    read: function(id, cb) {
        if (this.db[id]) {
            cb(false, this.db[id]);
        } else {
            cb('object dont exist');
        }
    }
}

var new_thing_to_save = {samuel: 'hungry'};

// save object
async_model_1.create(new_thing_to_save, function(err, id) {
    if (err) {
        console.log(err);
    } else {
        async_model_1.read(id, function(err, obj) {
            if (err) {
                console.log(err);
            } else {
                console.log(obj);
            };
        });
    }
})

async_model_1.create(new_thing_to_save, function(err, id) {
    if (err) {
        console.log(err);
    } else {
        async_model_1.read(4, function(err, obj) {
            if (err) {
                console.log(err);
            } else {
                console.log(obj);
            };
        });
    }
})
// retrieve object
// console log object


