import { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { type Activity } from "../types";
import { categories } from "../data/categories";
import { ActivityActions } from "../reducers/activityRedurcer";
import { INITIAL_STATE } from "../constants";

type formType = {
    dispatch: Dispatch<ActivityActions>;
}



export default function Form({dispatch} : formType) {

    const [activity, setActivity] = useState<Activity>(INITIAL_STATE);

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumber = ['category', 'calories'].includes(e.target.id);    
        setActivity({
        ...activity,
            [e.target.id]: isNumber ? +e.target.value : e.target.value,
        });
    }

    const isValid = () => {
        const {name, category, calories} = activity;
        return name.trim() !== '' && category !== 0 && calories > 0;
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({
            type: 'save-activity',
            payload: {newActivity: activity},
        });

        setActivity({...INITIAL_STATE, id: uuidv4()});
    }
  return (  
    <>
        <form className="space-y-4 bg-white p-10 rounded-lg shadow-xl" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category">Categoría:</label>
                <div className="relative w-full">
                    <select id="category" className="appearance-none w-full px-4 py-3 border 
                    border-gray-300 rounded-lg shadow-sm text-gray-700 
                    focus:outline-none" 
                    value={activity.category}
                    onChange={handleChange}
                    >
                        <option value="0">Selecciona una categoría</option>
                        {categories.map((category) => (
                            <option key={category.id} 
                                value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name">Actividad:</label>
                <div className="relative w-full">
                    <input type="text" id="name" 
                        onChange={handleChange}
                        placeholder="Ejemplo: Comida, Jugo de naranja, Enslada, etc."
                        className="appearance-none w-full 
                        px-4 py-3 border border-gray-300 
                        rounded-lg shadow-sm text-gray-700 
                        focus:outline-none" 
                      value={activity.name}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories">Calorías:</label>
                <div className="relative w-full">
                    <input type="number" id="calories" placeholder="Ejemplo: Comida, Jugo de naranja, Enslada, etc."
                        className="appearance-none w-full 
                        px-4 py-3 border border-gray-300 
                        rounded-lg shadow-sm text-gray-700 
                        focus:outline-none" 
                        value={activity.calories}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <input type="submit" value={activity.category === 1 ? 'Guardar comida' : 'Guardar ejercicio'} 
                className="w-full rounded-lg py-3 bg-blue-950 text-white
                font-normal uppercase hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed" 
                disabled={!isValid()}
            />
        </ form>
    </>
  )
}
