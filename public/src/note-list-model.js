(function(exports){
  function NoteList () {
    this.list = [];
  };

  NoteList.prototype.add = function(text) {
    this.list.push(new Note(text));
  };

  NoteList.prototype.returnList = function() {
    return this.list
  };

  exports.NoteList = NoteList;
})(this);
