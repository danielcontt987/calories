import { useEffect, useMemo, useReducer } from "react";
import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activityRedurcer";
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";


export default function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);  

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  },[state.activities])

  const canResetApp = () => useMemo(() => state.activities.length, [state.activities])
  return (
    <>
      <header className="bg-blue-950 py-5">
      <div className="max-w-4xl lg:mx-auto md:mx-6 flex justify-between items-center">
        <h1 className="text-lg font-medium uppercase text-white text-center ml-4 md:ml-0">
          Contador de calorías
        </h1>
        <button className="bg-yellow-400 text-black 
            px-6 py-2 rounded-lg uppercase font-medium
            disabled:opacity-10 disabled:cursor-not-allowed
          hover:bg-yellow-300 transition duration-300" disabled={!canResetApp()}
          onClick={() => dispatch({type: 'reset-app'})}
          >
          Reiniciar app
        </button>
      </div>
      </header>
      <section className="bg-gray-100 py-20 px-5 justify-center items-center flex">
        <div className="max-w-4xl w-full max-auto">
          <Form 
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>
      <section className="bg-green_sea py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker 
            activities={state.activities}
          />
        </div>
      </section>
      <section className="bg-gray-100 p-5 mx-auto max-w-4xl">
        <ActivityList 
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}
