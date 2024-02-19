import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const PERIODS = {
  Manhã: { start: 6 * 60, end: 12 * 60 },
  Tarde: { start: 12 * 60 + 1, end: 18 * 60 },
  Noite: { start: 18 * 60 + 1, end: 23 * 60 + 59 },
}

const convertHourToMinutes = (hour) => {
  const [h, m] = hour.split('h')
  return parseInt(h) * 60 + parseInt(m)
}

const isWithinPeriod = (startTime, endTime, period) => {
  const { start, end } = PERIODS[period] || {}
  return startTime >= start && endTime <= end
}

export const List = () => {
  const [searchParams] = useSearchParams()
  const periodo = searchParams.get('filter')
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://test-frontend-developer.s3.amazonaws.com/data/locations.json',
        )
        const locationsData = response.data.locations || []
        const filteredLocations = locationsData.filter((location) => {
          const schedules = location.schedules || []
          return schedules.some((schedule) => {
            const [start, end] = schedule.hour
              .split(' às ')
              .map(convertHourToMinutes)
            return isWithinPeriod(start, end, periodo)
          })
        })
        setLocations(filteredLocations)
      } catch (error) {
        console.error('Erro ao buscar dados da API', error)
      }
    }

    fetchData()
  }, [periodo])

  return (
    <div>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <strong>{location.title}</strong>
            <p>{location.content}</p>
            {location.schedules.map((schedule, index) => (
              <div key={`${location.id}-${index}`}>
                <strong>Dias:</strong> {schedule.weekdays}
                <br />
                <strong>Horas:</strong> {schedule.hour}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}
