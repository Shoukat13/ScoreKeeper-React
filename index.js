let score = 0;
let wicket = 0;
let ballWiseRes = [];
let commentry = [];
let hit = 0;
const inputRef = React.createRef();
function addScore(num){
        hit = num
        rootElement.render(<App/>)   
}
function addWicket(){
        hit = 'W';
        rootElement.render(<App/>)
}
function handleSubmit(event){
    event.preventDefault();
    if(wicket == 10){
        alert("All Out!, End of the Innings")
    }
    if(wicket < 10){
        ballWiseRes.push(hit);
        if(hit =='W')
            wicket+= 1
        else
            score+= hit
        commentry.unshift(<span>{`${hit}, ${inputRef.current.value}`}</span>);
        rootElement.render(<App/>)
    }
}
const Scorehandler = () =>
(
    <>
        <button onClick = {() => addScore(0)}>0</button>
        <button onClick = {() => addScore(1)}>1</button>
        <button onClick = {() => addScore(2)}>2</button>
        <button onClick = {() => addScore(3)}>3</button>
        <button onClick = {() => addScore(4)}>4</button>
        <button onClick = {() => addScore(5)}>5</button>
        <button onClick = {() => addScore(6)}>6</button>
        <button onClick = {addWicket}>Wicket</button>
    </>
)
const Form =() =>
    <form onSubmit ={handleSubmit}>
        <input value = {hit}/>
        <input ref ={inputRef}></input>
        <button>Submit</button>
    </form>
const Eachball = () =>(
    <div>
    {ballWiseRes.map((res, index) => (
      <React.Fragment key={index}>
        {index % 6 === 0 ? <br /> : null}
        <span style={res === "W" ? { color: "red" } : {}}> 
          {res === 0 ? <strong>.</strong> : res}
        </span>
        &nbsp;&nbsp;&nbsp;
      </React.Fragment>
    ))}
  </div>
);

const App = () =>
(
    <>
        <h1>Score Keeper</h1>
        <p>Score: {score}/{wicket}</p>
        <Scorehandler/>
        <Eachball/>
        <Form/>
        <div>
        {commentry.map((res, index) => (<p key ={index}>{res}</p>))}
        </div>
    </>
    
)
const rootElement =ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>)
