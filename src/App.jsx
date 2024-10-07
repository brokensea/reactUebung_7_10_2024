// App.jsx
import React, { useState } from 'react';
import SimpleForm from './components/SimpleForm';
import ApiDataLoader from './components/ApiDataLoader';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import './App.css'; // 引入 CSS 文件

export default function App() {
  // 定义两个状态来存储名字和年龄
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // 提交标志
  const [submitted, setSubmitted] = useState(false);

  // 用于提交数据的函数
  const handleFormSubmit = () => {
    setSubmitted(true); // 表示已提交
  };

  return (
    <div className="app-container">
      <h1>Welcome to the Form Application</h1>
      {/* 通过 props 将状态和更新状态的函数传递给子组件 */}
      <SimpleForm
        name={name}
        age={age}
        setName={setName}
        setAge={setAge}
        onSubmit={handleFormSubmit}
      />

      {/* 提交后显示结果 */}
      {submitted && (
        <div className="result">
          <h2>Submitted Data:</h2>
          <p>Name: {name}</p>
          <p>Alter: {age}</p>
        </div>
      )}

      {/* 加载 API 数据 */}
      <ApiDataLoader />

      {/* 添加 Counter 组件 */}
      <Counter />

      {/* 添加 TodoList 组件 */}
      <TodoList />
    </div>
  );
}