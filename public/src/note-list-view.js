(function (exports) {

  function NoteListView (noteList = NoteList) {
    this.view = noteList;
  };

  NoteListView.prototype = {

    makeForm: function() {
      return [
        "<form>",
        "<input type='text'></input>",
        "<input type='submit'></input>",
        "</form>"
      ].join('');
    },

    returnHTML: function(){
      this.makeForm();
      var html = [];
      this.view.list.forEach(function(note){
        html.push("<ul><li>" + note.text + "</li></ul>")
      });
      return html.join('');
    }
  }

  exports.NoteListView = NoteListView
}) (this);