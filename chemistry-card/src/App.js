import './App.css';
import elementData from './element.js'


function App() {
  const cardItems = elementData.map((item) => 
  <div className="card">
    <div className="side front">
      <div className="title">
        <div className="p">{item.p}</div>
        <div className="n">{item.n}</div>
        <div className="m">{item.p + item.n}</div>
      </div>
      <div className="element">
        <div className="name">{item.attr}</div>
        <div className="symbol">{item.symbol}</div>
        <div className="e">
          <div className="period">{item.period}</div>
          <div className="s">{item.s}</div>
          <sup className="e-n">{item.en}</sup>
        </div>
      </div>
      <div className="bottom">{item.degree}</div>
    </div>
    <div className="side back">
      <div className="intro" dangerouslySetInnerHTML={{__html: item.intro}} />
      <div className="type">{item.type}</div>
    </div>
  </div>
  )

  return (
    <div className="App">{cardItems}</div>
  );
}


export default App;
