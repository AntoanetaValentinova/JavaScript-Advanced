function search() {
   let sum = 0;
   let search = document.getElementById('searchText').value;
   let towns = [...document.getElementsByTagName('li')].map(town => {
          if (town.textContent.includes(search)) {
             town.style.textDecoration='underline';
             town.style.fontWeight='bold';
             sum+=1;
          }
         });
   document.getElementById('result').textContent=`${sum} matches found`;
}
