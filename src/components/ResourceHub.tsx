import '../styles/resource-hub.css';
import Button from './Button';
import { Select, Option } from './FormControl'

const ResourceHub = () => {
    return (<>
        <section className='rh-hero-section'>
            <div className="section-container">
                <div className='top-container'>
                    <div className="tag text-body3">RESOURCE HUB</div>
                    <h1 className='font-bold'>Discover other lessons from around the web</h1>
                    <div className='p-wrapper'>
                        <p className='text-body2 p-text'>Check out these Al lessons and resources from Al professionals outside Promptful. Compare each source, lesson format, learning time, course price, and skill level to choose the best resource for you before you commit. These external resources will take you off our website and open in a new tab.</p>
                        <p className='text-body2 p-text'>Like a lesson but not ready to start? Save it to My Progress to begin later.</p>
                    </div>
                </div>                

                <div className='external-resources section-purple'>
                    <div className='section-container'>
                        <div className='tag-container'>
                            <div className="tag text-body3">BEFORE YOU GO</div>
                        </div>
                        <h3 className='title font-bold'>About external resource</h3>
                        <p className='description text-body2 p-text'>
                            The learning resources on this page are provided by third-party organizations. Opening their links will take you outside Promptful. Although we approve external sites by relevance, keep in mind that each site maintains its own content, accessibility, privacy, and security practices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="rh-career-area-section">
            <div className="section-container">
                <div className='career-area-select'>
                    <Select label='Career area'/>
                    <Select label='Level'/>
                </div>
                
            </div>
        </section>
        <section className="rh-feedback-section section-purple">
            <div className="section-container">
                <div className="tag text-body3">LEAVE US FEEDBACK</div>
                <h3 className='title font-bold'>Know a resource that you think we should add? See a broken or incorrect link?</h3>
                <p className='description text-body2 p-text'>Fill out the related form to let us know. We'll review the answers before deciding to add suggested resources or fix reported errors.</p>
                <div className='btn-list'>
                    <Button variant='secondary' className='' icon={null} href='#'>Suggest a resource</Button>
                    <Button variant='secondary' className='' icon={null} href='#'>Report an issue</Button>
                </div>
            </div>
        </section>
    </>);
}

const CareerAreaCard = () => {
    return (<div className="career-area-card">
        <div className="tag"></div>
        <div className="title"></div>
        <p className="description"></p>
        <div className="stats">
            <div className="source"></div>
            <div className="format"></div>
            <div className="time"></div>
            <div className="price"></div>
            <div className="level"></div>
        </div>
        <div className='btn-list'>
            <Button></Button>
            <Button></Button>
        </div>
    </div>);
}

export default ResourceHub;
