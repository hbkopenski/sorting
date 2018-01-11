describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with one element', function(){
    expect( bubbleSort(['a']) ).toEqual( ['a'] );
  });
  it('handles an array with multiple integer elements', function(){
    expect( bubbleSort([5,1,2,4,3]) ).toEqual( [1,2,3,4,5] );
  });
  it('handles an array with multiple string elements', function(){
    expect( bubbleSort(['a', 'c', 'd', 'b']) ).toEqual( ['a', 'b', 'c', 'd'] );
  });
  it('works with negative numbers', function(){
    expect( bubbleSort([-3, -4, -1, -2, -5]) ).toEqual( [-1, -2, -3, -4, -5] );
  });
});
