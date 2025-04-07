import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];


  const domainList = document.getElementById("domain-list")

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domain = pronoun[i] + adj[j] + noun[k] + ".com";
        
        let li = document.createElement("li");
        li.textContent = (i * adj.length * noun.length + j * noun.length + k + 1) + ". " + domain;
        domainList.appendChild(li);
        
        console.log((i * adj.length * noun.length + j * noun.length + k + 1) + domain);
      }
    }
  }
};

