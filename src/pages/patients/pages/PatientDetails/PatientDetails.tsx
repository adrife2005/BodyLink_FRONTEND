import { useParams } from 'react-router'
import patients from '../Patients/components/PatientsTable/patients-table.json'

export const PatientDetails = () => {
  const { id } = useParams()

  const findPatient = patients.find(({ name }) => name === id)

  console.log(findPatient)

  return <h1>Patient Details</h1>
}
