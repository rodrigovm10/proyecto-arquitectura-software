import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useManageVacantes } from './useManageVacantes'
import { useJobsApplications } from './useJobsApplications'

export function useAlerts() {
  const { deleteVacante, updateStatusVacante } = useManageVacantes()
  const { saveOportunidadesOnDataStore } = useJobsApplications()

  const navigate = useNavigate()
  const basicAlert = ({ title, icon, text }) => {
    Swal.fire({
      title: title,
      icon: icon,
      text: text
    })
  }
  const deleteAlert = ({ id }) => {
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
        deleteVacante(id)
        Swal.fire('Eliminada', 'Tu vacante ha sido eliminada.', 'success')
        navigate('/vacantes')
      }
    })
  }

  const updateNoVisibleAlert = ({ id, visible }) => {
    Swal.fire({
      title: '¿Estás seguro de dar de baja esta vacante?',
      text: 'Esta acción puede ser reversible, las vacantes dadas de baja apareceran en la sección de vacantes inactivas en su apartado de vacantes. Tenga en cuenta que esta vacante no podrá ser vista por los usuarios.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, dar de baja'
    }).then(result => {
      if (result.isConfirmed) {
        updateStatusVacante({ id, visible })
        Swal.fire('Dada de baja', 'Tu vacante ha sido dada de baja.', 'success')
        setTimeout(() => {
          navigate('/vacantes')
        }, 1000)
      }
    })
  }

  const updateVisibleAlert = ({ id, visible }) => {
    Swal.fire({
      title: '¿Estás seguro de dar de alta esta vacante?',
      text: 'Esta acción puede ser reversible, las vacantes dadas de alta apareceran en la sección de vacantes activas en su apartado de vacantes. Además de que esta vacante podrá ser vista por los usuarios.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, dar de alta'
    }).then(result => {
      if (result.isConfirmed) {
        updateStatusVacante({ id, visible })
        Swal.fire('Dada de alta', 'Tu vacante ha sido dada de alta.', 'success')
        setTimeout(() => {
          navigate('/vacantes')
        }, 1000)
      }
    })
  }

  const updateVacanteAlert = ({ id }) => {
    Swal.fire({
      title: 'Vacante actualizada',
      icon: 'success',
      text: 'La vacante ha sido actualizada'
    }).then(result => {
      if (result.isConfirmed) {
        navigate(`/vacantes/vacante/${id}`)
      }
    })
  }

  const applicationSubmissionAlert = ({ vacante }) => {
    Swal.fire({
      title: '¿Estás seguro de postularte a esta vacante?',
      text: 'Una vez postulado será avisado a la empresa en cuestión. Podrás ver esta y otras postulaciones en la sección de "Oportunidades laborales".',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, postularse'
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Postulado(a)', 'Has sido postulado(a) exitosamente.', 'success')
        saveOportunidadesOnDataStore({ vacante })
      }
    })
  }

  return { basicAlert, deleteAlert, updateAlert: updateNoVisibleAlert, updateVisibleAlert, updateVacanteAlert, applicationSubmissionAlert }
}
