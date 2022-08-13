import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Notes } from './Components/Notes';
import { Cards } from './Components/Cards';
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [task, setTask] = useState([])
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [data,setData] = useState()
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(6)

  const handleAdd = (title, note) => {
    if (note === "") {
      return false;
    }
    const d = new Date();
    const payload = {
      id: uuidv4(),
      title: title,
      notes: note,
      time: d.getTime(),
      pinned: false,
      status: false,
    }
    setTask([...task, payload])
    console.log(payload)
    console.log(task)
  }
  const handleEdit = (titles, notes, id) => {
    const d = new Date();

    const updatedTodos = task.map((item) =>
      item.id === id ? { ...item, title: titles, notes: notes, time: d.getTime() } : item
    );
    setTask(updatedTodos)

  }
  const handlePinned = (id) => {
    const updatedTodos = task.map((item) =>
            item.id === id ? { ...item, pinned: !item.pinned } : item
        );
        setTask(updatedTodos)
        
  }

  const handleDelete = (id)=>{
    setTask(task.filter((item) => item.id !== id));
  }

  useEffect(() => {
    const sortTask = [...task].sort((a, b) => b.time - a.time)
    setTask(sortTask)
    // if (task.length) {
    //   const totalPages = Math.floor(task.length / 6);
    //   setTotalPages(totalPages);
    // }
    
  }, [task,page,data,totalPages])

  const handleNext = () =>{
    if(task.length > lastIndex){
      setPage(page+1)
      setFirstIndex(firstIndex+6)
      setLastIndex(lastIndex+6)
    }
    else{
      return false;
    }
   
  }
 
  const handlePrev = ()=>{
    if(page === 1){
      return false;
    }
    setPage(page-1)
      setFirstIndex(firstIndex-6)
      setLastIndex(lastIndex-6)
  }

  return (
    <div className="App">
     
        <Header />
        <div className="Apps">
        <Notes
          Alldata={handleAdd}
        />
        <div>
          <p style={{textAlign: 'center'}}>

          Pinned
          </p>
          <div className="nonPined">
          {
            task?.filter((item) => item.pinned)?.map((item) => (
              <Cards
                key={item.id}
                // title={item.title}
                // detail={item.detail}
                {...item}
                handleEdits={handleEdit}
                id={item.id}
                handlePinned={handlePinned}
                handleDelete={handleDelete}
              />
            ))
          }
        </div>
        </div>
        <p style={{textAlign: 'center'}}>

        NonPined
        </p>
        <div className="nonPined">
        
          {
            task?.slice(firstIndex,lastIndex)?.filter((item) => !item.pinned)?.map((item) => (
              <Cards
                key={item.id}
                // title={item.title}
                // detail={item.detail}
                {...item}
                handleEdits={handleEdit}
                id={item.id}
                handlePinned={handlePinned}
                handleDelete={handleDelete}
              />
            ))
          }
        </div>

      </div>
      <div className="btn_group">
        <button className="btn" onClick={handlePrev}>Prev</button>
        {page}
        <button className="btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
