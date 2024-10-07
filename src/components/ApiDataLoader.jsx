import React, { useState, useEffect } from 'react';

export default function ApiDataLoader() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 发送 API 请求
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                setData(data);  // 将获取到的数据存储到状态中
                setLoading(false);  // 设置加载状态为 false
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);  // 如果发生错误，也需要关闭加载状态
            });
    }, []); // 仅在组件首次渲染时执行

    // 加载中状态
    if (loading) {
        return <p>Lädt...</p>;
    }

    // 数据显示或错误处理
    return (
        <div>
            {data ? (
                <div>
                    <h3>To-Do Aufgabe</h3>
                    <p>ID: {data.id}</p>
                    <p>Titel: {data.title}</p>
                    <p>Status: {data.completed ? 'Fertig' : 'Unvollständig'}</p>
                </div>
            ) : (
                <p>Keine Daten verfügbar.</p>
            )}
        </div>
    );
}
