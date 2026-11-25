import '../styles/home-page.css';
import Button from './Button'
import ImageAsset from './ImageAsset';

import hero_home_image from '../assets/promptful-assets/images/hero/hero-home-woman-laptop.png';
import personalized_lessons_icon from '../assets/promptful-assets/icons/in-use/benefit-personalized-lessons.svg';
import real_world_icon from '../assets/promptful-assets/icons/in-use/benefit-real-world-application.svg';
import supprtive_icon from '../assets/promptful-assets/icons/in-use/benefit-supportive-communities.svg';

import career_healthcare from "../assets/promptful-assets/icons/in-use/career-healthcare.svg";
import career_ux_design from '../assets/promptful-assets/icons/in-use/career-ux-design.svg';
import career_product_strategy from '../assets/promptful-assets/icons/in-use/career-product-strategy.svg';
import career_education from '../assets/promptful-assets/icons/in-use/career-education.svg';

import arrow_right_pink_20 from '../assets/promptful-assets/icons/library/arrow-right-20-pink.svg';
import arrow_right_ink_16 from '../assets/promptful-assets/icons/library/arrow-right-16-ink.svg';

import corner_down_left_44_pink from '../assets/promptful-assets/icons/library/corner-down-left-44-pink.svg';

const path_cards = [
    { icon: personalized_lessons_icon, bg_color: "pink", title: "Personalized Lessons", text: "Learn AI skills tailored to your job and career goals."},
    { icon: real_world_icon, bg_color: "purple", title: "Real-world application", text: "Build confidence in using AI in your work."},
    { icon: supprtive_icon, bg_color: "blue", title: "Supportive communities", text: "Learn with other women and peers on a similar journey."},
];

const exploration_cards = [
    { icon: career_healthcare, title: "Healthcare"},
    { icon: career_ux_design, title: "UX & Research"},
    { icon: career_product_strategy, title: "Product & Strategy"},
    { icon: career_education, title: "Education"},
];


type PathIconVariant = "pink" | "purple" | "blue";

interface PathCardProps {
    icon: SVGElement;
    bg_color: PathIconVariant;
    title: string;
    text: string;
}
interface ExplortationCardProps {
    icon: SVGElement;
    title: string;
}


const HomePage = () => {
    return (<>
        <section className='hero-section'>
            <div className="section-container">
                <div className="left-container-hero">
                    <div className='tag text-body3'>CRAFTING PATHS & GUIDING FUTURES</div>
                    <h1 className='font-bold'>Grow in AI. Direct your future.</h1>
                    <p className='text-body2 p-text'>
                        We at PROMPTFUL aim to encourage women and other underrepresented genders to grow AI skills for today's job market. Many jobs now rely on AI, but women and other underrepresented genders often don't receive the necessary AI training. That ends today with PROMPTFUL.
                    </p>
                    <p className='text-body2 p-text'>
                        Ready to begin your AI learning journey? Take our Pathfinder Quiz to get personalized lessons and explore curated resources from around the web to upskill in AI for your career. The workforce is evolving, and you change along with it.
                    </p>
                    <Button variant='primary' icon={arrow_right_ink_16} href="/#" className="hero-btn">Start learning</Button>
                </div>
                <div className="image-container-hero">
                    <ImageAsset asset={hero_home_image} alt="hero image of a woman with a laptop" width={600}/>
                </div>
            </div>
            
        </section>
        <section className='path-section'>
            <div className='section-container'>
            <div className='section-container-path'>
                <div className='left-container-path'>
                    <div className='tag text-body3'>YOUR OWN PATH</div>
                    <h2 className='font-bold'>Courses designed for you</h2>
                    <p className='text-container text-body3 p-text'>Set your career area, current AI skill level, and daily learning time to get personalized AI lessons with practical applications and real-world exercises.</p>
                    <Button variant='primary' icon={null} href="/#" className='path-section-btn'>Take the Pathfinder Quiz to create my learning path</Button>
                </div>
                    <div className="path-section-card">
                        <h3 className='font-bold'>How our 3-question quiz works</h3>
                        <ol>
                            <li className="text-body3">1. <span>Choose your career area.</span></li>
                            <li className="text-body3">2. <span>Set your current AI skill level.</span></li>
                            <li className="text-body3">3. <span>Choose your daily learning time.</span></li>
                        </ol>
                    </div>
                <div className="righthand-flourish">
                    <div>Your goals.</div>
                    <div>Your path.</div>
                    <div><ImageAsset asset={corner_down_left_44_pink} alt="corner arrow"/></div>
                </div>
            </div>
            </div>
            <div className='section-container'>
                <div className='path-card-list'>
                    {path_cards.map(card => (
                            <PathCard icon={card.icon} bg_color={card.bg_color} title={card.title} text={card.text}/>
                    ))}
                </div>
            </div>
        </section>
        <section className='exploration-section'>
        <div className='section-container'>
            <div className='text-container'>
                <div className='tag text-body3'>COMMON LEARNING PATHS</div>
                <h2 className='font-bold'>Explore by career area</h2>
                <p className='p-text'>Skip the Pathfinder Quiz and dive straight into learning in your field.</p>
            </div>

                <div className='exploration-card-list'>
                    {exploration_cards.map(card => (
                        <ExplorationCard icon={card.icon} title={card.title}/>
                    ))}
                </div> 
            </div>
            <Button variant='secondary' icon={arrow_right_ink_16} href="/#">Explore our Career Library </Button>
        </section>
        <section className='communities-section'>
            <div className='tag'>GROW WITH PEERS</div>
            <h2 className='font-bold'>Become a part of one of our many communities</h2>
            <p className='text-container p-text'>Learning is better when done together. Join PROMPTFUL communities to connect with peers, share what you’re learning, and get support on your learning journey.</p>
            <Button variant='secondary' icon={arrow_right_ink_16} href="/#">Learn about our Communities</Button>
        </section>
    </>);
}

const PathCard = ({icon, bg_color, title, text}: PathCardProps) => {
    return (
        <div className='path-card'>
            <ImageAsset className="path-icon purple" asset={icon} alt={`Icon representing ${title}`}/>
            <div className='text-container'>
                <div className="text-body2">{title}</div>
                <div className='text-body3 p-text'>{text}</div>
            </div>
        </div>
    );
}

const ExplorationCard = ({icon, title}: ExplortationCardProps) => {
    return (<div className='exploration-card'>
        <ImageAsset className="icon" asset={icon} alt={`Icon representing ${title}`}/>
        <div className='text-body3'>{title}</div>
        <ImageAsset asset={arrow_right_pink_20} alt="arrow at bottom of exploration card"/>
    </div>);
}

export default HomePage;