import { defineAction, ActionError } from "astro:actions"
import { z } from "astro:content"
import { Resend } from "resend"

export const server = {
    sendEmail: defineAction({
		input: z.object({
			name: z.string().min(1),
			email: z.string().email(),
			subject: z.string().min(1),
			message: z.string().min(1),
		}),
        handler: async (input, { request, locals }): Promise<any> => {
			let targetEmail = "contact@lafeedescailloux.fr"

			const key = request.headers.get("x-api-key")
			if (key === locals.runtime.env.UPTIME_KEY) {
				targetEmail = "delivered@resend.dev"
				input = {
					name: "Uptime Robot",
					email: "contact@minarox.fr",
					subject: "Uptime Robot - La Fée des Cailloux",
					message: "Lorem ipsum"
				}
			}

			const resend = new Resend(locals.runtime.env.RESEND_API_KEY)

			const { data, error } = await resend.emails.send({
				from: `${input.name} <${targetEmail}>`,
				to: targetEmail,
				subject: input.subject,
				text: input.message,
				replyTo: input.email
			})

			if (error) {
				throw new ActionError({
					code: "BAD_REQUEST",
					message: error.message
				  })
			}

			return data
		}
    })
}
