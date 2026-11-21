import '../styles/careers-library.css';
import Button from './Button';
import ImageAsset from './ImageAsset';

import hero_careers_image from '../assets/promptful-assets/images/hero/hero-home-woman-laptop.png';
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
                <Button variant='primary' href='/#' icon={null}>Explore job pathways →</Button>
            </div>
            <div className='cl-hero-image-wrap'>
                <figure className='cl-hero-figure'>
                    <ImageAsset
                        asset={hero_careers_image}
                        alt="Woman working on a career framework at a laptop in a modern office"
                    />
                    <div className='cl-stat-card'>
                        <p className='cl-stat-text'>+319 roles in our growing library</p>
                    </div>
                </figure>
            </div>
        </section>
        <section className='cl-momentum-section'>
            <div className='cl-momentum-header'>
                <div className='cl-momentum-title-group'>
                    <div className='tag text-body3'>JOBS WITH MOMENTUM</div>
                    <h2 className='font-bold cl-momentum-heading'>Careers with high AI growth</h2>
                </div>
                <select className='cl-filter-select' aria-label="Filter roles">
                    <option>All roles</option>
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
        </section>
        <section className='currently-know-section'></section>
        <section className='career-based-section'></section>
        <section className='keep-going-section'></section>
        <section className='start-journey-section'></section>
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

const CareerKnowledgeCard = ({logo, title}: CareerKnowledgeCard) => {
    <div>
        <ImageAsset/>
        <h2>{title}</h2>
        
    </div>
}

export default CareersLibraryPage;