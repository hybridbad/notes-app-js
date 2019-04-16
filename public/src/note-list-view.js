(function (exports) {

  function NoteListView (noteList = NoteList) {
    this.view = noteList;
  };

  NoteListView.prototype.returnHTML = function () {
    var html = [];
    this.view.list.forEach(function(note){
      html.push("<ul><li>" + note.text + "</li></ul>")
    });
    return html.join('');
  }

  exports.NoteListView = NoteListView
}) (this);