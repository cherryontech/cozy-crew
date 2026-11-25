import { useState } from 'react'
import { questions, type QuizAnswers } from '../../data/quizQuestions'
import QuestionStep from './QuestionStep'
import ReviewStep from './ReviewStep'
import Button from '../Button'

export default function PathfinderQuiz() {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState<QuizAnswers>({})

    const isReview = step === questions.length
    const current = questions[step]
    const isLastQuestion = step === questions.length - 1
    const hasAnswer = current ? Boolean(answers[current.id]) : true

    function handleSelect(value: string) {
        setAnswers((prev) => ({ ...prev, [current.id]: value }))
    }

  

    function handleNext(){
        setStep(step+1)
    }
 
    function handleBack(){
        if (step > 0) setStep(step - 1)
    }
  
    function handleEdit(index: number){
        setStep(index)
    }


    function handleSubmit(){
        localStorage.setItem('pathfinder-answers', JSON.stringify(answers))
        window.location.href = '/learning-path'
    }
    
    const nextLabel = isReview ? 'Get my learning suggestions' : isLastQuestion ? 'Review my answers' : 'Next'
    const nextAction = isReview ? handleSubmit : handleNext

    return (
        <div>
            {isReview ? (
                <ReviewStep answers={answers} onEdit={handleEdit} />
            ) : (
                <QuestionStep
                    question={current}
                    stepNumber={step + 1}
                    total={questions.length}
                    selected={answers[current.id]}
                    onSelect={handleSelect}
                />
            )}

            <div className="mt-6 flex justify-end gap-4">
                {step > 0 && (
                     <Button variant="secondary" onClick={handleBack}>Back</Button>
                    )}
                    <Button onClick={nextAction} disabled={!hasAnswer}>{nextLabel}</Button>
            </div>
        </div>
    )
}
