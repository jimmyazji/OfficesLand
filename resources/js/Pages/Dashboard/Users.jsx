import Table from "@/Components/Dashboard/Table"
import DashboardLayout from "@/Layouts/DashboardLayout"
import JSONdata from '@/fixtures/MOCK_DATA'

const Users = (props) => {
    const MOCK_DATA = JSONdata
    console.log('users')

    return (
        <main className="w-[90%] mx-auto mt-12 ">
            <div className="flex justify-end">
                <Table.Search />
            </div>
            <Table.Container >
                <Table>
                    <thead>
                        <tr className="bg-minorBackground text-primary uppercase">
                            <Table.HeaderCells scope="col" className="px-6 py-3 ">Name</Table.HeaderCells>
                            <Table.HeaderCells scope="col" className="px-6 py-3 ">Email </Table.HeaderCells>
                            <Table.HeaderCells scope="col" className="px-6 py-3 ">Postion</Table.HeaderCells>
                            <Table.HeaderCells scope="col" className="px-6 py-3">Action</Table.HeaderCells>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_DATA.map((item) => {
                            return (
                                <tr className="border-b border-minorBackground text-accent" key={item.id}>
                                    <Table.DataCells scope="row" className="px-6 py-4">{item.first_name + " " + item.last_name}</Table.DataCells>
                                    <Table.DataCells scope="row" className="px-6 py-4">{item.email}</Table.DataCells>
                                    <Table.DataCells scope="row" className="px-6 py-4">{item.position}</Table.DataCells>
                                    <Table.DataCells scope="row" className="px-6 py-4" >
                                        <div className="flex flex-row gap-3">
                                            <button className="font-medium text-blue-800 hover:underline">Edit </button>
                                            <button className="font-medium text-red-800 hover:underline">Delete </button>
                                        </div>
                                    </Table.DataCells>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Table.Container>
            <Table.Pagination />
        </main>
    )
}
Users.layout = page => <DashboardLayout props={page.props} children={page} title="Users" />

export default Users