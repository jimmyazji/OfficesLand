import { Footer, SocialMedia, CopyRight } from '@/Components/Client'

export default function FooterContainer() {
    return (
        <>
            <Footer >
                <Footer.Container>
                    <SocialMedia>
                        <SocialMedia.Container>
                            <SocialMedia.Logo URL={'/'} />
                            <SocialMedia.Facebook URL={'https://www.facebook.com/spacetoongo'} />
                            <SocialMedia.Instagram URL={'https://www.instagram.com/spacetoongo'} />
                            <SocialMedia.Twitter URL={'https://www.twitter.com/spacetoongo'} />
                        </SocialMedia.Container>
                    </SocialMedia>
                </Footer.Container>
            </Footer>
            <CopyRight>
                <CopyRight.Container>
                    <CopyRight.CompanyName>Offices Land 2010-2022 </CopyRight.CompanyName>
                </CopyRight.Container>
            </CopyRight>
        </>
    )
}
