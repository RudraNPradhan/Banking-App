'use client'
import CountUp from "react-countup"

const AnimatedCounter = ({amount}: { amount: number }) => {
    return (
        <div className="w-full">
            <CountUp 
                prefix="₹"
                decimal="."
                end={amount}
            />
        </div>
    )
}


export default AnimatedCounter




