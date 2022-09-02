import { useEffect, useState } from 'react';
import './App.css';
import { saveAs } from 'file-saver';

function App() {
  const qrColors = [
    '000000',
    '8f8f8f',
    'fe0001',
    'e6389a',
    'ff9ac4',
    '6e2ec2',
    '110ba2',
    '017bff',
    '19ddde',
    '21bf7d',
    'ff6c0a',
    'a36452'
  ];
  const [currentColor, setCurrentColor] = useState(qrColors[0])
  const [qrImage, changeQrImage] = useState('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/dhananjaysahu79');
  const [fieldText, setFieldText] = useState();

  const handleClick = async (e) => {
    const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${fieldText}&color=${currentColor}`
    changeQrImage(URL);
    setFieldText('');
  }
  const handleChange = e => {
    setFieldText(e.target.value);
  }
  const handleColorChange = (color) => {
    setCurrentColor(color);
  }

  const downloadImage = () => {
    saveAs(qrImage, 'myQRCode.jpg')
  }

  return ( 
    <div className="App">
      <div className='left'>
        <h2><span>Gen</span>Code</h2>
        <div className='underline'></div>
        <h1>Create unique QR codes<br/>in <span>seconds.</span></h1>
        <p>Gencode is a dynamic QR code generator, It allows users to easily create <br/> customized QR codes for sharing and embedding on their websites.</p>
        <div className='color-blocks-wrapper'>
          {qrColors.map(color => 
           <div className ='color-selector' key = {color}
            style = {color === currentColor ? {border: '2px solid #00288a'} : {border: '2px solid #f0f0f0'}}
            onClick = {() => handleColorChange(color)}
           >
            <div className='color-block' style={{background: `#${color}`}}></div>
          </div>
          )}
        </div>
        <div className='text-button-wrapper'>
          <input value = {fieldText} onChange = {handleChange} type= 'text' placeholder='Enter your link'/>
        </div>
        <button onClick={handleClick}>Generarte QR</button>
      </div>
      <div className='right'>
          <div className='qr-container'>
            <img alt='' src = {qrImage}></img>
          </div>

        <button className='download-button' onClick={downloadImage}>Download JPG file</button>
      </div>
    </div>
  );
}

export default App;
