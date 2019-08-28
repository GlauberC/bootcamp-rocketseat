import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      image_id: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { title, description, location, date, image_id } = req.body;

    const image = await File.findByPk(image_id);
    if (!image) {
      return res.status(400).json({ error: 'Image does not exist' });
    }

    //
    //  check for past dates
    //

    const hourStart = startOfHour(parseISO(date));
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const user = await User.findByPk(req.userId);
    const meetup = await Meetup.create({
      title,
      description,
      user_id: user.id,
      location,
      date,
      image_id,
    });
    return res.json(meetup);
  }

  async index(req, res) {
    const meetups = await Meetup.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['id', 'title', 'description', 'date', 'location', 'past'],
      order: ['date'],
      include: [
        { model: File, as: 'image', attributes: ['id', 'path', 'url'] },
      ],
    });
    return res.json(meetups);
  }

  async delete(req, res) {
    const { meetup_id } = req.params;
    const meetup = await Meetup.findByPk(meetup_id);
    if (!meetup) {
      return res.status(400).json({ error: 'This meetup does not exist' });
    }
    const user = await User.findByPk(req.userId);
    if (meetup.user_id !== user.id) {
      return res
        .status(401)
        .json({ error: 'You are not creator of this meetup' });
    }
    //
    //  check for past dates
    //

    const hourStart = startOfHour(meetup.date);
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'You cannot delete past meetups' });
    }

    await Meetup.destroy({
      where: {
        id: meetup.id,
      },
    });

    return res.json({ sucess: 'The Meetup was delete' });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
      image_id: Yup.number(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { meetup_id } = req.params;
    const meetup = await Meetup.findByPk(meetup_id);

    //
    // verify if meetup exists
    //

    if (!meetup) {
      return res.status(400).json({ error: 'This meetup does not exist' });
    }

    const user = await User.findByPk(req.userId);

    //
    // verify if user is the creator
    //

    if (meetup.user_id !== user.id) {
      return res
        .status(401)
        .json({ error: 'You are not creator of this meetup' });
    }

    //
    // verify if it is a past meetup
    //

    const hourStart = startOfHour(meetup.date);
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'You cannot update past meetups' });
    }

    const { date } = req.body;

    //
    // verify if the new date is not a past date
    //

    const newDateStart = startOfHour(parseISO(date));
    if (isBefore(newDateStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const { id, title, description, location, image_id } = await meetup.update(
      req.body
    );

    return res.json({ id, title, description, location, image_id, date });
  }
}
export default new MeetupController();
