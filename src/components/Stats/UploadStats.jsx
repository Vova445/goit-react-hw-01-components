import React from 'react';

const UploadStats = ({ title, data }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <section style={{ backgroundColor: 'white', maxWidth: '30%', overflow: 'hidden' }}>
      {title && (
        <h2 style={{ textAlign: 'center', color: 'black', fontWeight: '300', fontSize: '28px', padding: '20px', textTransform: 'uppercase' }}>
          {title}
        </h2>
      )}
      <ul style={{ listStyle: 'none', marginTop: '20px', padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' ,}}>
        {data && data.slice(0, 4).map((item) => (
          <li
            key={item.id} style={{ backgroundColor: getRandomColor(), textAlign: 'center', padding: '30px 34px', boxSizing: 'border-box', maxHeight: '150px', minWidth: '10px'}}
          >
            <span style={{ fontSize: '32px', color: 'white' }}>{item.label}</span> <br />
            <span style={{ fontSize: '38px', color: 'white' }}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UploadStats;
