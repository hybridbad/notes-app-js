
describe('note controller', function(){

  it('makes an isntance', function(){

      var noteController = new NoteController();
      assert.isTrue(noteController != undefined);

  });

  it('takes a note list', function(){

    var notelist = new NoteList();
    var noteController = new NoteController(notelist);

    assert.isTrue(noteController.noteList === notelist);
  });


  it('adds a note', function(){

    // create a fake note list without any note models etc
    // fake notelist only has a property of text unlike array etcetc
    function NoteListDouble() {};
    NoteListDouble.prototype.add = function (text) {
      this.text = text;
    };

    // pass in the fake notelist into a real notecontroller object
    var noteListDouble = new NoteListDouble();
    var noteController = new NoteController(noteListDouble);

    // noteList property in notecontroller is now the above notelistdouble
    // test that notecontroller add succesfully calls the notelistdouble add function
    noteController.add('Text');

    // check notecontroller notelist (which is now the note list double) text property to be
    // "text" as we did above
    assert.isTrue(noteController.noteList.text === 'Text');

  })

});
  