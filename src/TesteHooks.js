import React, {useState, useEffect} from 'react';

export default function TesteHooks() {
   const [repositories, setRepositories] = useState([]);

   //function handleAddRepository(){
      //setRepositories([...repositories, {id: Math.random(), name: 'Novo repo'}]);
   //}

   useEffect(async ()=>{
      const response = await fetch('https://api.github.com/users/diego3g/repos')
      const data = await response.json();

      setRepositories(data);
   }, []); 
   

   return(
      <>
         <ul>
            {repositories.map(repo => (
               <li key={repo.id}>{repo.name}</li>
               <button>Favoritar</button>
            ))}
         </ul>
      </>
   );

}