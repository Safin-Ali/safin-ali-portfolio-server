import {render} from 'ejs';
import {resolve} from 'path';
import {readFileSync} from 'fs';
import { routeHandler, transport } from '@utilities/common-utils';
import { EmailType } from '@custom-types/types.d';

export const sendEmail = routeHandler<EmailType>(async (req, res) => {

	const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const dateObj = new Date();


	const { emailDesc, emailSub, senderEmail, senderLocation, senderName } = req.body;

	const ISODate = `${monthsShort[dateObj.getMonth()]} ${dateObj.getDate()} ${dateObj.getFullYear()}`;

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
				senderName,
				senderLocation
			})
		});
		res.status(200).json('success');
	} catch (e: any) {
		console.log(e.message);
		res.status(500).json('server side error');
	}
});