
import './App.css';
import Alert from './Alert';
const List = [
  { id: 1, name: "Huyền", age: 11 },
  { id: 2, name: "Hiền", age: 12 },
  { id: 3, name: "Thanh", age: 15 },
]
function App() {
  return (
   
    <>
    <Alert />
      <ul>
        {List.map(List => {
          return (
            <li key={List.id}>id:{List.id} -- name:{List.name} -- age:{List.age}</li>
          )
        })}
      </ul>
     
    </>
  );
}

export default App;
