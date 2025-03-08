import { useReducer } from "react";
import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activityRedurcer";


export default function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  return (
    <>
      <header className="bg-blue-950 py-5">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-medium uppercase text-white">
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
    </>
  )
}
