import { useState } from "react";
import CreateTask from "./CreateTask";
import ShowTasks from "./ShowTasks";

function Tasks () {
    const [reload, setReload] = useState<boolean>(false);

    return (
        <div className="px-8 py-4 rounded-md bg-indigo-50 min-w-sm flex flex-col gap-3">
            <p className="text-lg font-semibold text-center">Tasks</p>
            <CreateTask setReload={setReload} />
            <ShowTasks reload={reload} setReload={setReload} />
        </div>
    )
}

export default Tasks;