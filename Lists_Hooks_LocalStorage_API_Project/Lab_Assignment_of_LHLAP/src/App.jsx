import Task_1_List_Exercise from './Lists_Assignment_Task/Task_1_List_Exercise'
import Task_2_List_Exercise from './Lists_Assignment_Task/Task_2_List_Exercise'
import Task_1_Usestate_Hoooks from './Hooks/Task_1_Usestate_Hooks'
import Task_2_UseEffect_Hooks from './Hooks/Task_2_UseEffect_Hooks'
import Components from './Hooks/Task-3_Redux-Toolkit/Components'
import UseRef from './Hooks/Task_4_UseRef/UseRef'
import CRUD from './LocalStorage/CRUD'
import DataFetcher from './API_Project/LifeCycleMethod'

function App() {

  return (
    <>
        <h1>Task - 1 Assignment of LHLAP</h1>
        <Task_1_List_Exercise /> 

        <h1>Task - 2 Assignment of LHLAP</h1>
        <Task_2_List_Exercise />

        <h1>UseState Hooks</h1>
        <Task_1_Usestate_Hoooks />

        <h1>UseEffect Hooks</h1>
        <Task_2_UseEffect_Hooks />

        <h1>UseSelector & UseDispatch Hooks</h1>
        <Components />

        <h1>UseRef Hooks</h1>
        <UseRef />

        <h1>LocalStorage</h1>
        <CRUD />

        <h1>API Project</h1>
        <DataFetcher />
    </>
  )
}

export default App
