import SocialMedia from './SocialMedia'
import CopyRight from './CopyRight'

export default function FooterContainer() {
    return (
        <footer id='footer' className='w-full h-full bg-minorBackground'>
            <div className="container mx-auto min-w-full flex flex-col gap-4 items-center ">
                <SocialMedia>
                    <SocialMedia.Container>
                        <SocialMedia.Logo URL={'/'} />
                        <SocialMedia.Facebook URL={'https://www.facebook.com/spacetoongo'} />
                        <SocialMedia.Instagram URL={'https://www.instagram.com/spacetoongo'} />
                        <SocialMedia.Twitter URL={'https://www.twitter.com/spacetoongo'} />
                    </SocialMedia.Container>
                </SocialMedia>
            </div>
            <div className='border-t-2 border-accent '>
                <CopyRight>
                    <CopyRight.Container>
                        Offices Land 2010-2022
                    </CopyRight.Container>
                </CopyRight>
            </div>
        </footer>
    )
}
