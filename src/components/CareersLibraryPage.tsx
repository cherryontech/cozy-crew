import '../styles/careers-library.css';
import Button from './Button';
import ImageAsset from './ImageAsset';

import hero_community_woman_laptop from '../assets/promptful-assets/images/hero/hero-community-woman-laptop.png';
import roles_keep_going from '../assets/promptful-assets/images/editorial/roles-keep-going-collaboration.png';
import career_healthcare from '../assets/promptful-assets/icons/in-use/career-healthcare.svg';
import career_ux_design from '../assets/promptful-assets/icons/in-use/career-ux-design.svg';
import career_product_strategy from '../assets/promptful-assets/icons/in-use/career-product-strategy.svg';
import career_education from '../assets/promptful-assets/icons/in-use/career-education.svg';
import career_more_areas from '../assets/promptful-assets/icons/in-use/career-more-areas.svg';
import arrow_right_pink_20 from '../assets/promptful-assets/icons/library/arrow-right-20-pink.svg';
import sparkles_pink from '../assets/promptful-assets/icons/library/sparkles-20-pink.svg';

type GrowthLevel = 'High growth' | 'Moderate growth';

interface JobCardProps {
    title: string;
    description: string;
    skills: string[];
    growth: GrowthLevel;
}

interface CareerKnowledgeCard {
    logo: string;
    title: string
}

const job_cards: JobCardProps[] = [
    {
        title: 'AI Product Strategist',
        description: 'Turn customer and business needs into responsible AI product direction.',
        skills: ['Product & Strategy', 'Experiments', 'Analytics'],
        growth: 'High growth',
    },
    {
        title: 'UX Research Lead, AI',
        description: 'Guide ethical user research and build human insight into AI experiences.',
        skills: ['Research', 'Facilitation', 'Responsible AI'],
        growth: 'High growth',
    },
    {
        title: 'Learning Experience Designer',
        description: 'Create adaptive learning journeys that help people build practical AI skills.',
        skills: ['Content systems', 'Education', 'Facilitation'],
        growth: 'High growth',
    },
];

const knowledge_cards: CareerKnowledgeCard[] = [
    { logo: career_healthcare, title: 'Healthcare' },
    { logo: career_ux_design, title: 'UX & Design' },
    { logo: career_product_strategy, title: 'Product & Strategy' },
    { logo: career_education, title: 'Education' },
    { logo: career_more_areas, title: 'More Career Areas' },
];

const CareersLibraryPage = () => {
    return (<>
        <section className='cl-hero-section'>
            <div className='cl-hero-content'>
                <div className='tag text-body3'>CAREERS LIBRARY</div>
                <h1 className='font-bold'>Find the job in which your skills can go further</h1>
                <p className='text-body2 p-text'>
                    Explore career paths that work with AI, get the skills employers value, and take a
                    practical learning path at your pace, all designed with women's lives, jobs, and
                    career transitions in mind.
                </p>
                <Button variant='primary' href='/learning-path' icon={null} className='cl-hero-btn'>Explore job pathways →</Button>
            </div>
            <div className='cl-hero-image-wrap'>
                <figure className='cl-hero-figure'>
                    <ImageAsset
                        asset={hero_community_woman_laptop}
                        alt="Woman working on a career framework at a laptop in a modern office"
                    />
                    <div className='cl-stat-card'>
                        <p className='cl-stat-text'>+319 roles in our growing library</p>
                    </div>
                </figure>
            </div>
        </section>
        <section className='cl-momentum-section'>
            <div className='section-container'>
            <div className='cl-momentum-header'>
                <div className='cl-momentum-title-group'>
                    <div className='tag text-body3'>JOBS WITH MOMENTUM</div>
                    <h2 className='font-bold cl-momentum-heading'>Careers with high AI growth</h2>
                </div>
                <select className='cl-filter-select' aria-label="Filter roles">
                    <option>All roles</option>
                    <option>All roles?</option>
                    <option>All roles!</option>
                </select>
            </div>
            <div className='cl-job-card-list'>
                {job_cards.map(card => (
                    <JobCard
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        skills={card.skills}
                        growth={card.growth}
                    />
                ))}
            </div>
            </div>
        </section>
        <section className='currently-know-section'>
            <div className='section-container'>
                <div className='currently-know-header'>
                    <div className='tag text-body3'>START WITH WHAT YOU ALREADY KNOW</div>
                    <h2 className='font-bold'>Add to your current skill set</h2>
                    <p className='text-body2 p-text'>
                        Every learning pathway teaches you AI techniques that work with your current career knowledge.
                    </p>
                </div>
                <div className='currently-know-card-list'>
                    {knowledge_cards.map(card => (
                        <CareerKnowledgeCard key={card.title} logo={card.logo} title={card.title} />
                    ))}
                </div>
            </div>
    </section>        
        <section className='career-based-section'>
            <div className='section-container'>
                <div className='career-based-header'>
                    <div className='tag text-body3'>CAREER-BASED LEARNING</div>
                    <h2 className='font-bold'>From UX designer to AI experience strategist</h2>
                    <p className='text-body2 p-text'>Learn AI framing, evaluation, and facilitation in a relevant, guided learning pathway.</p>
                </div>
                <Button variant='primary' href='/learning-path' icon={null} className='career-based-btn'>View my pathway →</Button>
            </div>
        </section>
        <section className='keep-going-section'>
            <div className='section-container'>
                <div className='keep-going-header'>
                    <div className='tag text-body3'>KEEP GOING</div>
                    <h2 className='font-bold'>AI is for everyone</h2>
                    <p className='text-body2 p-text'>Everyone can get better at a skill if they keep practicing. Growing in AI allows women and their peers to grow in their careers and get the job and recognition they deserve.</p>
                </div>
                <div className='keep-going-image-wrap'>
                    <div className='keep-going-figure'>
                    <ImageAsset asset={roles_keep_going} alt='image of five wommen at a table'/>
                    </div>
                </div>
            </div>
        </section>
        <section className='start-journey-section'>
            <div className='section-container'>
            <div className='start-journey-header'>
                <div className='tag text-body3'>START YOUR JOURNEY TODAY</div>
                <h2 className='font-bold'>Discover a learning path that moves you forward</h2>
                <p className='text-body2 p-text'>Answer a few questions and get a career-based learning path shaped around your experience and goals.</p>
            </div>
            <Button variant='primary' href='/learning-path' icon={null} className='start-journey-btn'>Find my learning path →</Button>
            </div>
        </section>
    </>);
};

const JobCard = ({ title, description, skills, growth }: JobCardProps) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return (
        <div className='cl-job-card'>
            <div className='cl-job-card-top'>
                <span className='cl-job-icon-bg' aria-hidden="true">
                    <ImageAsset asset={sparkles_pink} alt="" />
                </span>
                <span className='status green'>{growth}</span>
            </div>
            <div className='cl-job-card-body'>
                <h3 className='font-bold'>{title}</h3>
                <p className='text-body3 p-text'>{description}</p>
                <p className='text-body3 cl-skills'>{skills.join(' · ')}</p>
                <a href={`/${slug}`} className='text-body3 cl-role-link'>View {title} role →</a>
            </div>
        </div>
    );
};

const CareerKnowledgeCard = ({ logo, title }: CareerKnowledgeCard) => {
    return (
        <div className='currently-know-card'>
            <ImageAsset
                className='currently-know-icon'
                asset={logo}
                alt={`Icon representing ${title}`}
            />
            <div className='text-body2'>{title}</div>
            <ImageAsset asset={arrow_right_pink_20} alt="" />
        </div>
    );
};

export default CareersLibraryPage;