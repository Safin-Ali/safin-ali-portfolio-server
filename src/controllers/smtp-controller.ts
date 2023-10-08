import { CustomRequestBodyType, EmailType } from '@custom-types/routes.d';
import inDevMode from '@utilities/developmet-mode';
import logger from '@utilities/color-logger';
import { routeHandler, transport } from '@utilities/common-utilities';
import {render} from 'ejs';
import {resolve} from 'path';
import {readFileSync} from 'fs';

export const sendEmail = routeHandler<Promise<void>, CustomRequestBodyType<EmailType>>(async (req, res) => {

	const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const dateObj = new Date();

	const { emailDesc, emailSub, senderEmail, senderName } = req.body;

	const ISODate = `${monthsShort[dateObj.getMonth() + 1]} ${dateObj.getMonth()} ${dateObj.getFullYear()}`;

	try {
		const emailHtml = readFileSync(resolve(__dirname,'..','template', 'email-template.ejs'),'utf-8');
		await transport.sendMail({
			from: `'${senderName}' <${senderEmail}>`,
			to: 'safin.ali.7205@gmail.com',
			subject: `Email from Safin-Ali Portfolio`,
			html: render(emailHtml, {
				date: ISODate,
				senderEmail,
				emailDesc,
				emailSub,
				senderName
			})
		});
		res.status(200).json('success');
	} catch (e: any) {
		console.log(e.message);

		inDevMode(() => logger.error(e.message));
		res.status(500).json('error');
	}
});