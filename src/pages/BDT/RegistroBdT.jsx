import React, {useState, useEffect} from "react";
import { Auth} from "aws-amplify";
import RegistrarBdt from "../../components/BDT/FormulariosResgitroBdt/RegistrarBdt";
import { Navigate } from "react-router-dom";
import {NombreGrupo} from '../../hooks/NombreGrupo';
import { DataStore } from '@aws-amplify/datastore';
import { BDT } from '../../models'


function RegistroBdT() {
    const [session, setSession] = useState("");
    const [idOwner, setIdOwner] = useState("");
    const [email, setEmail] = useState("")
    const [nombreGrupo, setNombreGrupo] = useState("");
    const [existeBde, setExisteBde] = useState("")

    useEffect(() => {
        async function getData() { 
            await Auth.currentAuthenticatedUser()
                .then(async (data) => {
                
                    await setSession(true);
                    await setIdOwner(data.username);
                    await setEmail(data.attributes.email);
                    await NombreGrupo(data.username, "trabajador", setNombreGrupo);
                    const sub =  DataStore.observeQuery(BDT,c => c.correo.eq(data.attributes.email), { limit: 1})
                    .subscribe(({ items }) => {  setExisteBde(items.length);});
                    return () => {
                      sub.unsubscribe();
                    };
                    
                })
            .catch((err) => { setSession(false); console.log(err);});
        }
        getData();
    }, []);
    


  
    return ( 
        <div>
            {session ? (
                <>
                {nombreGrupo === "trabajador" ? (
                    existeBde === 1 ?
                        <Navigate to="/inicio-bdt"/>
                    : existeBde === 0 ?
                    <>
                        
                        <RegistrarBdt idUser={idOwner} email={email}/>
                    </> 
                    : <></>
  
                ) : nombreGrupo === "empresa" ? (<Navigate to="/login-empresa"/>)
                    : (<></>)
                }
                </>
            ) : session === false ? (<Navigate to="/login-bdt"/>)
            :(<></>)
            }
         </div>
           
     );
}

export default RegistroBdT;
