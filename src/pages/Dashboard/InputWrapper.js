import * as React from 'react';

const InputWrapper = ({onFormSubmit}) => {

    const [formData, updateFormData] = React.useState({
        page: '',
        pagesize: '',
        fromdate: '',
        todate: '',
    });

    const handleOnChange = (event, key) => {
        updateFormData({
            ...formData,
            [key]: event.target.value,
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(formData);
    }

    return (
        <form onSubmit={handleFormSubmit} className='input-container'>
            <div className='input'>
                <label htmlFor='from'>From Date</label><br />
                <input value={formData.fromdate} id='from' onChange={(event) => handleOnChange(event, 'fromdate')} type='date' />
            </div>
            <div className='input'>
                <label htmlFor='to'>To Date</label><br />
                <input value={formData.todate} id='to' onChange={(event) => handleOnChange(event, 'todate')} type='date' />
            </div>
            <div className='input'>
                <label htmlFor='page-size'>Page Size</label><br />
                <input value={formData.pagesize} id='page-size' onChange={(event) => handleOnChange(event, 'pagesize')} type='number' />
            </div>
            <div className='input'>
                <label htmlFor='page'>Page</label><br />
                <input value={formData.page} id='page' onChange={(event) => handleOnChange(event, 'page')} type='number' />
            </div>
            <div>
                <input value='Apply Filter' type='submit'/>
            </div>
        </form>
    )
}

export default InputWrapper;