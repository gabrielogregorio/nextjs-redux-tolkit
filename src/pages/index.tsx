import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../core/hooks/useRedux';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount
} from '../core/features/counter';
import LayoutTheme from '../components/layouts/layoutTheme';

const home = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementarEm, setIncrementarEm] = useState<number>(0);

  return (
    <LayoutTheme>
      <h2>{count}</h2>

      <div>
        <input
          value={incrementarEm}
          onChange={(e) => setIncrementarEm(Number(e.target.value))}
          type="number"
        />

        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementarEm)))}
        >
          Incrementar em {incrementarEm}
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </LayoutTheme>
  );
};

export default home;
