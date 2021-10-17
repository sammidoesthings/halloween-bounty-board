import react from 'react';

function SightingForm(props) {

    const {
        values,
        submit, 
        change,
        disabled,
        errors,
    } = props;

    
    //prevent default
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    //onChange for state changes, valueToUse for checked boxes
    const onChange = evt => {
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    //return statement here
    return (
        <form id="sightings-form" onSubmit={onSubmit}>
            <div className='form-header'>
                <p>Have you seen a monster? Report it below!</p>
            </div>
            <div className='form-inputs'>
                <div>
                {/* ///VALIDATE THESE WITH YUP, THERE ARE SPECIAL ONES FOR EMAIL AND PHONE I THINK */}
                <p>Your Contact Information: </p>
                    <label> First and Last Name: &nbsp;
                        <input
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                </div>                <div>
                    <label> Your Phone Number: &nbsp;
                        <input
                            value={values.name}
                            onChange={onChange}
                            name='phone'
                            type='text'
                        />
                    </label>
                </div>
                <div>
                    <label> Your Email Address: &nbsp;
                        <input
                            value={values.name}
                            onChange={onChange}
                            name='email'
                            type='text'
                        />
                    </label>
                </div>
                <div>
                    <label> Your Physical Address: &nbsp;
                        <input
                            value={values.name}
                            onChange={onChange}
                            name='address'
                            type='text'
                        />
                    </label>
                </div>

                <div>
                    <label> Please add any other information you have about the monster, its appearance, its behavior or abilities, or its location below. Every detail helps.
                        <div>
                            <input
                                value={values.extraInfo}
                                onChange={onChange}
                                type='text'
                                name='extraInfo'
                            />
                        </div>
                    </label>
                </div>
            </div>

            <div>
                <button id='report-button' disabled={disabled}>
                    Submit Your Report
                </button>
            </div>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.phone}</div>
                <div>{errors.email}</div>
                <div>{errors.address}</div>
                <div>{errors.extraInfo}</div>
            </div>
        
        </form>


            // {/* // FUNCTION ENDS BELOW HERE */}
    )
}


export default SightingForm;