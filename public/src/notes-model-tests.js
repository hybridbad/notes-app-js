

describe('notes-model', function(){

  it('creates instance of note with text as argument', function(){
    var note = new Note('My favourite language is Javascript');

    assert.isTrue(note.text === "My favourite language is Javascript");
  });

  it('returns text content when function called', function(){
    var note = new Note('My favourite language is Javascript');

    assert.isTrue(note.print() === "My favourite language is Javascript");
  });

});
