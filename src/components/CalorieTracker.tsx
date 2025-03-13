import { useMemo } from "react"
import type { Activity } from "../types"
import CaloriesDisplay from "./CaloriesDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps) {

  const caloriesCosumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total +
  activity.calories : total, 0), [activities])

  const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total +
  activity.calories : total, 0), [activities])

  const newCalories = useMemo(() => caloriesCosumed - caloriesBurned , [activities])
  return (
    <>
      <h2 className="text-white text-4xl font-black text-center">Resumen de calorías</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            {/* <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
              <span className="font-black text-6xl text-orange">{caloriesCosumed}</span>
              Consumidas
            </p> */}
            <CaloriesDisplay 
              calories={caloriesCosumed}
              text="Consumidas"
            />
            <CaloriesDisplay 
              calories={caloriesBurned}
              text="Ejercicio"
            />
            <CaloriesDisplay 
              calories={newCalories}
              text="Diferencia"
            />
      </div>
    </>
  )
}
