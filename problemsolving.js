const polapan=[
   { name:'sohel',job:'sorkari',salary:20000},
   { name:'sagor',job:'besorkari',salary:40000},
   { name:'rana',job:'sorkari',salary:17000},
   { name:'tashjid',job:'besorkari',salary:30000},
]
const Vaggoban=polapan.filter(p=>p.job==='sorkari' && p.salary >=20000  || p.job==='besorkari' && p.salary >=35000)

const lotari=Math.floor(Math.random()*Vaggoban.length);
const finalSelect=Vaggoban[lotari].name;
console.log(finalSelect);