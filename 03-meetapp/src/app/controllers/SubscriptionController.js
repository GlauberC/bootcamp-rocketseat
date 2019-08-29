import * as Yup from 'yup';
import User from '../models/User';
import Meetup from '../models/Meetup';
import Subscription from '../models/Subscription';
import File from '../models/File';

class SubscriptionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      meetup_id: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const user = await User.findByPk(req.userId);
    const { meetup_id } = req.body;
    const meetup = await Meetup.findByPk(meetup_id);

    //
    //  verify if it is a past meetup
    //
    if (meetup.past) {
      return res
        .status(401)
        .json({ error: 'You cannot subscribe in a past meetup' });
    }

    //
    // verify if the user is the creator of the meetup
    //
    if (user.id === meetup.user_id) {
      return res
        .status(400)
        .json({ error: 'You cannot subscribe in your own meetup' });
    }

    //
    // verify if the user is already a subscriber
    //

    const subs = await Subscription.findOne({
      where: {
        user_id: user.id,
        meetup_id: meetup.id,
      },
    });
    if (subs) {
      return res.status(400).json({ error: 'You already are a subscriber' });
    }

    //
    // FALTA O ENVIO DE EMAIL
    //

    const subscription = await Subscription.create({
      user_id: user.id,
      meetup_id,
    });

    return res.json(subscription);
  }

  async index(req, res) {
    const user = await User.findByPk(req.userId);
    const subs = await Subscription.findAll({
      where: {
        user_id: user.id,
      },
      attributes: ['id'],
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: [
            'id',
            'title',
            'description',
            'location',
            'date',
            'past',
          ],
          include: [
            {
              model: File,
              as: 'image',
              attributes: ['id', 'path', 'url'],
            },
            {
              model: User,
              as: 'user',
              attributes: ['id', 'name'],
            },
          ],
        },
      ],
    });

    const nonPastSubs = subs.filter(sub => !sub.meetup.past);

    return res.json(nonPastSubs);
  }
}

export default new SubscriptionController();
