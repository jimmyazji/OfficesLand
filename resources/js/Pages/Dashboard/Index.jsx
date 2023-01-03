import DashboardLayout from "@/Layouts/DashboardLayout"

const Dashboard = (props) => {
    console.log("index")

    return (
        <div>Hello this is the dashboard</div>
    )
}
Dashboard.layout = page => <DashboardLayout props={page.props} children={page} title="Dashboard" />

export default Dashboard