// App.jsx - The RIGHT way:
function App() {
  const currDate = new Date();
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;