

(function(exports) {
  var noteListView;

  function NoteController(noteList = NoteList){
    this.noteList = noteList
    noteListView = new NoteListView(noteList);
  }

  NoteController.prototype = {
    add: function(text) {
      this.noteList.add(text);
    },

    render: function (){
      var element = document.getElementById('app');
      element.innerHTML = noteListView.returnHTML();
    }
  }

  exports.NoteController = NoteController;
})(this);
