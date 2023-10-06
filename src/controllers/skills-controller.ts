import { SkillsModel } from '@model/skills-schema';
import { routeHandler } from '@utilities/common-utilities';

/**
 * Get skills data as `array`.
 * @returns {Promise<void>}
 */
export const getSkills = routeHandler(async (_, res) => {
	const result = await SkillsModel.find();
	res.send(result);
});