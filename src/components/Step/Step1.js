import React from 'react';
import InputGroup from './Form/InputGroup';
import SelectGroup from './Form/SelectGroup';

const step1Option = {
  title: [
    {value:'', name: '請選擇稱謂'},
    { value: 'mr', name: '先生' },
    { value: 'ms', name: '女士' },
    { value: 'mx', name: '不明' }
  ],

  city: [
    {
      value: '', name: '請選擇縣市'
    },
    { value: 'KLU', name: '基隆市' },
    { value: 'TPH', name: '新北市' },
    { value: 'TPE', name: '臺北市' },
    { value: 'TYC', name: '桃園市' },
    { value: 'HSH', name: '新竹縣' },
    { value: 'HSC', name: '新竹市' },
    { value: 'MAC', name: '苗栗市' },
    { value: 'MAL', name: '苗栗縣' },
    { value: 'TXG', name: '臺中市' },
    { value: 'CWH', name: '彰化縣' },
    { value: 'CWS', name: '彰化市' },
    { value: 'NTC', name: '南投市' },
    { value: 'NTO', name: '南投縣' },
    { value: 'YLH', name: '雲林縣' },
    { value: 'CHY', name: '嘉義縣' },
    { value: 'CHI', name: '嘉義市' },
    { value: 'TNN', name: '臺南市' },
    { value: 'KHH', name: '高雄市' },
    { value: 'IUH', name: '屏東縣' },
    { value: 'PTS', name: '屏東市' },
    { value: 'ILN', name: '宜蘭縣' },
    { value: 'ILC', name: '宜蘭市' },
    { value: 'HWA', name: '花蓮縣' },
    { value: 'HWC', name: '花蓮市' },
    { value: 'TTC', name: '臺東市' },
    { value: 'TTT', name: '臺東縣' },
    { value: 'PEH', name: '澎湖縣' },
    { value: 'KMN', name: '金門縣' },
    { value: 'LNN', name: '連江縣' }
  ]
};

const Step1 = () => {
  return (
    <React.Fragment>
      <h3 className='form-title'>寄送地址</h3>
      <section className='form-body col'>
      <SelectGroup 
          id='title'
      label='稱謂'
      options={step1Option.title}
      />
        <InputGroup
          id='name'
          type='text'
          label='姓名'
          placeholder='請輸入姓名'
        />
        <InputGroup
          id= 'phone'
        type= 'tel'
        label= '電話'
        placeholder= '請輸入電話號碼'
        />
        <InputGroup
          id= 'email'
        type= 'email'
        label= '電子信箱'
        placeholder= '請輸入電子信箱'
        />
        <SelectGroup
          id='city'
          label='縣市'
          options={step1Option.city}
        />
        <InputGroup
          id='address'
        type='text'
        label='地址'
        placeholder='請輸入地址'
        />
      </section>
    </React.Fragment>
  )
};

export default Step1;