(function (exports) {

  function ListView (notesList) {
    this.listModel = notesList;
  };

  ListView.prototype.returnHTML = function () {
    var html = [];
    this.listModel.listArray.forEach(function(note){
      html.push("<ul><li>" + note.text + "</li></ul>")
    });
    return html.join('');
  }

  exports.ListView = ListView
}) (this);