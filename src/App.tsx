import { useReducer } from "react";
import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activityRedurcer";
import ActivityList from "./components/ActivityList";


export default function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);  
  return (
    <>
      <header className="bg-blue-950 py-5">
      <div className="max-w-4xl lg:mx-auto md:mx-6 flex justify-between">
      <h1 className="text-lg font-medium uppercase text-white text-center ml-4 md:ml-0">

          Contador de calorías
        </h1>
      </div>
      </header>
      <section className="bg-gray-100 py-20 px-5 justify-center items-center flex">
        <div className="max-w-4xl w-full max-auto">
          <Form 
            dispatch={dispatch}
          />
        </div>
      </section>
      <section className="bg-gray-100 p-5 mx-auto max-w-4xl">
        <ActivityList 
          activities={state.activities}
        />
      </section>
    </>
  )
}
