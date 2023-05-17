import React from 'react';
import {Input} from 'antd';
import {Button} from 'antd';

function WeatherForm({getWeather}) {
  return (
    <form onSubmit={getWeather}>
        <Input placeholder="Basic usage" name="city"/>
        <Button type="primary" htmlType='submit'> Search </Button>
    </form>
  )
}

export default WeatherForm;