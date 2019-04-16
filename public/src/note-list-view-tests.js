describe('list view model', function(){
  
  it('makes an instance of listview and takes a note list', function(){
      var notesList = new NoteList();
      notesList.add('Buy Eggs');
      notesList.add('Bacon');
    
      var listView = new NoteListView(notesList);
    
      assert.isTrue(listView.view.list[0].text === 'Buy Eggs');
    });
    
  it('returns html using note list', function(){
      var noteslist = new NoteList();
      noteslist.add('Buy Eggs');
      noteslist.add('Bacon');

      var listView = new NoteListView(noteslist);

      assert.isTrue(listView.returnHTML() === "<ul><li>Buy Eggs</li></ul><ul><li>Bacon</li></ul>");
  });

});