import React, { useEffect} from 'react'
import Link from 'react-router-dom'
import { BsBagCheckFill } from 'react-icons/bs'

import { runConfetti } from '../hooks/runConfetti'

const Success = () => {

    useEffect(() => {
        localStorage.clear()
        runConfetti()
    }, [])

    return (
    <div className="w-full bg-background">
        <div className="success">
            <span><BsBagCheckFill /></span>
            <h2>Thank you for your order!</h2>
            <p>Check your email inbox for the receipt.</p>
            <p>
                If you have any questions, please email
                <a className="email" href="mailto:order@example.com">order@example.com</a>
            </p>
            <Link href="/">
                <button type="button" width="300px" className="btn">
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success