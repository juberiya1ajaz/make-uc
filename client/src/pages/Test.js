import React, { useState } from 'react';

export default function Test() {
    const questions = [
        {
            questionText: 'From what is the Caterpillar in Alice’s Adventures in Wonderland smoking?           ',
            answerOptions: [
                { answerText: 'A pipe', isCorrect: false },
                { answerText: 'An apple', isCorrect: false },
                { answerText: 'A hooka', isCorrect: true },
                { answerText: 'An banana', isCorrect: false },
            ],
        },
        {
            questionText: 'Which character does Alice scare away with talk of her cat Dinah?',
            answerOptions: [
                { answerText: 'The Mock Turtle', isCorrect: false },
                { answerText: 'The Mouse', isCorrect: true },
                { answerText: 'The  March Hare', isCorrect: false },
                { answerText: 'The Knave of Hearts', isCorrect: false },
            ],
        },
        {
            questionText: 'Which character seems to have a fondness for treacle?',
            answerOptions: [
                { answerText: 'The doormouse', isCorrect: true },
                { answerText: 'The came', isCorrect: false },
                { answerText: 'The dod', isCorrect: false },
                { answerText: 'The lory', isCorrect: false },
            ],
        },
        {
            questionText: 'Who has condemned the Mad Hatter to perpetual teatime?',
            answerOptions: [
                { answerText: 'Alice', isCorrect: false },
                { answerText: 'The Queen of Hearts', isCorrect: false },
                { answerText: 'The March Hare', isCorrect: false },
                { answerText: 'Time', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='grid place-items-center'>
            <div className='bg-gray-700 p-5 flex text-white w-[36rem] h-[18rem] rounded-xl shadow-xl mt-16'>
                {showScore ? (
                    <div className='flex text-2xl items-center text-center'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='w-full relative'>
                            <div className='mb-5'>
                                <span className='text-3xl'>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='mb-3'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='w-full flex flex-col justify-between'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className="p-2 border-2 border-secondary rounded-xl my-2" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}