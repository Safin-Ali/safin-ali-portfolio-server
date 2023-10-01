import { SkillsModel } from '@model/skills-schema';
import { Response} from 'express';

export async function getSkills(_:unknown, res: Response) {
	const result = await SkillsModel.find();
	return res.send(result);
}