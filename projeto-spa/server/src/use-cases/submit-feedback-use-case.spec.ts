import { SubmitFeedbackUseCase } from "./submit-feedback-use-cases"

describe("Submit Feedback", () => {
    it('shouldbe able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            {create: async() => {}},
            { sendMail: async() => {}}
        )
        

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'Arroz feijao'
        })).resolves.not.toThrow()
    })
})