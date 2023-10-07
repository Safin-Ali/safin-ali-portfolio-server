import { CustomRequestBodyType, EmailType } from '@custom-types/routes.d';
import inDevMode from '@utilities/developmet-mode';
import logger from '@utilities/color-logger';
import { readFileAsync, resolveWithRoot, routeHandler, transport } from '@utilities/common-utilities';
import ejs from 'ejs';

export const sendEmail = routeHandler<Promise<void>, CustomRequestBodyType<EmailType>>(async (req, res) => {

	const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const dateObj = new Date();

	const { emailDesc, emailSub, senderEmail, senderName } = req.body;

	const ISODate = `${monthsShort[dateObj.getMonth() + 1]} ${dateObj.getMonth()} ${dateObj.getFullYear()}`;

	try {
		readFileAsync(resolveWithRoot('template', 'email-template.ejs'), async (data) => {
			await transport.sendMail({
				from: `'${senderName}' <${senderEmail}>`,
				to: 'safin.ali.7205@gmail.com',
				subject: `Email from Safin-Ali Portfolio`,
				html: ejs.render(data, {
					date: ISODate,
					senderEmail,
					emailDesc,
					emailSub,
					senderName
				})
			});
			res.status(200).json('success');
		});
	} catch (e: any) {
		inDevMode(() => logger.error(e.message));
		res.status(500).json('error');
	}
});