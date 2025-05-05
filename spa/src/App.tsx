import { RouterProvider } from "react-router-dom"
import { router } from "./Router"

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex gap-4 text-blue-600">
        <a href="/login" className="hover:underline hover:text-blue-700">/login</a>
        <a href="/tasks" className="hover:underline hover:text-blue-700">/tasks</a>
      </div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
