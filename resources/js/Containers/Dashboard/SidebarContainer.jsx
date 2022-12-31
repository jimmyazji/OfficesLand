import { Sidebar } from '@/Components/Dashboard'
import { BiUser } from 'react-icons/bi'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'

export default function HeaderContainer() {
    return (
        <Sidebar>
            <Sidebar.Header>
                <Sidebar.Logo />
            </Sidebar.Header>
            <Sidebar.Body>
                <Sidebar.List>
                    <Sidebar.Title>Menu</Sidebar.Title>
                    <Sidebar.Item>
                        <BiUser />
                        <p>Users</p>
                    </Sidebar.Item>
                    <Sidebar.Item>
                        <MdProductionQuantityLimits />
                        <p>Products</p>
                    </Sidebar.Item>
                    <Sidebar.Item>
                        <HiUserGroup />
                        <p>Partners</p>
                    </Sidebar.Item>
                </Sidebar.List>
            </Sidebar.Body>
        </Sidebar>
    )
}