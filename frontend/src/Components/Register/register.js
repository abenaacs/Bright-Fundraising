import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import RegisterCommon from './RegisterCommon';
import RegisterFundraiser from './RegisterFundraiser';
import RegisterInvestor from './RegisterInvestor';
import useRegister from '../../hooks/useRegister';

function Register() {
    const [searchParams] = useSearchParams();
    const role = searchParams.get('role');
    const [step, setStep] = useState(1);
    const {register, error, loading} = useRegister(); 
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: null,
        location: '',
        password: '',
        address: '',
        city: '',
        fundRaiser: {
            startUpName: '',
            businessSector: '',
            businessStage: '',
            businessDesc: '',
            businessWebsite: '',
            pitchDeck: ''
        },
        investor: {
            investSector: '',
            investRange: '',
            investExep: '',
            linkedIn: ''

        }
    });
    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = async(e) => {
        await register(formData);
        // e.preventDefault();
        // console.log(formData);
    };

    return (
                    <form onSubmit={handleSubmit} className='flex flex-col items-start'>
                        <div className='flex flex-col gap-5'>
                            {/* Common Register fields for both investor and fundRaiser */}
                            {step === 1 && <RegisterCommon formData={formData} setFormData={setFormData} />}
                            {/* Register fields only for the fundRaiser  */}
                            {step === 2 && role === 'fundRaiser' && <RegisterFundraiser formData={formData} setFormData={setFormData} />}
                            {/* Register fields only for the investor */}
                            {step === 2 && role === 'investor' && <RegisterInvestor formData={formData} setFormData={setFormData} />}
                            <div>
                                {step < 2 && <button className='md:w-[580px] w-[300px] mx-2' type="button" onClick={nextStep}>Next</button>}
                                <div className='flex justify-between'>
                                    {step > 1 && <button className='md:w-[150px] w-[100px] text-lg md:text-xl' type="button" onClick={prevStep}>Previous</button>}
                                    {step === 2 && <button className='md:w-[150px] w-[100px] text-lg md:text-xl' type="submit">Submit</button>}</div>
                                <div className='flex md:flex-row flex-col md:justify-between items-center gap-2 mt-3 md:mt-0'>
                                    <Link to='/forgot'><h6 className='text-white font-bold text-[15px]'>Forgot Password?</h6></Link>
                                    <div className='flex'>
                                        <h6 className='text-white font-bold text-[15px]'>have an account?</h6>
                                        <Link to='/login'><h6 className='text-white font-bold text-[15px]'> Singin</h6></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
    )
}

export default Register