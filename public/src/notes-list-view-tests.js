describe('list view model', function(){
  
  it('makes an instance of listview and takes a note list', function(){
      var noteslist = new NoteList();
      noteslist.add('Buy Eggs');
      noteslist.add('Bacon');
    
      var listView = new ListView(noteslist);
    
      assert.isTrue(listView.listModel.listArray[0].text === 'Buy Eggs');
    });
    
  it('returns html using note list', function(){
      var noteslist = new NoteList();
      noteslist.add('Buy Eggs');
      noteslist.add('Bacon');

      var listView = new ListView(noteslist);

      assert.isTrue(listView.returnHTML() === "<ul><li>Buy Eggs</li></ul><ul><li>Bacon</li></ul>");
  });

});