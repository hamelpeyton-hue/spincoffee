const classics = [
 ['Latte',5],['Cappuccino',5],['Mocha',5],['White mocha',5],['Chai latte',5.5],['Matcha',5.5],['Cortado',4],['Traditional macchiato',4],['Cold brew',4.5],['Nitro cold brew',4.5],['Espresso',3,'Double shots'],['Americano',4],['Pourover',4],['Tea',4],['Hot chocolate',4],['Turkish coffee',5]
];
const specials = [
 ['Cobo-chico',5.5],['Cafe cola',5.5],['Strawberry Fields',5.5,'Matcha'],['In Bloom',5.5,'Matcha, lavender'],['Green Eye',5.5,'Matcha, espresso'],['Black Tie',5.5,'Thai chai, espresso'],['Dirty chai',5.5],['Marocchino',5.5,'Hot · Nutella, espresso'],['Aerocano',5],['Bowl of cereal',5]
];
function fillMenu(id, items) {
 const list=document.getElementById(id);
 items.forEach(([name,price,detail])=>{
  const row=document.createElement('div');row.className='drink';
  const label=document.createElement('div');const title=document.createElement('strong');title.textContent=name;label.append(title);
  if(detail){const note=document.createElement('small');note.textContent=detail;label.append(note)}
  const amount=document.createElement('span');amount.className='price';amount.textContent='$'+price.toFixed(2);row.append(label,amount);list.append(row);
 });
}
fillMenu('classic-list',classics);fillMenu('special-list',specials);
const tabs=[...document.querySelectorAll('[role="tab"]')];
function selectTab(selected,focus=false){tabs.forEach(tab=>{const active=tab===selected;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;document.getElementById(tab.getAttribute('aria-controls')).hidden=!active});if(focus)selected.focus()}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let target;if(event.key==='ArrowRight')target=(index+1)%tabs.length;if(event.key==='ArrowLeft')target=(index+tabs.length-1)%tabs.length;if(event.key==='Home')target=0;if(event.key==='End')target=tabs.length-1;if(target!==undefined){event.preventDefault();selectTab(tabs[target],true)}})});
const toggle=document.querySelector('.nav-toggle'),nav=document.getElementById('navigation');
function closeNavigation(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')}
toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNavigation));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeNavigation();toggle.focus()}});
document.getElementById('year').textContent=new Date().getFullYear();
