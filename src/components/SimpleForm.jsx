import React from 'react';

export default function SimpleForm({ name, age, setName, setAge, onSubmit }) {

    // 处理表单提交
    const handleSubmit = (event) => {
        event.preventDefault(); // 阻止页面刷新
        onSubmit(); // 调用父组件传递的提交函数
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name} // 显示父组件的名字状态
                        onChange={(e) => setName(e.target.value)} // 调用父组件的 setName 更新状态
                        placeholder="Geben Sie Ihren Namen ein"
                    />
                </div>
                <div>
                    <label>Alter: </label>
                    <input
                        type="number"
                        value={age} // 显示父组件的年龄状态
                        onChange={(e) => setAge(e.target.value)} // 调用父组件的 setAge 更新状态
                        placeholder="Geben Sie Ihr Alter ein"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
