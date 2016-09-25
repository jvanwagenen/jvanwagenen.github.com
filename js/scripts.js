function changeWords(){
  var firstWords = [
    ['modern'],
    ['mythol','ogy'],
    ['mitol','ogia'],
    ['modern','a']
  ];

  var moreWords = [
    ['material', 'ity', 'ità'],
    ['possibil', 'ity', 'ità', 'idad'],
    ['celebr', 'ity', 'ità'],
    ['sublim', 'ity', 'ità', 'idad'],
    ['normal', 'ity', 'ità'],
    ['conform', 'ity', 'ità'],
    ['visibil', 'ity', 'ità'],
    ['plural', 'ity', 'ità', 'idad'],
    ['individual', 'ity', 'ità'],
    ['curios', 'ity', 'ità', 'idad'],
    ['modern', 'ity', 'ità'],
    ['fractal', 'idad', 'ity'],
    ['infin', 'ity', 'ità', 'idad'],
    ['real','ism', 'ismo'],
    ['modern','ism', 'ismo'],
    ['postmodern','ism', 'ismo'],
    ['capital','ism', 'ismo'],
    ['social','ism', 'ismo'],
    ['anarch','ism', 'ismo']
  ];

  var clock = document.getElementById('clock');
  var left = clock.querySelector('#left');
  var right = clock.querySelector('#right');

  var flatPairs = moreWords.sort(randomSort).map(function(wordGroup){
    var stem = wordGroup.shift();
    var pairs = wordGroup.map(function(ending){
      return [stem, ending];
    });
    return pairs;
  }).reduce(function(previous,current){
    current.forEach(function(pair){
      previous.push(pair);
    });
    return previous;
  },[]);

  var allPairs = firstWords.concat(flatPairs);
  var counter = 0;

  function setWord(words){
    if(words[0]){
      left.textContent = words[0];
    } else {
      left.textContent = '';
    }
    if(words[1]){
      right.textContent = words[1];
    } else {
      right.textContent = '';
    }
  }

  function randomSort(){
    return Math.random() - 0.5;
  }

  return function(){
    setWord(allPairs[counter]);
    counter = (counter + 1) % allPairs.length;
  }

}
