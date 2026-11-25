import { questions, type QuizAnswers } from '../../data/quizQuestions'
import Button from '../Button'

type ReviewStepProps = {
    answers: QuizAnswers
    onEdit: (index: number) => void
}

export default function ReviewStep({ answers, onEdit }: ReviewStepProps) {
    return (
        <section>
            <p className="eyebrow">Review your answers</p>
            <h1>Let's make sure this feels right</h1>
            <p>You can change any answer before we create your personalized suggestions.</p>

            <dl className="mt-10">
                {questions.map((q, index) => (
                    <div key={q.id} className="border-t border-[#e8e4df] py-6">
                        <dt className="text-xs uppercase tracking-[0.08em]">{q.reviewLabel}</dt>
                        <dd className="mt-2 flex items-center justify-between font-semibold text-foreground">
                            {answers[q.id]}
                            <Button
                                variant="link"
                                onClick={() => onEdit(index)}
                                aria-label={`Edit ${q.reviewLabel}`}
                            >
                                Edit
                            </Button>
                        </dd>
                    </div>


                ))}
            </dl>
        </section>
    )
}
