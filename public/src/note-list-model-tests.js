
describe('note list model', function(){

  it('creates a list array with one note', function(){
    var noteList = new NoteList();
    noteList.add('Note 1');
    
    assert.isTrue(noteList.list[0].text === 'Note 1');
  });

  it('creates a list array with two notes', function(){
    var noteList = new NoteList();
    noteList.add('Buy Eggs');
    noteList.add('Bacon');
  
    assert.isTrue(noteList.list[0].text === 'Buy Eggs');
    assert.isTrue(noteList.list[1].text === 'Bacon');
  });

  it('returns the list contents', function(){
    var noteList = new NoteList();
    noteList.add('Buy Eggs');
    noteList.add('Bacon');
    testThis = noteList.returnList();
    assert.isTrue(testThis[0].text === 'Buy Eggs');
    assert.isTrue(testThis[1].text === 'Bacon');
  });


});

