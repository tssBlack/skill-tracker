import Header from "../components/dashboard/header";
import InfoBlock from "../components/dashboard/infoBlock";
import Board from "../components/dashboard/board";
import {TrendingUp, BookOpen, Target} from 'lucide-react'

function Dashboard() {

    return (
        <div className="container m-auto pt-8 flex flex-col gap-8">
            <Header/>
            <div className="grid grid-cols-3 gap-4">
                <InfoBlock title={'Total Skills'} icon={<BookOpen size={14}/>} description={0}/>
                <InfoBlock title={'Average level'} icon={<TrendingUp size={14}/>} description={0}/>
                <InfoBlock title={'Completed'} icon={<Target size={14}/>} description={0}/>
            </div>
            <Board/>
        </div>
    )
}

export default Dashboard;