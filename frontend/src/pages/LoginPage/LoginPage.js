import signin from '../../assets/signin.png';
import LoginForm from '../../Components/Login/Login';

const LoginPage = () => {
    return (
        <div className="md:grid md:grid-cols-2 md:gap-5 flex h-screen justify-center items-center">
            <div className="pr-10 hidden md:flex">
                <img src={signin} width={400} height={400} className="w-full h-[700px]" />
            </div>
            <div>
                <div className="flex flex-col md:items-start md:mt-20 gap-10 md:p-10 items-center mt-20">
                    <div className="flex flex-col items-center">
                        <h2 className="text-white text-center text-2xl md:text-5xl mb-5">Sign In</h2>
                        <h4 className="text-center text-sm md:text-xl">
                            Welcome back! Please sign in to manage your fundraising campaigns
                        </h4>
                        <h4 className="text-center text-sm md:text-xl">and track donations.</h4>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;