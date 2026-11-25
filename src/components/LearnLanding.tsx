import Button from './Button'

const details = ['3 questions', 'About 2 minutes', 'No sign-up required']

function ArrowIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    )
}

export default function LearnLanding() {
    return (
        <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-black/10 bg-white px-6 py-16 text-center shadow-sm md:px-16">
            <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">
                Two ways to learn
            </p>

            <h1 className="text-foreground font-bold">
                Find your starting point
            </h1>

            <p className="text-body1 max-w-2xl text-gray-600">
                Answer three quick questions to receive lesson suggestions based
                on your job, AI experience, and available learning time.
            </p>

            <ul className="flex flex-wrap justify-center gap-3">
                {details.map((detail) => (
                    <li
                        key={detail}
                        className="bg-secondary rounded-full px-4 py-2 text-sm font-semibold text-purple-800"
                    >
                        {detail}
                    </li>
                ))}
            </ul>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                <Button
                    href="/pathfinder-quiz"
                    icon={<ArrowIcon />}
                    iconPosition="end"
                >
                    Start our Pathfinder Quiz
                </Button>
                <Button
                    href="/resources"
                    variant="secondary"
                    icon={<ArrowIcon />}
                    iconPosition="end"
                    className="border-2"
                >
                    Browse our Resource Hub instead
                </Button>
            </div>
        </section>
    )
}
