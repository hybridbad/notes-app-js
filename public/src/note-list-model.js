(function(exports){
  function NoteList () {
    this.list = [];
  };

  NoteList.prototype = {

    addNote: function(note = Note){
      this.list.push(note);
    },

    add: function(text){
      this.list.push(new Note(text));
    },

    returnList: function(){
      return this.list;
    }

  }

  exports.NoteList = NoteList;
})(this);
