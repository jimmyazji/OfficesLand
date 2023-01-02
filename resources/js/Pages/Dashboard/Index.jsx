import DashboardLayout from "@/Layouts/DashboardLayout"

const Dashboard = (props) => {
    return (
        <div>Hello this is the dashboard</div>
    )
}
Dashboard.layout = page => <DashboardLayout props={page.props} children={page} title="Dashboard" />

export default Dashboard