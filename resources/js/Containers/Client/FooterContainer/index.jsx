import SocialMedia from './SocialMedia'
import CopyRight from './CopyRight'

export default function FooterContainer() {
    return (
        <footer>
            <section id='footer' className='w-full h-full bg-minorBackground'>
                <div className="flex flex-col gap-4 items-center max-w-[1240px] mx-auto">
                    <SocialMedia>
                        <SocialMedia.Container>
                            <SocialMedia.Logo URL={'/'} />
                            <SocialMedia.Facebook URL={'https://www.facebook.com/spacetoongo'} />
                            <SocialMedia.Instagram URL={'https://www.instagram.com/spacetoongo'} />
                            <SocialMedia.Twitter URL={'https://www.twitter.com/spacetoongo'} />
                        </SocialMedia.Container>
                    </SocialMedia>
                </div>
            </section>
            <CopyRight>
                <CopyRight.Container>
                    <CopyRight.CompanyName>Offices Land 2010-2022 </CopyRight.CompanyName>
                </CopyRight.Container>
            </CopyRight>
        </footer>
    )
}
