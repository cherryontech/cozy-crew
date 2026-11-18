export type QuizQuestion = {
    id: 'career' | 'skill' | 'time'
    eyebrow: string
    reviewLabel: string
    title: string
    description: string
    options: string[]
}

export const questions: QuizQuestion[] = [
    {
        id: 'career',
        eyebrow: 'YOUR CAREER AREA',
        reviewLabel: 'Career area',
        title: 'What kind of work do you do?',
        description:
            "Choose the field that fits your job best. If you’d like to learn lessons from a field outside your own, select that field instead.",
        options: ['Healthcare', 'UX & Research', 'Product & Strategy', 'Education'],
    },
    {
        id: 'skill',
        eyebrow: 'YOUR AI SKILL LEVEL',
        reviewLabel: 'AI skill level',
        title: 'What is your current AI skill level?',
        description:
            "Choose the level that describes your current AI skills. There’s no wrong answer. Your lessons will meet you where you are.",
        options: ['Beginner', 'Learning', 'Intermediate', 'Advanced'],
    },
    {
        id: 'time',
        eyebrow: 'YOUR LEARNING TIME',
        reviewLabel: 'Learning time',
        title: 'What’s the least amount of time that you have daily for lessons?',
        description:
            "There’s no wrong answer here either. Each option allows you to accomplish something every day.",
        options: ['5 minutes', '10 minutes', '15 minutes', '30 minutes'],
    },
   
]

export type QuizAnswers = Partial<Record<QuizQuestion['id'], string>>
