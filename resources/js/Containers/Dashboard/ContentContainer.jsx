import { Content } from '@/Components/Dashboard'

export default function ContentContainer({ auth }) {
    return (
        <Content>
            <Content.Header>
                <Content.Dropdown auth={auth} />
            </Content.Header>
            content
        </Content>
    )
}
