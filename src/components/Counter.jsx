// Counter.jsx
import React, { useState } from 'react';

function Counter() {
    // 初始化计数器状态
    const [count, setCount] = useState(0);

    // 处理按钮点击事件
    const handleIncrement = () => {
        setCount(count + 1); // 每次点击增加计数
    };

    return (
        <div>
            <h1>Counter: {count}</h1> {/* 显示当前计数 */}
            <button onClick={handleIncrement}>Increase</button> {/* 点击按钮增加计数 */}
        </div>
    );
}

export default Counter;
