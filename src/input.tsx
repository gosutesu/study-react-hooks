import React from 'react';

// memo化することで変更がない場合、再レンダリングがされなくなる。
export const Input = React.memo((props: any) =>  {
    console.log('render input');
    return (
    <div>
      <input type='text' value= {props.value} onChange={props.onChange} />
    </div>
  );
});
