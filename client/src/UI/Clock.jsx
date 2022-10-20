import React, { useEffect, useState } from 'react'
import './Clock.css'
const Clock = () => {

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  let interval;

  const countDown = () => {
    const destination = new Date('December 20, 2022')
    interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = destination - now
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
      const seconds = Math.floor(difference % (1000 * 60) / (1000))

      if (destination < 0) clearInterval(interval.current)
      else {
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    countDown()
  })

  return <div className="clock_wrapper d-flex align-item-center gap-5">
    <div className="clock_data d-flex align-item-center gap-3">
      <div className='text-center'>
        <h1 className='text-white fs-3 mb-2'>{days} </h1>
        <h5 className='text-white fs-6'>Ngày</h5>
      </div>
      <span className='text-white fs-3'>:</span>
    </div>

    <div className="clock_data d-flex align-item-center gap-3">
      <div className='text-center'>
        <h1 className='text-white fs-3 mb-2'>{hours} </h1>
        <h5 className='text-white fs-6'>Giờ</h5>
      </div>
      <span className='text-white fs-3'>:</span>
    </div>

    <div className="clock_data d-flex align-item-center gap-3">
      <div className='text-center'>
        <h1 className='text-white fs-3 mb-2'>{minutes} </h1>
        <h5 className='text-white fs-6'>Phút</h5>
      </div>
      <span className='text-white fs-3'>:</span>
    </div>

    <div className="clock_data d-flex align-item-center gap-3">
      <div className='text-center'>
        <h1 className='text-white fs-3 mb-2'>{seconds} </h1>
        <h5 className='text-white fs-6'>Giây</h5>
      </div>
    </div>
  </div>
}

export default Clock