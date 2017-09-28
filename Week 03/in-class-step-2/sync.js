var sync_model = {
    db: {},
    id: 0,
    create: function(_new_obj) {
        var new_obj = Object.assign({}, _new_obj);
        new_obj.id = this.id;
        this.db[this.id] = new_obj;
        this.id++;
        return new_obj.id;
    },
    read: function(id) {
        return this.db[id];
    }
}

var new_thing_to_save = {samuel: 'hungry'};
var samuel_id = sync_model.create(new_thing_to_save);

var samuel = sync_model.read(samuel_id);

console.log(samuel);