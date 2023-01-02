import DashboardLayout from "@/Layouts/DashboardLayout"

const Users = (props) => {
    console.log('users')

    return (
        <div>Hello {props.auth.user.name}</div>
    )
}
Users.layout = page => <DashboardLayout props={page.props} children={page} title="Users" />

export default Users