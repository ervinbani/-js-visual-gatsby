/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla
 festa.*/

 //creo una lista di oggetti, ogni oggetto contiene le info degli invitati
 //nome, cognome

 var invitato1= {
   "nome": "alessandro",
   "cognome": "delpiero",
   "sesso": "m"
 }
 var invitato2= {
   "nome": "gigi",
   "cognome": "bufon",
   "sesso": "m"

 }

 var invitato3= {
   "nome": "alex",
   "cognome": "zanardi",
   "sesso": "m"

 }
 var invitato4= {
   "nome": "mario",
   "cognome": "balotelli",
   "sesso": "m"
 }
 var invitato5= {
   "nome": "maria",
   "cognome": "balotelli",
   "sesso": "f"
 }


//creo un array dove memorizzare i dati degli invitati
var listainvitati=[invitato1, invitato2, invitato3, invitato4,invitato4];
console.log(listainvitati);

var lista=document.getElementById("lista-invitati");

for(var i=0;i<listainvitati.length;i++){
  lista.innerHTML +="<li class='invitato'>" +  listainvitati[i].nome + "</li>"

}
var cerca = document.getElementById('cerca');
cerca.addEventListener('click',findInvitato);

function findInvitato(){
  var bool=false;
  var ricercato = document.getElementById('input').value;
  // console.log(ricercato.value);
  var lis = document.getElementById('lista-invitati').childNodes;
  for (var i = 0; i < lis.length; i++) {
    lis[i].className = "";
    var ris = lis[i].innerHTML.toLowerCase().search(ricercato.toLowerCase());
    if (ris >= 0){
      lis[i].className = "admitted";
      bool=true;
    }
  }
   if(bool==false){
     alert("non puoi entrare, il tuo nome non e' presente");
 }

}
