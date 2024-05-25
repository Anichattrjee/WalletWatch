import "./App.css";

function App() {
  return (
    <main>
      <h1>
      WalletWatch
      </h1>
      <form action="">
        <div className="basic">
          <input type="text" name="title" placeholder="+200 Samsung new" />
          <input type="datetime-local" />
        </div>

        <div className="description">
          <input type="text" placeholder="description" />
        </div>
        <button type="submit">Add a new transaction</button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Netflix Shares</div>
            <div className="description">Bought some Netflix shares at a very good deal</div>
          </div>

          <div className="right">
            <div className="price red">-$100</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Winning Prize</div>
            <div className="description">Won some money at a casino</div>
          </div>

          <div className="right">
            <div className="price green">+$200</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
