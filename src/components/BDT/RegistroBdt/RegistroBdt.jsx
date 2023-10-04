import RegistroHabilidades from './RegistroHabilidades'
import RegistroSituacionActual from './RegistroSituacionActual'
import RegistroInfoPersonal from './RegistroInfoPersonal'

export default function RegistroBdt() {
    
  return (
    <div>
        <div>
        <RegistroInfoPersonal/>
        </div>
        <div>
        <RegistroHabilidades/>
        </div>
        <div>
        <RegistroSituacionActual/>
        </div>
    </div>
  )
}
