import DashboardLayout from "@/Layouts/DashboardLayout"

const Partners = (props) => {
    console.log("partners")

    return (
        <div>Hello Partners</div>
    )
}
Partners.layout = page => <DashboardLayout props={page.props} children={page} title="Partners" />

export default Partners