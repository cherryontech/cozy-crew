import '../styles/about.css';

import ImageAsset from './ImageAsset';
import Button from './Button';

import hero_about_women_laptop from '../assets/promptful-assets/images/hero/hero-about-two-women-laptop.png';
import story_workshop from '../assets/promptful-assets/images/editorial/about-story-workshop.png';
import team_leila_morgan from '../assets/promptful-assets/images/team/team-leila-morgan.png';
import team_mai_tran from '../assets/promptful-assets/images/team/team-mai-tran.png';
import team_nia_okafor from '../assets/promptful-assets/images/team/team-nia-okafor.png';
import team_sofia_alvarez from '../assets/promptful-assets/images/team/team-sofia-alvarez.png';

const AboutPage = () => {
    return (<>
        <section className="hero-section">
            <div className='section-container'>
                <div className='left-container-hero'> 
                    <div className='tag-container'>
                        <div className='tag'>ABOUT</div>
                    </div>
                    <h1 className='font-bold'>We are Promptful</h1>
                    <div className='text-body2'>We want to close the gap between potential and opportunity for women and queer people by encouraging them to use AI in their everyday work.</div>
                    <div className='button-container'>
                        <Button variant='primary' href='#' icon={null}>Explore my learning path</Button>
                    </div>
                </div>
                <div className='image-container'>
                    <ImageAsset asset={hero_about_women_laptop} alt="image of two women with a laptop"/>
                </div>
            
            </div>
        </section>
        <section className="mission-section"></section>
        <section className="story-section"></section>
        <section className="problem-section"></section>
        <section className="learning-section"></section>
        <section className="values-section"></section>
        <section className="impact-section"></section>
        <section className="teammember-section"></section>
        <section className="quiz-section"></section>
    </>);
}


export default AboutPage;