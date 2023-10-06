import { Response } from 'express';
import { Custom_Requst, EmailType } from '@custom-types/routes.d';
import inDevMode from '@utilities/developmet-mode';
import logger from '@utilities/color-logger';
import { transport } from '@utilities/common-utilities';

/**
 *
 * @param req - The Express.js request object with custom body object.
 * @param res - The Express.js response object.
 */

export async function sendEmail(req: Custom_Requst<EmailType>, res: Response) {

	const {emailDesc,emailSub,senderEmail,senderName} = req.body;

	try {
		await transport.sendMail({
			from:`"${senderName}" <${senderEmail}>`,
			to:'safin.ali.7205@gmail.com',
			subject:emailSub,
			text: emailDesc,
		});
		res.status(200).json('success');
	} catch (e: any) {
		inDevMode(() => logger.error(e.message));
		res.status(500).json('error');
	}
}