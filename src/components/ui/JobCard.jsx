import { ArrowUpRight } from "lucide-react"
import { useNavigate } from "react-router-dom"


const JobCard = ({img, h1, p, icon1, icon2, icon3, icon4, projectId}) => {
    const navigate = useNavigate();
    
    const handleViewProject = () => {
        console.log('Navigating to project:', projectId);
        navigate(`/project/${projectId}`);
    };

    return (
        <div className="xl:w-[590px] lg:w-[460px] md:w-[610px] w-[90vw] md:h-fit h-fit bg-[#0C0E23] border border-[#363749] rounded-2xl flex flex-col px-4 py-4 md:p-8 lg:px-4 lg:py-6 gap-1">
            <div className="md:h-[350px] lg:h-[270px] xl:h-[350px]  h-[218px]  items-center "><img src={img} alt="Job"  /></div>
            <div className="text-left">
                <h1 className="text-[20px] md:text-[32px] font-bold text-white">{h1}</h1>
                <p className="text-[16px] mdtext-[20px] font-normal text-white mt-2 ">{p}</p>
            </div>
            <div className="flex md:pt-6 pt-4 md:gap-4 gap-2 justify-between flex-row items-center">
                <div className="flex flex-row ">
                 <div alt="Job" className="md:h-12 md:p-0 p-2 h-9 -ml-1 md:w-12 w-9 bg-linear-to-bl from-[#04071D] to-[#0C0E23] stroke-2 border border-[#363749] rounded-4xl flex justify-center items-center" >{icon1}</div>
                 <div alt="Job" className="md:h-12 md:p-0 p-2 h-9 -ml-1 md:w-12 w-9 bg-linear-to-bl from-[#04071D] to-[#0C0E23] stroke-2 border border-[#363749] rounded-4xl flex justify-center items-center" >{icon2}</div>
                 <div alt="Job" className="md:h-12 md:p-0 p-2 h-9 -ml-1 md:w-12 w-9 bg-linear-to-bl from-[#04071D] to-[#0C0E23] stroke-2 border border-[#363749] rounded-4xl flex justify-center items-center" >{icon3}</div>
                 <div alt="Job" className="md:h-12 md:p-0 p-2 h-9 -ml-1 md:w-12 w-9 bg-linear-to-bl from-[#04071D] to-[#0C0E23] stroke-2 border border-[#363749] rounded-4xl flex justify-center items-center" >{icon4}</div>
                </div>
                <div 
                    className="flex flex-row text-white gap-2 cursor-pointer hover:text-[#CBACF9] transition-colors duration-200"
                    onClick={handleViewProject}
                >
                 View Details
                 <span><ArrowUpRight /></span>
                </div>
            </div>
        </div>
    )
}

export default JobCard