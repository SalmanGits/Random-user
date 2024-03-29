const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItem = [];
fetchData()
filter.addEventListener('input',(e)=>{
    filterData(e.target.value)
})
async function fetchData() {
  const response = await fetch("https://randomuser.me/api/?results=50");
  const {results}  = await response.json();
 
  result.textContent = "";
  results.forEach(user=>{
      const li = document.createElement('li')
      listItem.push(li)
      li.innerHTML = `
      <img src = "${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
      <h4>${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city} ${user.location.country}</p>
      `
result.appendChild(li)
  })
}
function filterData(searchTerm){
    listItem.forEach(item=>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }
        else{
            item.classList.add('hide')
        }
    })
}
