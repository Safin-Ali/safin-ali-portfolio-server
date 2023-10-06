import { CustomRequestBodyType, EmailType } from '@custom-types/routes.d';
import inDevMode from '@utilities/developmet-mode';
import logger from '@utilities/color-logger';
import { routeHandler, transport } from '@utilities/common-utilities';

export const sendEmail = routeHandler<Promise<void>,CustomRequestBodyType<EmailType>>(async (req, res) => {

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
});