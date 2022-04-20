import React, { useReducer, useState } from 'react';
import useInputs from './useInputs';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   // console.log('랜더링이 완료되었습니다.');
  //   // console.log({
  //   //   name,
  //   //   nickname
  //   // });
  //   // console.log('마운트될 때만 실행됩니다.');
  //   // console.log(name);
  //   console.log('effect');
  //   console.log(name);
  //   return () => {
  //     console.log('cleanup');
  //     console.log(name);
  //   };
  // }, [name]);

  // const onChangeName = e => {
  //   setName(e.target.value);
  // };

  // const onChangeNickname = e => {
  //   setNickname(e.target.value);
  // };

  // return (
  //   // <div>
  //   //   <div>
  //   //     <input value={name} onChange={onChangeName} />
  //   //     <input value={nickname} onChange={onChangeNickname} />
  //   //   </div>
  //   //   <div>
  //   //     <div>
  //   //       <b>이름 :</b> {name}
  //   //     </div>
  //   //     <div>
  //   //       <b>닉네임</b> {nickname}
  //   //     </div>
  //   //   </div>
  //   // </div>
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? '숨기기' : '보이기'}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );

  // const [state, dispatch] = useReducer(reducer, {
  //   name: '',
  //   nickname: ''
  // });

  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });

  const { name, nickname } = state;
  // const onChange = e => {
  //   dispatch(e.target);
  // };

  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickname" vaule={nickname} onChange={onChange} />
      <div>
        <div>
          <b>이름 : </b>{name}
        </div>
        <div>
          <b>닉네임 : </b>{nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;