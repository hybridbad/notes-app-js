
// document.getElementById("app").innerHTML = "Howdy!";

(function(exports) {
  var noteListView;

  function NoteController(noteList = NoteList){
    this.noteList = noteList
    noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.add = function (text) {
    this.noteList.add(text);
  }

  NoteController.prototype.parseHTML = function () {
    var element = document.getElementById('app');
    element.innerHTML = noteListView.returnHTML();
  }

  exports.NoteController = NoteController;
})(this);

// controller = new NoteController(new NoteList());
// controller.add('Favourite drink: seltzer');
// controller.parseHTML();