import type { QuizQuestion } from '../../data/quizQuestions'

type QuestionStepProps = {
    question: QuizQuestion
    stepNumber: number           // 1-based, for "Question 1 of 3"
    total: number
    selected?: string            // the current answer, if any
    onSelect: (value: string) => void
}

export default function QuestionStep({ question, stepNumber, total, selected, onSelect }: QuestionStepProps) {
    return (
        <fieldset>
            <legend className="eyebrow">{question.eyebrow}</legend>
            <p>Question {stepNumber} of {total}</p>
            {/* ProgressBar goes here: value={stepNumber} max={total} */}

            <h2>{question.title}</h2>
            <p>{question.description}</p>

            <div className="grid gap-4 sm:grid-cols-2">
                {question.options.map((option) => (
                    // the form control component goes here

                    <label key={option}><input type="radio" name={question.id} checked={selected === option} onChange={() => onSelect(option)} /> {option}</label>
            
                ))}
            </div>
        </fieldset>
    )
}
