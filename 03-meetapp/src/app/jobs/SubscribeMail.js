import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class SubscribeMail {
  get key() {
    return 'SubscribeMail';
  }

  async handle({ data }) {
    const { meetup, user, host } = data;

    console.log('The Queue has been process');

    await Mail.sendMail({
      to: `${host.name} <${host.email}>`,
      subject: 'Novo inscrito para o seu meetup',
      template: 'subscribe',
      context: {
        host: host.name,
        user: user.name,
        date: format(parseISO(meetup.date), "'dia' dd 'de' MMMM', às' H:mm'h", {
          locale: pt,
        }),
        location: meetup.location,
      },
    });
  }
}

export default new SubscribeMail();
