describe('note controller', function(){

  it('creates instance of note controller with 1 note', function(){
    controller = new NoteController(new NoteList());
    controller.add('Test 1')
  
    assert.isTrue(controller.noteList.list[0].text === 'Test 1');
  })

})