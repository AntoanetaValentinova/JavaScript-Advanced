function solve() {
  let text = document.getElementById('text').value.split(' ');
  let typeCase = document.getElementById('naming-convention').value;

  let result = '';
  switch (typeCase) {
    case 'Camel Case':
      let firstWord = text[0];
      result = firstWord.toLowerCase();
      text.slice(1).map(e=>result += e[0].toUpperCase() + e.slice(1).toLowerCase());
      break;
    case 'Pascal Case':
      text.map(e=>result += e[0].toUpperCase() + e.slice(1).toLowerCase())
       break;
    default: result = 'Error!';
      break;
  }
  document.getElementById('result').textContent = result;
}
