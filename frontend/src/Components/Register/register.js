import React, { useEffect, useState } from 'react'
import signin from '../../assets/signup.png'
import { Link, useSearchParams } from 'react-router-dom';
import countries from './country';

const Step1 = ({ formData, setFormData }) => (
    <div className='flex flex-col md:gap-5 gap-3 items-center'>
    <div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Full Name</h4></label>
    <input value={formData.fullName}
    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
    type='text' 
    required 
    className='bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]'/>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Email</h4></label>
    <input value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    type='email' 
    required 
    className='bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]'/>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Phone</h4></label>
    <input value={formData.phone} 
    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    type='number' 
    required 
    className='bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]'/>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Location</h4></label>
<select value={formData.location}
onChange={(e) => setFormData({ ...formData, location: e.target.value })}
className='bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]'>
    {countries.map((country, index)=>(
        <option key={index}><img src={country.flag} width={50}/>{country.name}</option>
    ))}
</select>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Password</h4></label>
    <input value={formData.password}
    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
    type='password' 
    required 
    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5'/>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Confirm Password</h4></label>
    <input type='password' required className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md h-[28px] md:h-[32px] text-black px-5'/>
</div>
</div>
  );

  const Step2 = ({formData, setFormData}) => (
    <div className='flex flex-col md:gap-5 gap-3 items-center'>
    <div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Startup Name</h4></label>
    <input value={formData.startUpName}
    onChange={(e) => setFormData({ ...formData, fundRaiser: {...formData.fundRaiser, startUpName: e.target.value} })}
    type='text' 
    required 
    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5'/>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Business Sector</h4></label>
    <select value={formData.businessSector}
            onChange={(e) => setFormData({ ...formData, fundRaiser: {...formData.fundRaiser, businessSector: e.target.value} })}
            className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5'> 
        <option>Tech</option>
        <option>Agriculture</option>
        <option>Garment</option>
    </select>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Business Stage</h4></label>
    <select value={formData.businessStage}
            onChange={(e) => setFormData({ ...formData, fundRaiser: {...formData.fundRaiser, businessStage: e.target.value} })}
            className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5'> 
        <option>Idea</option>
        <option>Prototype</option>
        <option>Early-Stage</option>
        <option>Growht-Stage</option>
    </select>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Business Description</h4></label>
    <textarea value={formData.businessDesc}
    onChange={(e) => setFormData({ ...formData, fundRaiser: {...formData.fundRaiser, businessDesc: e.target.value} })}
    required
    rows={4}
    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] text-black px-5'/>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Business Website</h4></label>
    <input value={formData.businessWebsite}
    onChange={(e) => setFormData({ ...formData, fundRaiser: {...formData.fundRaiser, businessWebsited: e.target.value} })}
    type='text' 
    required 
    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5'/>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Pitch Deck Url</h4></label>
    <input value={formData.fundRaiser.pitchDeck}
    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, pitchDeck: e.target.value } })}


    type='text' 
    required 
    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5'/>
</div>
</div>
  )

  const Step2_ = ({formData, setFormData}) => (
    <div className='flex flex-col md:gap-5 gap-3 items-center'>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Investment Sector</h4></label>
    <select value={formData.investor.investSector}
            onChange={(e) => setFormData({ ...formData, investor: {...formData.investor, investSector: e.target.value} })}
            className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5'> 
        <option>Tech</option>
        <option>Agriculture</option>
        <option>Garment</option>
    </select>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Investment Experience</h4></label>
    <textarea value={formData.investor.investExep}
    onChange={(e) => setFormData({ ...formData, investor: {...formData.investor, investExep: e.target.value} })}
    required
    rows={4}
    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] text-black px-5'/>
</div>
<div className='flex flex-col gap-0'>
    <label><h4 className='text-lg md:text-xl'>Linked Profile</h4></label>
    <input value={formData.investor.linkedIn}
    onChange={(e) => setFormData({ ...formData, investor: {...formData.investor, linkedIn: e.target.value} })}
    type='text' 
    required 
    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] text-black px-5'/>
</div>
</div>
  )

function Register() {
    const [searchParams] = useSearchParams();
    const role = searchParams.get('role');
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
          fullName: '',
          email: '',
          phone:null,
          location:'',
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
        
          const handleSubmit = (e) => {
            e.preventDefault();
            console.log(formData);
          };
        
  return (
	<div className='md:grid md:grid-cols-2 md:gap-5 flex h-screen justify-center items-center'>
			<div className='pr-10 hidden md:flex md:justify-center md:mt-10'>
				<img src={signin} width={400} className='h-[600px]'/>
			</div>
			<div>
                <div className='flex flex-col md:mt-0 gap-5 md:gap-10 md:p-10 items-center mt-14'>
                    <div className='flex flex-col items-center'>
                    <h2 className='text-white text-center text-3xl md:text-5xl md:mb-5'>Sign Up</h2>
                    <h6 className='text-center text-sm md:text-md'>Enter Your info to proceed</h6>
                    </div>
                <form className='flex flex-col items-start'>
                <div className='flex flex-col gap-5'>
                {step === 1 && <Step1 formData={formData} setFormData={setFormData} />}
                {step === 2 && role === 'fundRaiser' && <Step2 formData={formData} setFormData={setFormData} />}
                {step === 2 && role === 'investor' && <Step2_ formData={formData} setFormData={setFormData} />}
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
                </div>
			</div>
		</div>
  )
}

export default Register