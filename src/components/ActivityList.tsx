import { useMemo } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";


type ActivityListProps = {
    activities: Activity[];
};

export default function ActivityList({ activities }: ActivityListProps) {
    const categoryName = useMemo(() => (category : Activity['category']) => categories.map(cat => cat.id === category ? cat.name : '')
    , [activities])
    return (
        <>
            <h2 className="text-4xl font-bold text-slate-500 text-center pb-5">Comida y actividades</h2>
                {activities.map((activity) => (
                    <div key={activity.id} className="px-5 py-10 bg-white flex justify-between rounded-lg shadow-xl mt-10">
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-12 -left-8 px-10 py-2 text-white uppercase font-bold rounded-lg ${activity.category === 1 ? 'bg-red-600' : 'bg-green_sea'}`}>{categoryName(+activity.category)}</p>
                            <p className="text-2xl font-bold pt-5">{activity.name}</p>
                            <p className="font-black text-4xl text-blue-900">
                                {activity.calories}{' '}
                                <span>Calorías</span>
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                ))}
        </>
    );
}
