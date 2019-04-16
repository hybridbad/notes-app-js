
describe('note list model', function(){

  it('creates a list array with one note', function(){
    var list = new NoteList();
    list.add('Note 1');
  
    assert.isTrue(list.listArray[0].text === 'Note 1');
  });

  it('creates a list array with two notes', function(){
    var list = new NoteList();
    list.add('Buy Eggs');
    list.add('Bacon');
  
    assert.isTrue(list.listArray[0].text === 'Buy Eggs');
    assert.isTrue(list.listArray[1].text === 'Bacon');
  });

  it('returns the list contents', function(){
    var list = new NoteList();
    list.add('Buy Eggs');
    list.add('Bacon');
    testThis = list.returnList();
    assert.isTrue(testThis[0].text === 'Buy Eggs');
    assert.isTrue(testThis[1].text === 'Bacon');
  });


});

