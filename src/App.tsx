import React, { useState, useCallback } from 'react';
import './App.css';
import { Input } from './input';

function App() {
  console.log('render app');
  const [name,setName] = useState('name');
  const [address,setAddress] = useState('address');

  // setNameをキャッシュすることでsetNameに変更がない場合のレンダリングを防止する。
  const onClickWithName = useCallback((e: any) => {
    setName(e.target.value);
  },[setName]);

  // setAddressをキャッシュすることでsetAddressに変更がない場合のレンダリングを防止する。
  const onClickWithAddress = useCallback((e:any) => {
    setAddress(e.target.value);
  },[setAddress])

  return (
    <div>
      <Input value= {name} onChange={onClickWithName} name={name} />
      <Input value= {address} onChange={onClickWithAddress} name={address} />
    </div>
  );
}

export default App;
