import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
};

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        campaignTitle: '',
        campaignDescription: '',
        campaignCategory: '',
        campaignImage: '',


        videoIntro: '',
        pitchDeck: '',
        motivationLetter: '',
        personalizedMessage: '',

        name: '',
        phone: '',
        address: '',
        email: '',

        fundingType: '',
        targetAmount: '',
        deadline: '',
        minInvestment: '',

    });
    const [errors, setErrors] = useState({});

    // Load saved form data from localStorage on component mount
    useEffect(() => {
        const savedFormData = localStorage.getItem('multiStepFormData');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
        const savedStep = localStorage.getItem('multiStepFormStep');
        if (savedStep) {
            setCurrentStep(parseInt(savedStep, 10));
        }
    }, []);

    // Save form data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('multiStepFormData', JSON.stringify(formData));
    }, [formData]);

    // Save current step to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('multiStepFormStep', currentStep.toString());
    }, [currentStep]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    const validateStep = () => {
        const newErrors = {};
        switch (currentStep) {
            case 1:
                if (!formData.campaignTitle.trim()) newErrors.campaignTitle = 'Campaign title is required';
                if (!formData.campaignDescription.trim()) newErrors.campaignDescription = 'Campaign description is required';
                if (!formData.campaignCategory) newErrors.campaignCategory = 'Campaign Category is required';
                if (!formData.campaignImage) newErrors.campaignImage = 'Campaign Image is required';
                break;
            case 2:
                if (!formData.pitchDeck) newErrors.pitchDeck = 'Pitch Deck file is required';
                break;
            case 3:
                if (!formData.targetAmount) newErrors.targetAmount = 'Target Amount is required';
                if (!formData.fundingType) newErrors.fundingType = 'Funding Type is required';
                if (!formData.deadline) newErrors.deadline = 'Deadline is required';
                if (!formData.minInvestment) newErrors.minInvestment = 'Minimum Investment is required';
                break;
            case 4:
                if (!formData.name.trim()) newErrors.name = 'Name is required';
                if (!formData.email.trim()) newErrors.email = 'Email is required';
                if (!formData.email.includes('@')) newErrors.email = 'Invalid Email';
                if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
                if (!formData.address.trim()) newErrors.address = 'Adress is required';
                break;

            default:
                break;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const saveAndContinue = () => {
        if (validateStep()) {
            if (currentStep < 5) {
                setCurrentStep(prevStep => prevStep + 1);
            } else {
                // Handle form submission
                console.log('Form submitted:', formData);
                alert('Form submitted successfully!');
                // Clear localStorage after successful submission
                localStorage.removeItem('multiStepFormData');
                localStorage.removeItem('multiStepFormStep');
            }
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prevStep => prevStep - 1);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div
                        key="step1"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <h2 className="text-2xl text-gray-800 font-bold mb-4">Campaign Information</h2>

                        <div className='py-2'>
                            <label htmlFor="campaignTitle" className="text-md text-gray-700 mb-1 block">
                                Campaign Title <span className="text-red-500">*</span>
                            </label>
                            <p className="text-xs text-gray-600 mb-2">Enter the Campaign Title of your campaign</p>
                            <input
                                type="text"
                                name="campaignTitle"
                                value={formData.campaignTitle}
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.campaignTitle ? 'border-red-500' : 'border-gray-500'} rounded`}
                            />
                            {errors.campaignTitle && <p className="text-red-500 text-sm mb-2">{errors.campaignTitle}</p>}
                        </div>

                        <div className='py-4'>
                            <label htmlFor="campaignDescription" className="text-md text-gray-700 mb-1 block">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <p className="text-xs text-gray-600 mb-2">Provide a Description for your campaign</p>
                            <textarea
                                name="campaignDescription"
                                value={formData.campaignDescription}
                                onChange={handleInputChange}
                                className={`w-full text-gray-600 md:w-1/2 p-2 mb-2 border ${errors.campaignDescription ? 'border-red-500' : 'border-gray-500'} rounded`}
                            />
                            {errors.campaignDescription && <p className="text-red-500 text-sm mb-2">{errors.campaignDescription}</p>}
                        </div>
                        <div className='py-4'>
                            <label htmlFor="campaignCategory" className="text-md text-gray-700 mb-1 block">
                                Campaign Category <span className="text-red-500">*</span>
                            </label>
                            <p className="text-xs text-gray-600 mb-2">Select the Campaign Category</p>
                            <select
                                name="campaignCategory"
                                value={formData.campaignCategory}
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.campaignCategory ? 'border-red-500' : 'border-gray-500'} rounded`}
                            >
                                <option value="">Select a campaign category</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                                <option value="category3">Category 3</option>
                            </select>
                            {errors.campaignCategory && <p className="text-red-500 text-sm mb-2">{errors.campaignCategory}</p>}
                        </div>

                        <div className='py-4'>
                            <label htmlFor="campaignImage" className="text-md text-gray-700 mb-1 block">
                                Campaign Image <span className="text-red-500">*</span>
                            </label>
                            <p className="text-xs text-gray-600 mb-2">Upload the Campaign Image</p>
                            <input
                                type="file"
                                name="campaignImage"
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.campaignImage ? 'border-red-500' : 'border-gray-500'} rounded`}
                            />
                            {errors.campaignImage && <p className="text-red-500 text-sm mb-2">{errors.campaignImage}</p>}
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        key="step2"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <h2 className="text-2xl text-gray-800 font-bold mb-4">Pitch Deck and Motivation</h2>
                        <div className="py-4">
                            <label htmlFor="pitchDeck" className="text-md text-gray-700 mb-1 block">
                                Pitch Deck <span className="text-red-500">*</span>
                            </label>
                            <p className="text-xs text-gray-600 mb-2">Upload your campaign's pitch deck</p>
                            <input
                                type="file"
                                name="pitchDeck"
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.pitchDeck ? 'border-red-500' : 'border-gray-500'} rounded`}
                            />
                            {errors.pitchDeck && <p className="text-red-500 text-sm mb-2">{errors.pitchDeck}</p>}
                        </div>

                        <div className="py-4">
                            <label htmlFor="videoIntro" className="text-md text-gray-700 mb-1 block">
                                Video Introduction <span className="text-gray-500">(optional)</span>
                            </label>
                            <p className="text-xs text-gray-600 mb-2">
                                Provide a YouTube video URL for your campaign's video introduction
                            </p>
                            <input
                                type="text"
                                name="videoIntro"
                                value={formData.videoIntro}
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.videoIntro ? 'border-red-500' : 'border-gray-300'
                                    } rounded`}
                                placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            />
                            {errors.videoIntro && (
                                <p className="text-red-500 text-sm mb-2">{errors.videoIntro}</p>
                            )}
                        </div>

                        <div className="py-4">
                            <label htmlFor="motivationLetter" className="text-md text-gray-700 mb-1 block">
                                Motivation Letter <span className="text-gray-500">(optional)</span>
                            </label>
                            <p className="text-xs text-gray-600 mb-2">Explain why investors should fund this campaign and your passion for it</p>
                            <textarea
                                name="motivationLetter"
                                value={formData.motivationLetter}
                                onChange={handleInputChange}
                                rows="5"
                                className={`w-full md:w-1/2 p-2 mb-2 border text-gray-600 border-gray-500 rounded`}
                            ></textarea>
                        </div>

                        <div className="py-4">
                            <label htmlFor="personalizedMessage" className="text-md text-gray-700 mb-1 block">
                                Personalized Message <span className="text-gray-500">(optional)</span>
                            </label>
                            <p className="text-xs text-gray-600 mb-2">A personal message from the fundraiser to potential investors</p>
                            <textarea
                                name="personalizedMessage"
                                value={formData.personalizedMessage}
                                onChange={handleInputChange}
                                rows="5"
                                className={`w-full md:w-1/2 p-2 mb-2 border text-gray-600 border-gray-700 rounded`}
                            ></textarea>
                        </div>


                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        key="step3"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >

                        <h2 className="text-2xl text-gray-800 font-bold mb-4">Funding Details</h2>
                        <div className="py-4">
                            <label htmlFor="targetAmount" className="text-md text-gray-700 mb-1 block">
                                Target Amount<span className="text-red-500 pl-1">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-2">
                                The amount of funding the fundraiser aims to raise.
                            </p>
                            <input
                                type="number"
                                name="targetAmount"
                                value={formData.targetAmount}
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.targetAmount ? 'border-red-500' : 'border-gray-500'
                                    } rounded`}
                            />
                            {errors.targetAmount && (
                                <p className="text-red-500 text-sm mb-2">{errors.targetAmount}</p>
                            )}
                        </div>

                        <div className="py-4">
                            <label htmlFor="fundingType" className="text-md text-gray-700 mb-1 block">
                                Funding Type<span className="text-red-500 pl-1">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-2">
                                Equity, debt, grants, etc.
                            </p>
                            <input
                                type="text"
                                name="fundingType"
                                value={formData.fundingType}
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.fundingType ? 'border-red-500' : 'border-gray-500'
                                    } rounded`}
                            />
                            {errors.fundingType && (
                                <p className="text-red-500 text-sm mb-2">{errors.fundingType}</p>
                            )}
                        </div>

                        <div className="py-4">
                            <label htmlFor="deadline" className="text-md text-gray-700 mb-1 block">
                                Deadline<span className="text-red-500 pl-1">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-2">
                                End date for the fundraising campaign.
                            </p>
                            <input
                                type="date"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.deadline ? 'border-red-500' : 'border-gray-500'
                                    } rounded`}
                            />
                            {errors.deadline && (
                                <p className="text-red-500 text-sm mb-2">{errors.deadline}</p>
                            )}
                        </div>

                        <div className="py-4">
                            <label htmlFor="minInvestment" className="text-md text-gray-700 mb-1 block">
                                Minimum Investment<span className="text-red-500 pl-1">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-2">
                                The minimum amount an investor can contribute.
                            </p>
                            <input
                                type="number"
                                name="minInvestment"
                                value={formData.minInvestment}
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.minInvestment ? 'border-red-500' : 'border-gray-500'
                                    } rounded`}
                            />
                            {errors.minInvestment && (
                                <p className="text-red-500 text-sm mb-2">{errors.minInvestment}</p>
                            )}
                        </div>
                    </motion.div>

                );
            case 4:
                return (
                    <motion.div
                        key="step3"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <h2 className="text-2xl text-gray-800 font-bold mb-4">Contact Information</h2>
                        <div className="py-4">
                            <label htmlFor="name" className="text-md text-gray-700 mb-1 block">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-2">
                                Please enter your full legal name as it appears on your identification.
                            </p>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.name ? 'border-red-500' : 'border-gray-500'
                                    } rounded`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}
                        </div>

                        <div className="py-4">
                            <label htmlFor="email" className="text-md text-gray-700 mb-1 block">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-2">
                                Please enter a valid email address where we can contact you.
                            </p>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                required
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.email ? 'border-red-500' : 'border-gray-500'
                                    } rounded`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
                        </div>

                        <div className="py-4">
                            <label htmlFor="phone" className="text-md text-gray-700 mb-1 block">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-2">
                                Please enter a valid phone number where we can contact you.
                            </p>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.phone ? 'border-red-500' : 'border-gray-500'
                                    } rounded`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}
                        </div>

                        <div className="py-4">
                            <label htmlFor="address" className="text-md text-gray-700 mb-1 block">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-2">
                                Please enter your full physical address, including street, city, state, and zip code.
                            </p>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className={`w-full md:w-1/2 p-2 mb-2 border ${errors.address ? 'border-red-500' : 'border-gray-500'
                                    } rounded`}
                            />
                            {errors.address && <p className="text-red-500 text-sm mb-2">{errors.address}</p>}
                        </div>
                    </motion.div>
                );
            case 5:
                return (
                    <motion.div
                        key="step5"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <h2 className="text-2xl text-gray-800 font-bold mb-4">Review and Submit</h2>
                        <div className="campaign-preview">
                            <h1 className="text-3xl text-cyan-800 font font-bold mb-4">{formData.campaignTitle.toUpperCase()}</h1>
                            <div className="mb-8">
                                <img src={formData.campaignImage} alt="Campaign Image" className="w-full rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <h2 className="text-2xl text-gray-600 font-bold mb-2">Campaign Description</h2>
                                <p className="text-gray-500">{formData.campaignDescription}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-2xl text-gray-600 font-bold mb-2">Campaign Category</h2>
                                <p className="text-gray-500">{formData.campaignCategory}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-2xl text-gray-600 font-bold mb-2">Video Introduction</h2>
                                <div className="relative w-full h-0 overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${formData.videoIntro}`}
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-2xl text-gray-600 font-bold mb-2">Pitch Deck</h2>
                                <a href={formData.pitchDeck} className="text-blue-500 hover:underline">
                                    View Pitch Deck
                                </a>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-gray-600 text-2xl font-bold mb-2">Motivation Letter</h2>
                                <p className="text-gray-700">{formData.motivationLetter}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-gray-600 text-2xl font-bold mb-2">Personalized Message</h2>
                                <p className="text-gray-500">{formData.personalizedMessage}</p>
                            </div>

                            <div className="mb-4">
                                <h2 className="text-2xl text-gray-600 font-bold mb-2">Funding Details</h2>
                                <p className="text-gray-500">Funding Type: {formData.fundingType}</p>
                                <p className="text-gray-500">Target Amount: ${formData.targetAmount.toLocaleString()}</p>
                                <p className="text-gray-500">Deadline: {formData.deadline}</p>
                                <p className="text-gray-500">Minimum Investment: ${formData.minInvestment.toLocaleString()}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-2xl text-gray-600 font-bold mb-2">Contact Information</h2>
                                <p className="text-gray-500">Name: {formData.name}</p>
                                <p className="text-gray-500">Phone: {formData.phone}</p>
                                <p className="text-gray-500">Address: {formData.address}</p>
                                <p className="text-gray-500">Email: {formData.email}</p>
                            </div>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
            <div class="pt-12 md:pt-16 lg:pt-20">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Create Your Campaign</h2>
                <p class="pt-2 text-base md:text-lg lg:text-xl">Fill in the details to start your fundraising journey.</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className="w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
                    <div className="flex justify-between mb-8">
                        {[1, 2, 3, 4, 5].map(step => (
                            <div className='flex flex-col justify-center items-center'>
                                <div
                                    key={step}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${currentStep >= step ? 'bg-green-500 scale-110' : 'bg-gray-300'} transition-all duration-300`}
                                >
                                    {step}
                                </div>
                                <div className="hidden md:block text-gray-600">
                                    {step === 1 ? 'Campaign Info' : step === 2 ? 'Pitch Deck and Motivation' : step === 3 ? ' Funding Details' : step === 4 ? 'Contact Info' : step === 5 ? 'Review and Submit' : null}
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <AnimatePresence mode="wait">
                            {renderStep()}
                        </AnimatePresence>

                        <div className="flex flex-col md:flex-row justify-between mt-8">
                            <button
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className={`px-4 py-2 rounded ${currentStep === 1
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                                    } transition-colors duration-300`}
                            >
                                Previous
                            </button>
                            <button
                                onClick={saveAndContinue}
                                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors duration-300"
                            >
                                {currentStep === 5 ? 'Submit' : 'Save and Continue'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default MultiStepForm;