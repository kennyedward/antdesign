import React, { useState } from "react";
import { DatePicker, Button, version, message, Alert } from 'antd'
import 'antd/dist/antd.css'
import "./styles.css";

export default function App() {
  const [date, setDate] = useState('')
  const handleChange = value => {
    message.info(`The Date Selected: ${value ? value.format('DD-MM-YYYY') : 'None'}`)
    setDate(value)
  }
  return (
    <div className="App">
      <h1>Antd version {version}</h1>
      <DatePicker onChange={handleChange} style={{borderRadius: 10}} />
      <Button type='primary' style={{marginLeft: 8}} >
        Select Date
      </Button>
      <Alert message="Selected Date" description={date ? date.format('DD-MM-YYYY') : 'None'} />
    </div>
  );
}
