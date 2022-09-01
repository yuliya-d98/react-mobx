import { observer } from 'mobx-react-lite';
import counter from './store/counter';

const Counter = observer(() => {
  return (
    <div className="counter">
      {'count = ' + counter.count}
      <div className="buttons">
        <button className="btn" onClick={() => counter.increment()}>+</button>
        <button className="btn" onClick={() => counter.decrement()}>-</button>
      </div>
      {counter.total}
    </div>
  )
})

export default Counter;
