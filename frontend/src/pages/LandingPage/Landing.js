import { useState, useEffect } from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';
import { GiCandleFlame } from "react-icons/gi";
import { MdLooksOne } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberThreeFill } from "react-icons/pi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';


//importing images//

import meeting from '../../assets/meeting.png'
import pitch from '../../assets/pitch.png'
import one from '../../assets/icons8-one-96.png'
import two from '../../assets/icons8-two-96.png'
import three from '../../assets/icons8-three-96.png'
import num_one from '../../assets/icons8-one-100 (1).png'
import num_two from '../../assets/icons8-two-100.png'
import num_three from '../../assets/icons8-three-100 (1).png'
import num_four from '../../assets/icons8-circled-4-100.png'


const LandingPage = () => {

    const [faqs, setFaqs] = useState([
        { id: 1, question: 'Streamline the Investment Process', answer: 'Fundraising platforms offer tools to manage deal flow, track investments, and monitor portfolio performance.', isOpen: false },
        { id: 2, question: 'Collaborate with Investors', answer: 'Startups and investors can securely share documents, communicate, and coordinate on next steps.', isOpen: false },
        { id: 3, question: 'Optimize Tax and Compliance', answer: 'Automated features help ensure investments adhere to regulatory requirements and tax considerations.', isOpen: false },
    ]);


    const toggleFAQ = (id) => {
        setFaqs((prevFaqs) => {
            const updatedFaqs = prevFaqs.map((faq) =>
                faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
            );
            return updatedFaqs;
        });
    };




    return (
        <div className='landing-page'>
            <div>

            </div>
            <div className='header-container'>
                <div className='sub-heading'>
                    <h1>Funding Platforms for Startups</h1>
                    <p>Fundraising platforms connect ambitious startups with accredited investors, providing tools to pitch ideas, research companies, and manage investments.</p>

                    <div className='py-4'>
                    <Link to='/role'>
                    <button className='explore-btn'>
                            Explore Platforms
                        </button></Link>

                        <Link to='/role'>
                    <button className='find_investor_btn'>
                    Find Investors
                        </button></Link>
                    </div>

                </div>
                <div className='image-container'>
                    <img src={meeting} width={400} />
                </div>
            </div>



            <div className='course__container'>
                <div className='course_sub_container'>
                    <div className='py-10'>
                        <h2 className='main__heading'>Connect Startups and Investors</h2>
                    </div>

                    <div className='catalog__container'>
                        <div className='catalog-item'>
                            <h3 className='heading'>Startup Discovery</h3>
                            <p className='mt-2'>Platforms allow investors to easily browse and discover promising startups across various industries and stages of growth.</p>
                            {/* <img src={books} className='mt-4' style={{ width: '100px', height: 'auto' }} alt='Books' /> */}
                        </div>
                        <div className='catalog-item'>
                            <h3 className='heading'>Investor Matching</h3>
                            <p className='mt-2'>Startups can find the right investors that align with their vision, funding needs, and growth stage.</p>
                            {/* <img src={search} className='mt-4' style={{ width: '100px', height: 'auto' }} alt='Search' /> */}
                        </div>
                        <div className='catalog-item'>
                            <h3 className='heading'>Relationship Building</h3>
                            <p className='mb-6'>These platforms facilitate conversations and connections between entrepreneurs and investors.</p>
                            {/* <img src={instructor} style={{ width: '90px', height: 'auto' }} alt='Instructor' /> */}
                        </div>
                    </div>
                </div>
            </div>




            <div class="feature-container flex">
                <div class="top-container">
                    <div>
                        <h2 className='main__heading'>Tools for Startup Pitches</h2>
                    </div>
                    <div class="feature-sub-container">
                        <div className='pitch_deck'>
                            <div className='number_img_container'>
                                {/* <span class="feature-icon"><MdLooksOne /></span> */}
                                <img src={one} alt='1' />
                            </div>
                            <div>
                                <h3 class="sub-heading2">
                                    Pitch Deck Builder
                                </h3>
                                <p>Startups can create polished pitch decks using pre-designed templates and customization tools.</p>
                            </div>
                        </div>

                        <div className='pitch_deck'>
                            <div className='number_img_container'>
                                {/* <span class="feature-icon"><PiNumberSquareTwoFill /></span> */}
                                <img src={two} alt='two' />
                            </div>
                            <div>
                                <h3 class="sub-heading2">
                                    Video Pitches
                                </h3>
                                <p>Platforms enable startups to record and share compelling video pitches to engage investors..</p>
                            </div>
                        </div>

                        <div className='pitch_deck'>
                            <div className='number_img_container'>
                                {/* <span class="feature-icon"><PiNumberThreeFill /></span> */}
                                <img src={three} alt='three' />
                            </div>
                            <div>
                                <h3 class="sub-heading2">
                                    Investor Analytics
                                </h3>
                                <p>Startups can track investor engagement and feedback to refine their presentations.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="image-container">
                    <img src={pitch} alt="Elearning content development" />
                </div>
            </div>




            <div className="assessment_container">
                <div className="assessment_heading_container">
                    <h2 className='comprensive-heading'>
                        Research Investors and Companies
                    </h2>
                </div>
                <div className='assesment_sub_container'>

                    <div className='ass_first_container'>

                        <div className='flex justify-center'>
                            <div>
                                <img src={num_one} alt='one' />
                            </div>
                            <div className="assesments">
                                <h3>
                                    Company Profiles
                                </h3>
                                <p>
                                    Detailed information on startups' products, team, financials, and milestones.
                                </p>
                            </div>
                        </div>



                        <div className='flex justify-center'>
                            <div>
                                <img src={num_two} alt='two' />
                            </div>
                            <div className="assesments">
                                <h3>Investor Portfolios
                                </h3>
                                <p>
                                    Insights into the investment history, thesis, and portfolio of individual investors.
                                </p>

                            </div>
                        </div>

                    </div>

                    <div className='ass_second_container'>

                        <div className='flex justify-center'>
                            <div>
                                <img src={num_three} alt="3-circle-c" />
                            </div>
                            <div className="assesments">
                                <h3>Personalized Feedback
                                </h3>
                                <p>
                                    Data-driven industry analysis to identify emerging opportunities and competitive landscapes.
                                </p>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <div>
                                <img src={num_four} alt='four' />
                            </div>
                            <div className="assesments">
                                <h3>
                                    Networking

                                </h3>
                                <p>
                                    Connect with other investors and founders to expand professional networks.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            <div className='faq-top-container'>

                <div id="faq" className="faq-container">
                    {/* <h2 className='faq-heading'>Investment Management Features</h2> */}
                    {faqs.map((faq) => (
                        <div key={faq.id} className="faq-item">
                            <div className="faq-header">
                                <button
                                    className={`dropdown-button ${faq.isOpen ? 'open' : ''}`}
                                    onClick={() => toggleFAQ(faq.id)}
                                >
                                    {faq.isOpen ? '▼' : '►'}
                                </button>
                                <h4>{faq.question}</h4>
                            </div>
                            {faq.isOpen && <h4 className='answer'>{faq.answer}</h4>}
                        </div>
                    ))}
                </div>

            </div>





            <div className="startup_benefit_container">
                <div className="assessment_heading_container">
                    <h2 className='comprensive-heading'>
                        Benefits for Startups                    </h2>
                </div>
                <div className='assesment_sub_container'>

                    <div className='startup_sub_container'>

                        <div class="flex flex-col items-center space-y-4">
                            <div className='-mb-6'>
                                <img width="54" height="54" src="https://img.icons8.com/3d-fluency/94/visible.png" alt="visible" />
                            </div>
                            <div class="assesments text-center">
                                <h3>Visibility</h3>
                                <p>Reach a wider pool of potential investors.</p>
                            </div>
                        </div>



                        <div class="flex flex-col items-center space-y-4">
                            <div className='-mb-6'>
                                <img width="54" height="54" src="https://img.icons8.com/external-beshi-flat-kerismaker/48/external-Connections-startup-beshi-flat-kerismaker.png" alt="external-Connections-startup-beshi-flat-kerismaker" />                            </div>
                            <div className="assesments text-center">
                                <h3>Connections
                                </h3>
                                <p>
                                    Forge meaningful relationships with investors.                                </p>

                            </div>
                        </div>

                        <div class="flex flex-col items-center space-y-4">
                            <div className='-mb-6'>
                                <img width="54" height="54" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-efficiency-productivity-flaticons-lineal-color-flat-icons-2.png" alt="external-efficiency-productivity-flaticons-lineal-color-flat-icons-2" />                            </div>
                            <div className="assesments text-center">
                                <h3>Efficiency
                                </h3>
                                <p>
                                    Streamline the fundraising process.
                                </p>
                            </div>
                        </div>


                        <div class="flex flex-col items-center space-y-4">
                            <div className='-mb-6'>
                                <img width="54" height="64" src="https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/64/external-efficiency-digital-globalization-parzival-1997-outline-color-parzival-1997.png" alt="external-efficiency-digital-globalization-parzival-1997-outline-color-parzival-1997" />
                            </div>
                            <div className="assesments text-center">
                                <h3>Growth
                                </h3>
                                <p>
                                    Access capital to fuel business expansion.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>









            <div class="management_container">
                <h2 className='py-10'>
                    Benefits for Investors
                </h2>
                <div class="management_sub">
                    <div class="management_image">
                        <img src='https://res.cloudinary.com/dso7gnmps/image/upload/v1721547217/51ZRsH_30He2mCH9Jxrf7_gcvxqd.png' alt='meeting' />
                    </div>

                    <div>
                        <div class="number_image">
                            <span className='pr-6'>
                                <img width="100" height="100" src="https://img.icons8.com/clouds/100/1.png" alt="1" />
                            </span>
                            <div>
                                <h3 className='mb-1'>Discovery</h3>
                                <p>Easily browse a curated selection of promising startups.</p>
                            </div>
                        </div>

                        <div class="number_image">
                            <span className='pr-6'>
                                <img width="110" height="110" src="https://img.icons8.com/clouds/100/2--v2.png" alt="2--v2" />
                            </span>
                            <div>
                                <h3 className='mb-1'>Evaluation</h3>
                                <p>Analyze comprehensive company profiles and performance data.</p>
                            </div>
                        </div>

                        <div class="number_image">
                            <span className='pr-6'>
                                <img width="100" height="100" src="https://img.icons8.com/clouds/100/3.png" alt="3" />                            </span>
                            <div>
                                <h3 className='mb-1'>Investment</h3>
                                <p>Streamline the investment process and manage portfolio.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <div className='footer-container'>
                <div className='footer-sub'>
                    <h1>Funding Platforms for Startups</h1>
                    <p>Fundraising platforms connect ambitious startups with accredited investors, providing tools to pitch ideas, research companies, and manage investments.</p>

                    <div className='py-4'>
                    <Link to='/role'>
                    <button className='explore-btn'>
                            Explore Platforms
                        </button></Link>

                        <Link to='/role'>
                    <button className='find_investor_btn'>
                    Find Investors
                        </button></Link>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default LandingPage;
