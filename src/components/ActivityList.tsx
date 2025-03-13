import { useMemo, Dispatch } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { ActivityActions } from "../reducers/activityRedurcer";


type ActivityListProps = {
    activities: Activity[];
    dispatch: Dispatch<ActivityActions>
};

export default function ActivityList({ activities, dispatch }: ActivityListProps) {
    const categoryName = useMemo(() => (category : Activity['category']) => categories.map(cat => cat.id === category ? cat.name : '')
    , [activities])

    const isEmptyActivity = useMemo(() => activities.length === 0, [activities])
    return (
        <>
            <h2 className="text-4xl font-bold text-slate-500 text-center pb-5">Comida y actividades</h2>
                {isEmptyActivity ? <p className="text-center font-semibold text-blue-950">No hay actividades </p> :
                    activities.map((activity) => (
                        <div key={activity.id} className="px-5 py-10 bg-white flex justify-between rounded-lg shadow-xl mt-10">
                            <div className="space-y-2 relative">
                                <p className={`absolute -top-12 -left-8 px-10 py-2 text-white uppercase font-bold rounded-lg ${activity.category === 1 ? 'bg-red-800' : 'bg-green_sea'}`}>{categoryName(+activity.category)}</p>
                                <p className="text-2xl font-bold pt-5">{activity.name}</p>
                                <p className="font-black text-4xl text-blue-900">
                                    {activity.calories}{' '}
                                    <span>Calorías</span>
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <button
                                    onClick={() => dispatch({type: "set-activityId", payload: {
                                        id: activity.id
                                    }})}
                                    className="relative group flex items-center justify-center 
                                    rounded-md border border-blue-950 bg-blue-950 px-2 py-2
                                    text-white transition duration-200 ease-in-out hover:bg-blue-900 
                                    hover:shadow-lg active:scale-95"
                                    >
                                    <PencilIcon
                                        className="h-6 w-6 text-white"
                                    />
                                    {/* Tooltip */}
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                                        Actualizar
                                    </span>
                                </button>
                                <button
                                    onClick={() => dispatch({ type: "delete-activity", payload: { id: activity.id } })}
                                    className="relative group flex items-center justify-center 
                                    rounded-md border border-red-800 bg-red-800 px-2 py-2
                                    text-white transition duration-200 ease-in-out hover:bg-red-700 
                                    hover:shadow-lg active:scale-95">
                                    <TrashIcon className="h-6 w-6 text-white" />

                                    {/* Tooltip */}
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                                        Eliminar
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
        </>
    );
}
