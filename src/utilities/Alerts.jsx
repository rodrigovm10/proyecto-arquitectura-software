import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export function basicAlert({ title, icon, text }) {
  Swal.fire({
    title: title,
    icon: icon,
    text: text
  })
}

export function DeleteAlert() {
  const navigate = useNavigate()

  Swal.fire({
    title: '¿Estás seguro de eliminar esta vacante?',
    text: '¡No podrás revertir esta acción!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar'
  }).then(result => {
    if (result.isConfirmed) {
      Swal.fire('Eliminada', 'Tu vacante ha sido eliminada.', 'success')
      navigate('/vacantes')
    }
  })
}
