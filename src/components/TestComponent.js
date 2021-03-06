import React from "react";
import withLog from "./hoc/withLog";
import withFetch from "./hoc/withFetch";
import {compose} from 'recompose'

const MyComponent = (props) => {
  return <h2>{JSON.stringify(props, null, 2)}</h2>;
}

// export default MyComponent;

// export default withLog(MyComponent);

// каррированая функция
// export default withFetch("abc")(MyComponent)

// несколько оберток хуков для компонента
// export default withLog(withFetch(MyComponent));

// вызов нескольких хуков с помощью композиции
export default compose(withFetch, withLog)(MyComponent)